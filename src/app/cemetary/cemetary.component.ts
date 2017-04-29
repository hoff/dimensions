// Angular
import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

// Three
import * as THREE from 'three'
import OrbitControls from 'orbit-controls-es6'

@Component({
  selector: 'app-cemetary',
  templateUrl: './cemetary.component.html',
  styleUrls: ['./cemetary.component.css']
})
export class CemetaryComponent implements OnInit, AfterViewInit {

  @ViewChild('sceneContainer') sceneContainer: ElementRef

  scene: THREE.Scene
  renderer: THREE.WebGLRenderer
  camera: THREE.PerspectiveCamera
  controls: THREE.OrbitControls

  composer: THREE.EffectComposer

  // lights
  directional: THREE.DirectionalLight

  // damn (group)
  dam = new THREE.Object3D()

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.setup()
  }

  setup() {
    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    this.renderer.setClearColor(0xffffff, 0.1)
    this.renderer.shadowMap.enabled = true
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
    this.renderer.setSize(this.sceneContainer.nativeElement.scrollWidth, this.sceneContainer.nativeElement.scrollHeight)
    this.renderer.shadowMap.enabled = true;

    this.sceneContainer.nativeElement.appendChild(this.renderer.domElement)

    this.camera = new THREE.PerspectiveCamera(40, this.sceneContainer.nativeElement.scrollWidth / this.sceneContainer.nativeElement.scrollHeight, 1, 10000)
    this.camera.position.z = 5
    this.camera.fov = 60
    this.camera.position.set(0, 17, 26)
    this.camera.lookAt(new THREE.Vector3(0, 0, 0))

    // controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enabled = true;
    this.controls.autoRotate = true
    this.controls.maxDistance = 1500;
    this.controls.minDistance = 0;
    this.controls.autoRotateSpeed = 0.5
    this.controls.autoRotate = false

    // lights
    this.directional = new THREE.DirectionalLight(0xFFFFFF, 1)
    this.directional.position.set(10, 20, 1);
    this.directional.target.position.set(0, 0, 0);
    this.directional.castShadow = true;
    this.directional.shadow.radius = 0.5;
    this.directional.shadow.camera.visible = true
    this.directional.shadowCameraNear = 3
    this.directional.shadowCameraFar = 40
    this.directional.shadowCameraLeft = -20
    this.directional.shadowCameraRight = 20
    this.directional.shadowCameraTop = 20
    this.directional.shadowCameraBottom = -20
    
    this.directional.shadowBias = 0.0001
    this.directional.shadowMapWidth = 2000
    this.directional.shadowMapHeight = 2000

    // sun shadow helper
    let helper = new THREE.CameraHelper(this.directional.shadow.camera)
    this.scene.add(helper)

    this.scene.add(this.directional)

    // ambient
    let ambient = new THREE.AmbientLight(0xffffff, 0.1)
    this.scene.add(ambient)

    

    // floor
    let planeGeo = new THREE.PlaneBufferGeometry(50, 50)
    let planeMat = new THREE.MeshPhongMaterial({ color: 0xffeefe })
    let planeMesh = new THREE.Mesh(planeGeo, planeMat)
    planeMesh.rotateX(toRadians(270))
    planeMesh.receiveShadow = true
    //this.scene.add(planeMesh)

    this.dam.add(planeMesh)

    // composer
    console.log(THREE.EffectComposer)
    //this.composer = new THREE.EffectComposer(this.renderer)

    // passes
    let sup = THREE.CopyShader
    let rp = THREE.RenderPass
    let sp = THREE.ShaderPass


    // box
    let boxWidth = 1.2
    let rows = 9
    let boxesPerRow = 35

    for (let i = 0; i < rows; i++) {

      let row = new THREE.Object3D()
      row.position.z = i * 2
      row.position.x = ((i % 2) * boxWidth) - (boxesPerRow * boxWidth)
      console.log('row position', i)

      for (let j = 0; j < boxesPerRow; j++) {
        let geo = new THREE.BoxGeometry(boxWidth, 1, 0.7)
      
        geo.vertices[0] = new THREE.Vector3( geo.vertices[0].x,  geo.vertices[0].y,  geo.vertices[0].z - 0.5)
        geo.vertices[5] = new THREE.Vector3( geo.vertices[5].x,  geo.vertices[5].y,  geo.vertices[5].z - 0.5)
        
        let mat = new THREE.MeshPhongMaterial({ color: 0xccb297 })
        let mesh = new THREE.Mesh(geo, mat)
      
        mesh.position.y = 0.5 // just put it on the ground
        // move the box to the right
        mesh.position.x = j * (boxWidth * 2)
        console.log(j)
        mesh.castShadow = true
        row.add(mesh)
      }

      
      this.dam.add(row)
    }
    this.dam.rotateX(toRadians(20))
    this.scene.add(this.dam)




    this.animate()
  }

  animate = () => {
    this.controls.update()
    // this.composer.render()
    this.renderer.render(this.scene, this.camera)
    requestAnimationFrame(this.animate)
  }

}

function toRadians(degrees: number) {
  return degrees * Math.PI / 180
}

/**
 * <!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body style="background:#fff;">
<script src="http://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.min.js"></script>
<canvas id="canvas"></canvas>
<script id="jsbin-javascript">
var width = window.innerWidth, height = window.innerHeight / 2;
var size = 256;
var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
var camera, scene, renderer, geometry, texture, mesh;
function changeCanvas() {
    ctx.font = '20pt Arial';
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(10, 10, canvas.width - 20, canvas.height - 20);
    ctx.fillStyle = 'black';
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(new Date().getTime(), canvas.width / 2, canvas.height / 2);
}
function init() {
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
    
  scene = new THREE.Scene();
  
    camera = new THREE.PerspectiveCamera(70, width / height, 1, 1000);
    camera.position.z = 500;
    scene.add(camera);
    texture = new THREE.Texture(canvas);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    geometry = new THREE.BoxGeometry( 200, 200, 200 );
    mesh = new THREE.Mesh( geometry, material );
    scene.add( mesh );
    canvas.width = canvas.height = size;
}
function animate() {
    requestAnimationFrame(animate);
  
    changeCanvas();
    texture.needsUpdate = true;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
init();
animate();
</script>
</body>
</html>
 */