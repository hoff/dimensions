import * as THREE from 'three'
import { GPUParticleSystem } from './gpuparticle-system'

export class GPUParticleContainer {

    PARTICLE_COUNT = 100000
    PARTICLE_CURSOR = 0
    time = 0
    offset = 0
    count = 0
    DPR = window.devicePixelRatio
    particleUpdate = false
    particleShaderGeo = new THREE.BufferGeometry()
    particleShaderMat

    position = new THREE.Vector3()
    velocity = new THREE.Vector3()
    color = new THREE.Color()

    constructor(PARTICLE_COUNT, public GPUParticleSystem: GPUParticleSystem) {
        THREE.Object3D.apply(this, arguments)
        this.particleShaderMat = this.GPUParticleSystem.particleShaderMat
        this.setup()
        this.init()
    }

    setup = function () {
        // geometry
        this.particleShaderGeo.addAttribute('position', new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT * 3), 3).setDynamic(true));
        this.particleShaderGeo.addAttribute('positionStart', new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT * 3), 3).setDynamic(true));
        this.particleShaderGeo.addAttribute('startTime', new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT), 1).setDynamic(true));
        this.particleShaderGeo.addAttribute('velocity', new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT * 3), 3).setDynamic(true));
        this.particleShaderGeo.addAttribute('turbulence', new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT), 1).setDynamic(true));
        this.particleShaderGeo.addAttribute('color', new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT * 3), 3).setDynamic(true));
        this.particleShaderGeo.addAttribute('size', new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT), 1).setDynamic(true));
        this.particleShaderGeo.addAttribute('lifeTime', new THREE.BufferAttribute(new Float32Array(this.PARTICLE_COUNT), 1).setDynamic(true));

    }

    spawnParticle = function (options) {

        let positionStartAttribute = this.particleShaderGeo.getAttribute('positionStart');
        let startTimeAttribute = this.particleShaderGeo.getAttribute('startTime');
        let velocityAttribute = this.particleShaderGeo.getAttribute('velocity');
        let turbulenceAttribute = this.particleShaderGeo.getAttribute('turbulence');
        let colorAttribute = this.particleShaderGeo.getAttribute('color');
        let sizeAttribute = this.particleShaderGeo.getAttribute('size');
        let lifeTimeAttribute = this.particleShaderGeo.getAttribute('lifeTime');

        options = options || {};

        // setup reasonable default values for all arguments

        this.position = options.position !== undefined ? this.position.copy(options.position) : this.position.set(0, 0, 0);
        this.velocity = options.velocity !== undefined ? this.velocity.copy(options.velocity) : this.velocity.set(0, 0, 0);
        this.color = options.color !== undefined ? this.color.set(options.color) : this.color.set(0xffffff);

        let positionRandomness = options.positionRandomness !== undefined ? options.positionRandomness : 0;
        let velocityRandomness = options.velocityRandomness !== undefined ? options.velocityRandomness : 0;
        let colorRandomness = options.colorRandomness !== undefined ? options.colorRandomness : 1;
        let turbulence = options.turbulence !== undefined ? options.turbulence : 1;
        let lifetime = options.lifetime !== undefined ? options.lifetime : 5;
        let size = options.size !== undefined ? options.size : 10;
        let sizeRandomness = options.sizeRandomness !== undefined ? options.sizeRandomness : 0;
        let smoothPosition = options.smoothPosition !== undefined ? options.smoothPosition : false;

        if (this.DPR !== undefined) { size *= this.DPR }

        let i = this.PARTICLE_CURSOR;

        // position

        positionStartAttribute.array[i * 3 + 0] = this.position.x + (this.GPUParticleSystem.random() * positionRandomness);
        positionStartAttribute.array[i * 3 + 1] = this.position.y + (this.GPUParticleSystem.random() * positionRandomness);
        positionStartAttribute.array[i * 3 + 2] = this.position.z + (this.GPUParticleSystem.random() * positionRandomness);

        if (smoothPosition === true) {

            positionStartAttribute.array[i * 3 + 0] += - (this.velocity.x * this.GPUParticleSystem.random());
            positionStartAttribute.array[i * 3 + 1] += - (this.velocity.y * this.GPUParticleSystem.random());
            positionStartAttribute.array[i * 3 + 2] += - (this.velocity.z * this.GPUParticleSystem.random());

        }

        // velocity

        let maxVel = 2;

        let velX = this.velocity.x + this.GPUParticleSystem.random() * velocityRandomness;
        let velY = this.velocity.y + this.GPUParticleSystem.random() * velocityRandomness;
        let velZ = this.velocity.z + this.GPUParticleSystem.random() * velocityRandomness;

        velX = THREE.Math.clamp((velX - (- maxVel)) / (maxVel - (- maxVel)), 0, 1);
        velY = THREE.Math.clamp((velY - (- maxVel)) / (maxVel - (- maxVel)), 0, 1);
        velZ = THREE.Math.clamp((velZ - (- maxVel)) / (maxVel - (- maxVel)), 0, 1);

        velocityAttribute.array[i * 3 + 0] = velX;
        velocityAttribute.array[i * 3 + 1] = velY;
        velocityAttribute.array[i * 3 + 2] = velZ;

        // color

        this.color.r = THREE.Math.clamp(this.color.r + this.GPUParticleSystem.random() * colorRandomness, 0, 1);
        this.color.g = THREE.Math.clamp(this.color.g + this.GPUParticleSystem.random() * colorRandomness, 0, 1);
        this.color.b = THREE.Math.clamp(this.color.b + this.GPUParticleSystem.random() * colorRandomness, 0, 1);

        colorAttribute.array[i * 3 + 0] = this.color.r;
        colorAttribute.array[i * 3 + 1] = this.color.g;
        colorAttribute.array[i * 3 + 2] = this.color.b;

        // turbulence, size, lifetime and starttime

        turbulenceAttribute.array[i] = turbulence;
        sizeAttribute.array[i] = size + this.GPUParticleSystem.random() * sizeRandomness;
        lifeTimeAttribute.array[i] = lifetime;
        startTimeAttribute.array[i] = this.time + this.GPUParticleSystem.random() * 2e-2;

        // offset

        if (this.offset === 0) {

            this.offset = this.PARTICLE_CURSOR;

        }

        // counter and cursor

        this.count++;
        this.PARTICLE_CURSOR++;

        if (this.PARTICLE_CURSOR >= this.PARTICLE_COUNT) {
            this.PARTICLE_CURSOR = 0;
        }
        this.particleUpdate = true;

    };

    init = function () {

        this.particleSystem = new THREE.Points(this.particleShaderGeo, this.particleShaderMat);
        this.particleSystem.frustumCulled = false;
        this.add(this.particleSystem);

    };

    update = function (time) {

        this.time = time;
        this.particleShaderMat.uniforms.uTime.value = time;

        this.geometryUpdate();

    };

    geometryUpdate = function () {

        if (this.particleUpdate === true) {

            this.particleUpdate = false;

            let positionStartAttribute = this.particleShaderGeo.getAttribute('positionStart');
            let startTimeAttribute = this.particleShaderGeo.getAttribute('startTime');
            let velocityAttribute = this.particleShaderGeo.getAttribute('velocity');
            let turbulenceAttribute = this.particleShaderGeo.getAttribute('turbulence');
            let colorAttribute = this.particleShaderGeo.getAttribute('color');
            let sizeAttribute = this.particleShaderGeo.getAttribute('size');
            let lifeTimeAttribute = this.particleShaderGeo.getAttribute('lifeTime');

            if (this.offset + this.count < this.PARTICLE_COUNT) {

                positionStartAttribute.updateRange.offset = this.offset * positionStartAttribute.itemSize;
                startTimeAttribute.updateRange.offset = this.offset * startTimeAttribute.itemSize;
                velocityAttribute.updateRange.offset = this.offset * velocityAttribute.itemSize;
                turbulenceAttribute.updateRange.offset = this.offset * turbulenceAttribute.itemSize;
                colorAttribute.updateRange.offset = this.offset * colorAttribute.itemSize;
                sizeAttribute.updateRange.offset = this.offset * sizeAttribute.itemSize;
                lifeTimeAttribute.updateRange.offset = this.offset * lifeTimeAttribute.itemSize;

                positionStartAttribute.updateRange.count = this.count * positionStartAttribute.itemSize;
                startTimeAttribute.updateRange.count = this.count * startTimeAttribute.itemSize;
                velocityAttribute.updateRange.count = this.count * velocityAttribute.itemSize;
                turbulenceAttribute.updateRange.count = this.count * turbulenceAttribute.itemSize;
                colorAttribute.updateRange.count = this.count * colorAttribute.itemSize;
                sizeAttribute.updateRange.count = this.count * sizeAttribute.itemSize;
                lifeTimeAttribute.updateRange.count = this.count * lifeTimeAttribute.itemSize;

            } else {

                positionStartAttribute.updateRange.offset = 0;
                startTimeAttribute.updateRange.offset = 0;
                velocityAttribute.updateRange.offset = 0;
                turbulenceAttribute.updateRange.offset = 0;
                colorAttribute.updateRange.offset = 0;
                sizeAttribute.updateRange.offset = 0;
                lifeTimeAttribute.updateRange.offset = 0;

                positionStartAttribute.updateRange.count = positionStartAttribute.count;
                startTimeAttribute.updateRange.count = startTimeAttribute.count;
                velocityAttribute.updateRange.count = velocityAttribute.count;
                turbulenceAttribute.updateRange.count = turbulenceAttribute.count;
                colorAttribute.updateRange.count = colorAttribute.count;
                sizeAttribute.updateRange.count = sizeAttribute.count;
                lifeTimeAttribute.updateRange.count = lifeTimeAttribute.count;

            }

            positionStartAttribute.needsUpdate = true;
            startTimeAttribute.needsUpdate = true;
            velocityAttribute.needsUpdate = true;
            turbulenceAttribute.needsUpdate = true;
            colorAttribute.needsUpdate = true;
            sizeAttribute.needsUpdate = true;
            lifeTimeAttribute.needsUpdate = true;

            this.offset = 0;
            this.count = 0;
        }
    }

    dispose = function () {
        this.particleShaderGeo.dispose();
    }
}

GPUParticleContainer.prototype = Object.create( THREE.Object3D.prototype )
GPUParticleContainer.prototype.constructor = GPUParticleContainer
