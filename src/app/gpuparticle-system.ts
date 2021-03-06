import * as THREE from 'three'
import { GPUParticleContainer } from './gpuparticle-container'

export class GPUParticleSystem {

    GPUParticleShader = {

        vertexShader: [

            'uniform float uTime;',
            'uniform float uScale;',
            'uniform sampler2D tNoise;',

            'attribute vec3 positionStart;',
            'attribute float startTime;',
            'attribute vec3 velocity;',
            'attribute float turbulence;',
            'attribute vec3 color;',
            'attribute float size;',
            'attribute float lifeTime;',

            'varying vec4 vColor;',
            'varying float lifeLeft;',

            'void main() {',

            // unpack things from our attributes'

            '	vColor = vec4( color, 1.0 );',

            // convert our velocity back into a value we can use'

            '	vec3 newPosition;',
            '	vec3 v;',

            '	float timeElapsed = uTime - startTime;',

            '	lifeLeft = 1.0 - ( timeElapsed / lifeTime );',

            '	gl_PointSize = ( uScale * size ) * lifeLeft;',

            '	v.x = ( velocity.x - 0.5 ) * 3.0;',
            '	v.y = ( velocity.y - 0.5 ) * 3.0;',
            '	v.z = ( velocity.z - 0.5 ) * 3.0;',

            '	newPosition = positionStart + ( v * 10.0 ) * ( uTime - startTime );',

            '	vec3 noise = texture2D( tNoise, vec2( newPosition.x * 0.015 + ( uTime * 0.05 ), newPosition.y * 0.02 + ( uTime * 0.015 ) ) ).rgb;',
            '	vec3 noiseVel = ( noise.rgb - 0.5 ) * 30.0;',

            '	newPosition = mix( newPosition, newPosition + vec3( noiseVel * ( turbulence * 5.0 ) ), ( timeElapsed / lifeTime ) );',

            '	if( v.y > 0. && v.y < .05 ) {',

            '		lifeLeft = 0.0;',

            '	}',

            '	if( v.x < - 1.45 ) {',

            '		lifeLeft = 0.0;',

            '	}',

            '	if( timeElapsed > 0.0 ) {',

            '		gl_Position = projectionMatrix * modelViewMatrix * vec4( newPosition, 1.0 );',

            '	} else {',

            '		gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );',
            '		lifeLeft = 0.0;',
            '		gl_PointSize = 0.;',

            '	}',

            '}'

        ].join('\n'),

        fragmentShader: [

            'float scaleLinear( float value, vec2 valueDomain ) {',

            '	return ( value - valueDomain.x ) / ( valueDomain.y - valueDomain.x );',

            '}',

            'float scaleLinear( float value, vec2 valueDomain, vec2 valueRange ) {',

            '	return mix( valueRange.x, valueRange.y, scaleLinear( value, valueDomain ) );',

            '}',

            'varying vec4 vColor;',
            'varying float lifeLeft;',

            'uniform sampler2D tSprite;',

            'void main() {',

            '	float alpha = 0.;',

            '	if( lifeLeft > 0.995 ) {',

            '		alpha = scaleLinear( lifeLeft, vec2( 1.0, 0.995 ), vec2( 0.0, 1.0 ) );',

            '	} else {',

            '		alpha = lifeLeft * 0.75;',

            '	}',

            '	vec4 tex = texture2D( tSprite, gl_PointCoord );',
            '	gl_FragColor = vec4( vColor.rgb * tex.a, alpha * tex.a );',

            '}'

        ].join('\n')

    }

    PARTICLE_COUNT
    PARTICLE_CONTAINERS
    PARTICLES_PER_CONTAINER
    PARTICLE_NOISE_TEXTURE
    particleNoiseTex
    particleSpriteTex
    particleShaderMat
    PARTICLE_SPRITE_TEXTURE
    PARTICLE_CURSOR = 0
    time = 0
    particleContainers = []
    rand = []

    i: number

    constructor() {
        let options = {
            maxParticles: 250000,
            containerCount: 1,
            particleNoiseTex: null,
            particleSpriteTex: null,
        }

        THREE.Object3D.apply(this, arguments)

        this.PARTICLE_COUNT = options.maxParticles || 1000000
        this.PARTICLE_CONTAINERS = options.containerCount || 1

        this.PARTICLE_NOISE_TEXTURE = options.particleNoiseTex || null
        this.PARTICLE_SPRITE_TEXTURE = options.particleSpriteTex || null
        this.PARTICLES_PER_CONTAINER = Math.ceil(this.PARTICLE_COUNT / this.PARTICLE_CONTAINERS)

        // preload a million random numbers
        for (this.i = 1e5; this.i > 0; this.i--) {
            this.rand.push(Math.random() - 0.5)
        }

        let textureLoader = new THREE.TextureLoader()
        this.particleNoiseTex = this.PARTICLE_NOISE_TEXTURE || textureLoader.load('/assets/textures/perlin-512.png')
        this.particleNoiseTex.wrapS = this.particleNoiseTex.wrapT = THREE.RepeatWrapping
        this.particleSpriteTex = this.PARTICLE_SPRITE_TEXTURE || textureLoader.load('/assets/textures/particle2.png');
        this.particleSpriteTex.wrapS = this.particleSpriteTex.wrapT = THREE.RepeatWrapping

        this.particleShaderMat = new THREE.ShaderMaterial({
            transparent: true,
            depthWrite: false,
            uniforms: {
                'uTime': {
                    value: 0.0
                },
                'uScale': {
                    value: 1.0
                },
                'tNoise': {
                    value: this.particleNoiseTex
                },
                'tSprite': {
                    value: this.particleSpriteTex
                }
            },
            blending: THREE.AdditiveBlending,
            vertexShader: this.GPUParticleShader.vertexShader,
            fragmentShader: this.GPUParticleShader.fragmentShader
        })

        this.particleShaderMat.defaultAttributeValues.particlePositionsStartTime = [0, 0, 0, 0];
        this.particleShaderMat.defaultAttributeValues.particleVelColSizeLife = [0, 0, 0, 0];

        this.init()

    }

    random = function () {
        return ++this.i >= this.rand.length ? this.rand[this.i = 1] : this.rand[this.i]
    }

    init = function () {
        for (let i = 0; i < this.PARTICLE_CONTAINERS; i++) {
            let c = new GPUParticleContainer(this.PARTICLES_PER_CONTAINER, this);
            this.particleContainers.push(c);
            this.add(c);
        }
    }

    spawnParticle = function (options) {
        this.PARTICLE_CURSOR++;
        if (this.PARTICLE_CURSOR >= this.PARTICLE_COUNT) {
            this.PARTICLE_CURSOR = 1
        }

        let currentContainer = this.particleContainers[Math.floor(this.PARTICLE_CURSOR / this.PARTICLES_PER_CONTAINER)]
        currentContainer.spawnParticle(options)
    }

    update = function (time) {
        for (let i = 0; i < this.PARTICLE_CONTAINERS; i++) {
            this.particleContainers[i].update(time)
        }
    }
    dispose = function () {
        this.particleShaderMat.dispose()
        this.particleNoiseTex.dispose()
        this.particleSpriteTex.dispose()
        for (let i = 0; i < this.PARTICLE_CONTAINERS; i++) {
            this.particleContainers[i].dispose();
        }
    }
}

GPUParticleSystem.prototype = Object.create(THREE.Object3D.prototype)
GPUParticleSystem.prototype.constructor = GPUParticleSystem
