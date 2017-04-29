webpackJsonp([1,4],{

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 154;


/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(180);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(247),
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__midi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__animation_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__color_page_color_page_component__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__show_show_component__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__map_to_iterable_pipe__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__stringify_pipe__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__decimal_to_percent_pipe__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__space_space_component__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__home_page_home_page_component__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__entertainer_entertainer_component__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__flat_page_flat_page_component__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__slider_slider_component__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__toggle_toggle_component__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__piano_piano_component__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__control_panel_control_panel_component__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__cemetary_cemetary_component__ = __webpack_require__(166);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_17__home_page_home_page_component__["a" /* HomePageComponent */] },
    { path: 'cemetary', component: __WEBPACK_IMPORTED_MODULE_24__cemetary_cemetary_component__["a" /* CemetaryComponent */] },
    { path: 'piano', component: __WEBPACK_IMPORTED_MODULE_22__piano_piano_component__["a" /* PianoComponent */] },
    { path: 'flat', component: __WEBPACK_IMPORTED_MODULE_19__flat_page_flat_page_component__["a" /* FlatPageComponent */] },
    { path: 'color', component: __WEBPACK_IMPORTED_MODULE_11__color_page_color_page_component__["a" /* ColorPageComponent */] },
    { path: 'panel', component: __WEBPACK_IMPORTED_MODULE_23__control_panel_control_panel_component__["a" /* ControlPanelComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__color_page_color_page_component__["a" /* ColorPageComponent */],
            __WEBPACK_IMPORTED_MODULE_12__show_show_component__["a" /* ShowComponent */],
            __WEBPACK_IMPORTED_MODULE_13__map_to_iterable_pipe__["a" /* MapToIterablePipe */],
            __WEBPACK_IMPORTED_MODULE_14__stringify_pipe__["a" /* StringifyPipe */],
            __WEBPACK_IMPORTED_MODULE_15__decimal_to_percent_pipe__["a" /* DecimalToPercentPipe */],
            __WEBPACK_IMPORTED_MODULE_16__space_space_component__["a" /* SpaceComponent */],
            __WEBPACK_IMPORTED_MODULE_17__home_page_home_page_component__["a" /* HomePageComponent */],
            __WEBPACK_IMPORTED_MODULE_18__entertainer_entertainer_component__["a" /* EntertainerComponent */],
            __WEBPACK_IMPORTED_MODULE_19__flat_page_flat_page_component__["a" /* FlatPageComponent */],
            __WEBPACK_IMPORTED_MODULE_20__slider_slider_component__["a" /* SliderComponent */],
            __WEBPACK_IMPORTED_MODULE_21__toggle_toggle_component__["a" /* ToggleComponent */],
            __WEBPACK_IMPORTED_MODULE_22__piano_piano_component__["a" /* PianoComponent */],
            __WEBPACK_IMPORTED_MODULE_23__control_panel_control_panel_component__["a" /* ControlPanelComponent */],
            __WEBPACK_IMPORTED_MODULE_24__cemetary_cemetary_component__["a" /* CemetaryComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            // material: https://material.angular.io/guide/getting-started
            // BrowserAnimationsModule,
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MdButtonModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["b" /* MdCheckboxModule */], __WEBPACK_IMPORTED_MODULE_7__angular_material__["c" /* MdSliderModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__midi_service__["a" /* MIDIService */],
            __WEBPACK_IMPORTED_MODULE_10__animation_service__["a" /* AnimationService */],
        ],
        schemas: [
            __WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* CUSTOM_ELEMENTS_SCHEMA */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_orbit_controls_es6__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CemetaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular

// Three


var CemetaryComponent = (function () {
    function CemetaryComponent() {
        var _this = this;
        // damn (group)
        this.dam = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
        this.animate = function () {
            _this.controls.update();
            // this.composer.render()
            _this.renderer.render(_this.scene, _this.camera);
            requestAnimationFrame(_this.animate);
        };
    }
    CemetaryComponent.prototype.ngOnInit = function () {
    };
    CemetaryComponent.prototype.ngAfterViewInit = function () {
        this.setup();
    };
    CemetaryComponent.prototype.setup = function () {
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({ alpha: true, antialias: true });
        this.renderer.setClearColor(0xffffff, 0.1);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = __WEBPACK_IMPORTED_MODULE_1_three__["PCFSoftShadowMap"];
        this.renderer.setSize(this.sceneContainer.nativeElement.scrollWidth, this.sceneContainer.nativeElement.scrollHeight);
        this.renderer.shadowMap.enabled = true;
        this.sceneContainer.nativeElement.appendChild(this.renderer.domElement);
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](40, this.sceneContainer.nativeElement.scrollWidth / this.sceneContainer.nativeElement.scrollHeight, 1, 10000);
        this.camera.position.z = 5;
        this.camera.fov = 60;
        this.camera.position.set(0, 17, 26);
        this.camera.lookAt(new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, 0, 0));
        // controls
        this.controls = new __WEBPACK_IMPORTED_MODULE_2_orbit_controls_es6__["a" /* default */](this.camera, this.renderer.domElement);
        this.controls.enabled = true;
        this.controls.autoRotate = true;
        this.controls.maxDistance = 1500;
        this.controls.minDistance = 0;
        this.controls.autoRotateSpeed = 0.5;
        this.controls.autoRotate = false;
        // lights
        this.directional = new __WEBPACK_IMPORTED_MODULE_1_three__["DirectionalLight"](0xFFFFFF, 1);
        this.directional.position.set(10, 20, 1);
        this.directional.target.position.set(0, 0, 0);
        this.directional.castShadow = true;
        this.directional.shadow.radius = 0.5;
        this.directional.shadow.camera.visible = true;
        this.directional.shadowCameraNear = 3;
        this.directional.shadowCameraFar = 40;
        this.directional.shadowCameraLeft = -20;
        this.directional.shadowCameraRight = 20;
        this.directional.shadowCameraTop = 20;
        this.directional.shadowCameraBottom = -20;
        this.directional.shadowBias = 0.0001;
        this.directional.shadowMapWidth = 2000;
        this.directional.shadowMapHeight = 2000;
        // sun shadow helper
        var helper = new __WEBPACK_IMPORTED_MODULE_1_three__["CameraHelper"](this.directional.shadow.camera);
        this.scene.add(helper);
        this.scene.add(this.directional);
        // ambient
        var ambient = new __WEBPACK_IMPORTED_MODULE_1_three__["AmbientLight"](0xffffff, 0.1);
        this.scene.add(ambient);
        // floor
        var planeGeo = new __WEBPACK_IMPORTED_MODULE_1_three__["PlaneBufferGeometry"](50, 50);
        var planeMat = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0xffeefe });
        var planeMesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](planeGeo, planeMat);
        planeMesh.rotateX(toRadians(270));
        planeMesh.receiveShadow = true;
        //this.scene.add(planeMesh)
        this.dam.add(planeMesh);
        // composer
        console.log(__WEBPACK_IMPORTED_MODULE_1_three__["EffectComposer"]);
        //this.composer = new THREE.EffectComposer(this.renderer)
        // passes
        var sup = __WEBPACK_IMPORTED_MODULE_1_three__["CopyShader"];
        var rp = __WEBPACK_IMPORTED_MODULE_1_three__["RenderPass"];
        var sp = __WEBPACK_IMPORTED_MODULE_1_three__["ShaderPass"];
        // box
        var boxWidth = 1.2;
        var rows = 9;
        var boxesPerRow = 35;
        for (var i = 0; i < rows; i++) {
            var row = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
            row.position.z = i * 2;
            row.position.x = ((i % 2) * boxWidth) - (boxesPerRow * boxWidth);
            console.log('row position', i);
            for (var j = 0; j < boxesPerRow; j++) {
                var geo = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](boxWidth, 1, 0.7);
                geo.vertices[0] = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](geo.vertices[0].x, geo.vertices[0].y, geo.vertices[0].z - 0.5);
                geo.vertices[5] = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](geo.vertices[5].x, geo.vertices[5].y, geo.vertices[5].z - 0.5);
                var mat = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0xccb297 });
                var mesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](geo, mat);
                mesh.position.y = 0.5; // just put it on the ground
                // move the box to the right
                mesh.position.x = j * (boxWidth * 2);
                console.log(j);
                mesh.castShadow = true;
                row.add(mesh);
            }
            this.dam.add(row);
        }
        this.dam.rotateX(toRadians(20));
        this.scene.add(this.dam);
        this.animate();
    };
    return CemetaryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewChild */])('sceneContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], CemetaryComponent.prototype, "sceneContainer", void 0);
CemetaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-cemetary',
        template: __webpack_require__(248),
        styles: [__webpack_require__(234)]
    }),
    __metadata("design:paramtypes", [])
], CemetaryComponent);

function toRadians(degrees) {
    return degrees * Math.PI / 180;
}
var _a;
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
//# sourceMappingURL=cemetary.component.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__midi_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ColorPageComponent = (function () {
    function ColorPageComponent(midi) {
        this.midi = midi;
        this.hueDecimal = 0.5;
        this.satDecimal = 0.8;
        this.lightDecimal = 0.5;
    }
    ColorPageComponent.prototype.ngOnInit = function () {
    };
    ColorPageComponent.prototype.hslString = function () {
        var hue = 360 * this.hueDecimal;
        var sat = 100 * this.satDecimal + '%';
        var light = 100 * this.lightDecimal + '%';
        return "hsl(" + hue + ", " + sat + ", " + light + ")";
    };
    return ColorPageComponent;
}());
ColorPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-color-page',
        template: __webpack_require__(249),
        styles: [__webpack_require__(235)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__midi_service__["a" /* MIDIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__midi_service__["a" /* MIDIService */]) === "function" && _a || Object])
], ColorPageComponent);

var _a;
//# sourceMappingURL=color-page.component.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ControlPanelComponent = (function () {
    function ControlPanelComponent() {
        this.jo = 20;
        this.yep = true;
    }
    ControlPanelComponent.prototype.ngOnInit = function () {
    };
    return ControlPanelComponent;
}());
ControlPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-control-panel',
        template: __webpack_require__(250),
        styles: [__webpack_require__(236)]
    }),
    __metadata("design:paramtypes", [])
], ControlPanelComponent);

//# sourceMappingURL=control-panel.component.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DecimalToPercentPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DecimalToPercentPipe = (function () {
    function DecimalToPercentPipe() {
    }
    DecimalToPercentPipe.prototype.transform = function (value, args) {
        return Math.round(value * 100);
    };
    return DecimalToPercentPipe;
}());
DecimalToPercentPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Pipe */])({
        name: 'decimalToPercent'
    })
], DecimalToPercentPipe);

//# sourceMappingURL=decimal-to-percent.pipe.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__midi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_three__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EntertainerComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EntertainerComponent = (function (_super) {
    __extends(EntertainerComponent, _super);
    function EntertainerComponent(midi, animation) {
        var _this = 
        // inherit goodies from Show
        _super.call(this) || this;
        _this.midi = midi;
        _this.animation = animation;
        _this.gravityMPS2 = 10;
        _this.gravityFactor = 1;
        _this.dimensions = {
            gravity: 1,
            kick: 1,
            boxSize: 1,
            spread: 2,
        };
        _this.colors = [];
        _this.colorsRGB = [
            [255, 59, 48, 'G'],
            [255, 149, 0, 'F'],
            [255, 204, 0, 'E'],
            [76, 217, 100, 'D'],
            [90, 200, 250, 'C'],
            [52, 170, 220, 'B'],
            [88, 86, 214, 'A'],
            [255, 59, 48, 'G'],
            [255, 149, 0, 'F'],
            [255, 204, 0, 'E'],
            [76, 217, 100, 'D'],
            [90, 200, 250, 'C'],
            [52, 170, 220, 'B'],
            [88, 86, 214, 'A'],
        ];
        _this.noteColors = {
            A: [88, 86, 214],
            Bb: [255, 240, 230],
            B: [52, 170, 220],
            C: [90, 200, 250],
            'C#': [255, 420, 230],
            D: [76, 217, 100],
            'D#': [76, 255, 100],
            E: [255, 204, 0],
            F: [255, 149, 0],
            'F#': [255, 100, 0],
            G: [255, 59, 48],
            'G#': [255, 420, 230],
        };
        _this.baseNotes = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        _this.friends = {
            a: ['e', 'c'],
            b: ['f#', 'd#'],
            c: ['g', 'e'],
            d: ['a', 'f#'],
            e: ['b', 'g#'],
            f: ['c', 'a'],
            g: ['d', 'b']
        };
        _this.animate = function () {
            // required?
            _this.controls.update();
            // push a message down the before render stream
            // push current dimensions down the stream.
            _this.animation.beforeRenderSource.next(_this.dimensions);
            // repeat
            requestAnimationFrame(_this.animate);
            // render
            _this.renderer.render(_this.scene, _this.camera);
        };
        for (var i = 0; i < 12; i++) {
            _this.colors.push('#abcdef');
        }
        return _this;
    }
    EntertainerComponent.prototype.setDimension = function (dimension, value) {
        this.dimensions[dimension] = parseFloat(value);
    };
    EntertainerComponent.prototype.ngOnInit = function () {
    };
    EntertainerComponent.prototype.ngAfterViewInit = function () {
        this.setupShow(this.midi, this.sceneContainer.nativeElement);
        this.scene.background = new __WEBPACK_IMPORTED_MODULE_4_three__["Color"](0xffffff);
        this.camera.position.set(0, 15, 25);
        var myKeyCount = 49;
        var toTheLeft = 15;
        var toTheRight = 12;
        var totalKeyCount = myKeyCount + toTheLeft + toTheRight;
        for (var i = 0; i < totalKeyCount; i++) {
            var midiKey = i + 20;
            var x = (i - (totalKeyCount / 2)) * 1; // meter width
            var y = (i - (totalKeyCount / 2)) * 0.2;
            var note = new Note(this, midiKey, this.randomColor(), this.midi, this.animation, this.scene, x, y);
            this.scene.add(note.base);
        }
        this.animate();
    };
    EntertainerComponent.prototype.randomColor = function () {
        return Math.floor(Math.random() * 16777215);
    };
    return EntertainerComponent;
}(__WEBPACK_IMPORTED_MODULE_1__show__["a" /* Show */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('width'),
    __metadata("design:type", Number)
], EntertainerComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('height'),
    __metadata("design:type", Number)
], EntertainerComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewChild */])('sceneContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], EntertainerComponent.prototype, "sceneContainer", void 0);
EntertainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-entertainer',
        template: "\n    <h2>the entertainer!</h2>\n    <flex-row *ngIf=\"0\">\n    \n    <flex-col *ngFor=\"let key of baseNotes\" style=\"width: 200px;\">\n\n    <div [style.background-color]=\"'rgb(' + noteColors[friends[key][0]][0] + ',' + noteColors[friends[key][0]][1] + ',' + noteColors[friends[key][0]][2] + ')'\">\n      dominant ( {{ friends[key][0] }})\n    </div>\n    \n    <div [style.height.px]=\"100\" [style.background-color]=\"'rgb(' + noteColors[key][0] + ',' + noteColors[key][1] + ',' + noteColors[key][2] + ')'\">\n      <h2>{{ key }}</h2>\n    </div>\n    <div [style.background-color]=\"'rgb(' + noteColors[friends[key][1]][0] + ',' + noteColors[friends[key][1]][1] + ',' + noteColors[friends[key][1]][2] + ')'\">\n      third ( {{ friends[key][1] }})\n    </div>\n\n    </flex-col>\n\n    </flex-row>\n\n\n\n    <br><br>  \ncolors: \n    \n\n    <div *ngFor=\"let color of colorsRGB\">\n\n      <div [style.background-color]=\"'rgb(' + color[0] + ',' + color[1] + ',' + color[2] + ')'\">\n      jo <span *ngIf=\"color[3]\">{{ color [3] }}</span>\n      </div>\n    </div>\n\n    gravity <input type=\"range\" min=\"-10\" max=\"10\" [value]=\"gravityFactor\" \n      (input)=\"setDimension('gravity', $event.target.value)\" step=\"0.5\"/> {{ dimensions.gravity }}\n\n      kick <input type=\"range\" min=\"-10\" max=\"10\" [value]=\"dimensions.kick\" \n      (input)=\"setDimension('kick', $event.target.value)\" step=\"0.5\"/> {{ dimensions.kick }}\n\n      boxSize <input type=\"range\" min=\"-10\" max=\"30\" [value]=\"dimensions.boxSize\" \n      (input)=\"setDimension('boxSize', $event.target.value)\" step=\"0.5\"/> {{ dimensions.boxSize }}\n\n      spread <input type=\"range\" min=\"0\" max=\"10\" [value]=\"dimensions.spread\" \n      (input)=\"setDimension('spread', $event.target.value)\" step=\"0.5\"/> {{ dimensions.spread }}\n      \n<br>\n\n    <button *ngFor=\"let song of midi.songList\" (click)=\"midi.playSong( song )\">{{ song.name }}</button>\n\n    <div \n      #sceneContainer\n      [style.width.px]=\"width\"\n      [style.height.px]=\"height\"\n      [style.background]=\"'lime'\"\n    >\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__midi_service__["a" /* MIDIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__midi_service__["a" /* MIDIService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__animation_service__["a" /* AnimationService */]) === "function" && _c || Object])
], EntertainerComponent);

var Note = (function () {
    function Note(show, midiKey, color, midi, animation, scene, x, y) {
        var _this = this;
        this.show = show;
        this.midiKey = midiKey;
        this.color = color;
        this.midi = midi;
        this.animation = animation;
        this.scene = scene;
        this.x = x;
        this.y = y;
        // make yourself a base!
        this.base = this.construct();
        this.base.position.x = x;
        this.base.position.y = Math.sin(x / 10) * 5;
        // on my key -> down
        this.midi.stream.filter(function (msg) { return msg.key === _this.midiKey && msg.name === 'keydown'; })
            .subscribe(function (msg) {
            _this.onKeyDown(msg);
        });
        // on my key -> up
        this.midi.stream.filter(function (msg) { return msg.key === _this.midiKey && msg.name === 'keyup'; })
            .subscribe(function (msg) {
            _this.onKeyUp(msg);
        });
        // on ANY key down
        this.midi.stream.filter(function (msg) { return msg.name === 'keydown'; })
            .subscribe(function (msg) {
            _this.hotload(msg);
        });
        // try to read the latest value from render stream
        this.animation.beforeRenderStream.subscribe(function (dimensions) {
            _this.dimensions = dimensions;
        });
    }
    Note.prototype.onKeyDown = function (msg) {
        this.fire(msg.velocity);
        this.hotload(msg);
        this.midi.soundNote(0, msg.key, msg.velocity);
    };
    Note.prototype.onKeyUp = function (msg) {
        this.midi.stopNote(0, msg.key, msg.velocity);
    };
    /**
     * create a new vessel, x-position it
     */
    Note.prototype.fire = function (velocity) {
        var color = this.show.colors[this.midiKey % 12];
        var vessel = new Vessle(this.scene, this.midi, this.animation, this.midiKey, parseInt(color.replace('#', ''), 16), this.dimensions.boxSize);
        vessel.mesh.position.x = this.x * this.dimensions.spread;
        vessel.mesh.position.y = this.y;
        vessel.mesh.rotateX(0.1);
        vessel.fire(velocity * 3 * this.dimensions.kick);
        this.scene.add(vessel.mesh);
    };
    /**
     * Hotload youself, depending on your relation to the pressed key.
     * if you are 7 higher
     *
     *
     */
    Note.prototype.hotload = function (msg) {
        // tell me if I am either a multiple. 
        // if I am 4 below, have him as my sub
        // if I am 7, I have him as my dominant.
        if (msg.key % 12 === this.midiKey % 12) {
            this.base.scale.set(2, 2, 2);
        }
        else if (msg.key % 12 === (this.midiKey % 12) - 4) {
            this.base.rotateX(0.2);
        }
    };
    /** make note base */
    Note.prototype.construct = function () {
        var baseGeo = new __WEBPACK_IMPORTED_MODULE_4_three__["BoxGeometry"](1, 1, 5);
        console.log(this.show.colorsRGB);
        var color = this.show.colorsRGB[this.midiKey % 8];
        var baseMat = new __WEBPACK_IMPORTED_MODULE_4_three__["MeshPhongMaterial"]({ color: this.color });
        baseMat.color.setRGB(color[0] / 255, color[1] / 255, color[2] / 255);
        //baseMat.color.setHSL()
        return new __WEBPACK_IMPORTED_MODULE_4_three__["Mesh"](baseGeo, baseMat);
    };
    return Note;
}());
var Vessle = (function () {
    function Vessle(scene, midi, aniation, key, color, size) {
        var _this = this;
        this.scene = scene;
        this.midi = midi;
        this.aniation = aniation;
        this.key = key;
        this.color = color;
        this.size = size;
        this.velocity = new __WEBPACK_IMPORTED_MODULE_4_three__["Vector3"]();
        var baseGeo = new __WEBPACK_IMPORTED_MODULE_4_three__["BoxGeometry"](size, size, size);
        var baseMat = new __WEBPACK_IMPORTED_MODULE_4_three__["MeshPhongMaterial"]({ color: this.color, transparent: true });
        this.mesh = new __WEBPACK_IMPORTED_MODULE_4_three__["Mesh"](baseGeo, baseMat);
        /**
         * Listen to your keyup event and react accordingly
         * e.g. start fading
         */
        this.midi.stream.filter(function (msg) { return msg.key === _this.key && msg.name === 'keyup'; }).take(1).subscribe(function (msg) {
            _this.mesh.material.opacity = 0.1;
        });
        /**
         * before each rendering, update you position
         * by applying all forces acting on the vessle
         *
         * here, we could stick the dimensions in!
         */
        this.animationSubscription = this.aniation.beforeRenderStream.subscribe(function (dimensions) {
            // console.log(dimensions.gravity)
            // apply gravity
            var gravityVector = new __WEBPACK_IMPORTED_MODULE_4_three__["Vector3"](0, (-1 / 60) * dimensions.gravity, 0);
            _this.velocity.add(gravityVector);
            var range = _this.initialVelocity * 2;
            var progress = _this.velocity.y;
            var decimal = progress / range;
            // console.log(decimal)
            _this.mesh.material.opacity = decimal + 0.5;
            // re-position yourself
            _this.mesh.position.add(_this.velocity);
            // if you're out of view, remove yourself from scene and render loop
            if (_this.mesh.position.y < -20) {
                _this.scene.remove(_this.mesh);
                _this.animationSubscription.unsubscribe();
            }
        });
    }
    Vessle.prototype.fire = function (velocity) {
        this.initialVelocity = velocity;
        this.velocity.add(new __WEBPACK_IMPORTED_MODULE_4_three__["Vector3"](0, velocity, -1));
    };
    return Vessle;
}());
var _a, _b, _c;
//# sourceMappingURL=entertainer.component.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_three__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_orbit_controls_es6__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__midi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__animation_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlatPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 *
 * This component is for playing with hot-loading. That is, highlighting predictions.
 *
 * First try: lay out 2 keyboards.
 *
 * One is for the prediction that the base note is also the base of the chord in question
 *
 * The other is for predicting that the played note is the third of another chord
 *
 * Todo: when a note is played.
 *
 * one keyboard shows the notes other notes, up. do that first. classes?
 *
 * keyboard
 * note    <- this keyboard's note listen for any midi down, an highlight themselves is the are 4 or 7 higher
 *
 */
var FlatPageComponent = (function () {
    function FlatPageComponent(midi, animation, ref, sanitizer) {
        var _this = this;
        this.midi = midi;
        this.animation = animation;
        this.ref = ref;
        this.sanitizer = sanitizer;
        this.width = 1440;
        this.height = 600;
        // lights
        this.lights = {};
        this.noteNames = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
        this.HSLAs = {
            'A': { h: 0.08, s: 0.71, l: 0.75, a: 1 },
            'Bb': { h: 0.0833333, s: 0.5, l: 0.833333, a: 1 },
            'B': { h: 0.15, s: 0.5, l: 0.916666, a: 1 },
            'C': { h: 0.18, s: 0.1, l: 0.95, a: 1 },
            'C#': { h: 0.19, s: 0.5, l: 0.9166, a: 1 },
            'D': { h: 0.18, s: 0.71, l: 0.8333, a: 1 },
            'D#': { h: 0.583333333, s: 0.5, l: 0.75, a: 1 },
            'E': { h: 0.53, s: 0.57, l: 0.65, a: 1 },
            'F': { h: 0.64, s: 0.5, l: 0.5833, a: 1 },
            'F#': { h: 0.38, s: 0.5, l: 0.71, a: 1 },
            'G': { h: -1, s: 0.59, l: 0.58333, a: 1 },
            'G#': { h: -0.9, s: 0.5, l: 0.666, a: 1 },
        };
        this.animate = function () {
            // required?
            _this.controls.update();
            // push a message down the before render stream
            // push current dimensions down the stream.
            //this.animation.beforeRenderSource.next(this.dimensions)
            // repeat
            requestAnimationFrame(_this.animate);
            // render
            _this.renderer.render(_this.scene, _this.camera);
        };
        this.baseKeyboard = new Keyboard('base');
        this.baseKeyboard.setup(this.midi, this.sanitizer);
    }
    FlatPageComponent.prototype.hslaString = function (noteName) {
        var hsla = this.HSLAs[noteName];
        var h = hsla.h * 360;
        var s = Math.round(hsla.s * 100) + '%';
        var l = Math.round(hsla.l * 100) + '%';
        var a = Math.round(hsla.a * 100);
        return "hsla(" + h + ", " + s + ", " + l + ", " + a + ")";
    };
    FlatPageComponent.prototype.colors = function () {
        var list = [];
        var startHue = 60;
        for (var i = 0; i < 12; i++) {
            var hue = startHue + (i * 30);
            var sat = '50%';
            var light = '50%';
            var a = 1;
            list.push("hsla(" + hue + ", " + sat + ", " + light + ", " + a + ")");
        }
        return list;
    };
    FlatPageComponent.prototype.chords = function () {
        var list = [];
        var i = 0;
        for (var _i = 0, _a = this.noteNames; _i < _a.length; _i++) {
            var note = _a[_i];
            var thirdI = i + 4;
            if (thirdI > 11) {
                thirdI = thirdI - 12;
            }
            var fifthI = i + 7;
            if (fifthI > 11) {
                fifthI = fifthI - 12;
            }
            var chord = {
                name: note,
                self: note,
                third: this.noteNames[thirdI],
                fifth: this.noteNames[fifthI],
            };
            list.push(chord);
            i++;
        }
        return list;
    };
    FlatPageComponent.prototype.log = function ($event) {
        console.log($event);
    };
    FlatPageComponent.prototype.ngOnInit = function () {
        /** midi events run ouside angular, so force change detection (for DOM) */
        var _this = this;
        this.midi.stream.subscribe(function (msg) {
            _this.ref.detectChanges();
        });
        /** make a scene! */
        this.scene = new __WEBPACK_IMPORTED_MODULE_2_three__["Scene"]();
        this.renderer = new __WEBPACK_IMPORTED_MODULE_2_three__["WebGLRenderer"]({ alpha: false, antialias: true });
        this.renderer.setClearColor(0xff0000, 1);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = __WEBPACK_IMPORTED_MODULE_2_three__["PCFSoftShadowMap"];
        this.renderer.setSize(this.sceneContainer.nativeElement.scrollWidth, this.sceneContainer.nativeElement.scrollHeight);
        this.renderer.shadowMap.enabled = true;
        this.sceneContainer.nativeElement.appendChild(this.renderer.domElement);
        this.camera = new __WEBPACK_IMPORTED_MODULE_2_three__["PerspectiveCamera"](75, this.sceneContainer.nativeElement.scrollWidth / this.sceneContainer.nativeElement.scrollHeight, 1, 10000);
        //this.camera = new OrthographicCamera(100, 100, 100, 100)
        this.camera.position.z = 5;
        this.camera.fov = 60;
        // controls
        this.controls = new __WEBPACK_IMPORTED_MODULE_3_orbit_controls_es6__["a" /* default */](this.camera, this.renderer.domElement);
        this.controls.enabled = true;
        this.controls.autoRotate = true;
        this.controls.maxDistance = 1500;
        this.controls.minDistance = 0;
        this.controls.autoRotate = false;
        // lights
        this.directional = new __WEBPACK_IMPORTED_MODULE_2_three__["DirectionalLight"](0xFFFFFF, 1);
        this.directional.position.set(2, 10, 7);
        this.directional.target.position.set(0, 0, 0);
        this.directional.castShadow = true;
        this.directional.shadow.radius = 0.5;
        this.directional.shadow.camera.visible = true;
        this.directional.shadowCameraNear = 3;
        this.directional.shadowCameraFar = 9;
        // try some bindings
        this.directional.shadowBias = 0.0001;
        this.directional.shadowMapWidth = 100;
        this.directional.shadowMapHeight = 1000;
        this.scene.add(this.directional);
        // spotlight
        this.spot = new __WEBPACK_IMPORTED_MODULE_2_three__["SpotLight"]();
        this.spot.castShadow = true;
        this.spot.position.x = -1;
        this.spot.position.y = 4;
        this.spot.position.z = 3;
        var shadow = this.spot.shadow;
        // this.scene.add(this.spot)
        var spotLightHelper = new __WEBPACK_IMPORTED_MODULE_2_three__["SpotLightHelper"](this.spot);
        //this.scene.add( spotLightHelper )
        // ambient
        this.ambient = new __WEBPACK_IMPORTED_MODULE_2_three__["AmbientLight"](0xff0000);
        this.ambient.intensity = 0;
        this.scene.add(this.ambient);
        var helper = new __WEBPACK_IMPORTED_MODULE_2_three__["DirectionalLightHelper"](this.directional);
        var camHelper = new __WEBPACK_IMPORTED_MODULE_2_three__["CameraHelper"](this.directional.shadow.camera);
        // this.scene.add(helper)
        //this.scene.add(camHelper)
        var box = new __WEBPACK_IMPORTED_MODULE_2_three__["BoxGeometry"](1, 1, 1);
        var material = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshBasicMaterial"]({ color: 0xff00ff });
        var mesh = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](box, material);
        this.scene.add(mesh);
        // kick it off!
        // dummy creation of meshes
        var keyboardGroup = new __WEBPACK_IMPORTED_MODULE_2_three__["Group"]();
        var keyboardObject = new __WEBPACK_IMPORTED_MODULE_2_three__["Object3D"]();
        var whitesPlaced = 0;
        for (var _i = 0, _a = this.baseKeyboard.notes; _i < _a.length; _i++) {
            var note = _a[_i];
            var hsla = this.HSLAs[note.name];
            // if white
            if (note.name.length === 1) {
                var whiteBox = new __WEBPACK_IMPORTED_MODULE_2_three__["BoxGeometry"](0.9, 0.9, 4);
                var whiteKeyMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshPhongMaterial"]({ color: 0xffffff });
                whiteKeyMaterial.color.setHSL(hsla.h, hsla.s, hsla.l);
                var whiteMesh = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](whiteBox, whiteKeyMaterial);
                whiteMesh.position.x = whitesPlaced * 1;
                keyboardObject.add(whiteMesh);
                whitesPlaced += 1;
            }
            else {
                var blackBox = new __WEBPACK_IMPORTED_MODULE_2_three__["BoxGeometry"](0.4, 0.5, 2);
                var blackKeyMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["MeshPhongMaterial"]({ color: 0xffffff });
                blackKeyMaterial.color.setHSL(hsla.h, hsla.s, hsla.l);
                // blackKeyMaterial.color.setHSL(0, 0, 0)
                var blackMesh = new __WEBPACK_IMPORTED_MODULE_2_three__["Mesh"](blackBox, blackKeyMaterial);
                blackMesh.position.x = (whitesPlaced * 1) - 0.5;
                blackMesh.position.z = -1;
                blackMesh.position.y = 0.8;
                keyboardObject.add(blackMesh);
            }
        }
        var bx = new __WEBPACK_IMPORTED_MODULE_2_three__["Box3"]().setFromObject(keyboardObject);
        var x = bx.max.x / -2;
        keyboardObject.position.x = x;
        this.scene.add(keyboardObject);
        /** Particles test */
        // create the particle variables
        var particleCount = 1000, particles = new __WEBPACK_IMPORTED_MODULE_2_three__["Geometry"](), pMaterial = new __WEBPACK_IMPORTED_MODULE_2_three__["ParticleBasicMaterial"]({
            color: 0xFFFFFF,
            size: 1
        });
        // now create the individual particles
        for (var p = 0; p < particleCount; p++) {
            // create a particle with random
            // position values, -250 -> 250
            var pX = p; // Math.sin(p) // Math.random() * 500 - 250
            var pY = Math.sin(p) + 3; //= Math.random() * 500 - 250
            var pZ = 0; // Math.random() * 500 - 250
            var particle = new __WEBPACK_IMPORTED_MODULE_2_three__["Vector3"](pX, pY, pZ);
            // add it to the geometry
            particles.vertices.push(particle);
        }
        // create the particle system
        var particleSystem = new __WEBPACK_IMPORTED_MODULE_2_three__["ParticleSystem"](particles, pMaterial);
        // add it to the scene
        this.scene.add(particleSystem);
        this.animate();
    };
    FlatPageComponent.prototype.fakeKeypress = function ($event, note) {
        console.log($event, note);
        this.midi.source.next({ key: note.midiKey, control: 'tastatur', 'name': 'keydown', keyName: note.name });
    };
    FlatPageComponent.prototype.randomColor = function () {
        return Math.floor(Math.random() * 16777215);
    };
    return FlatPageComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewChild */])('sceneContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], FlatPageComponent.prototype, "sceneContainer", void 0);
FlatPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-flat-page',
        template: __webpack_require__(251),
        styles: [__webpack_require__(237)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__midi_service__["a" /* MIDIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__midi_service__["a" /* MIDIService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__animation_service__["a" /* AnimationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ChangeDetectorRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* ChangeDetectorRef */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["e" /* DomSanitizer */]) === "function" && _e || Object])
], FlatPageComponent);

var Keyboard = (function () {
    function Keyboard(name, keys) {
        if (keys === void 0) { keys = 88; }
        this.name = name;
        this.keys = keys;
        this.notes = [];
        this.noteNames = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    }
    /** get access to services */
    Keyboard.prototype.setup = function (midi, sanitizer) {
        this.midi = midi;
        this.sanitizer = sanitizer;
        this.makeNotes();
    };
    Keyboard.prototype.makeNotes = function () {
        for (var i = 0; i < 88; i++) {
            // the low A on an 88 keys keyboard is midi key 21
            var midiOffset = 21;
            var midiKey = i + midiOffset;
            var name = this.noteNames[i % 12];
            var octave = Math.floor((i + 9) / 12);
            var position = i;
            var note = new Note(this.midi, this.sanitizer, name, midiKey, octave, position);
            note.highlightContent();
            this.notes.push(note);
        }
    };
    return Keyboard;
}());
var Note = (function () {
    function Note(midi, sanitizer, name, midiKey, octave, position, colorHSL) {
        this.midi = midi;
        this.sanitizer = sanitizer;
        this.name = name;
        this.midiKey = midiKey;
        this.octave = octave;
        this.position = position;
        this.colorHSL = colorHSL;
        this.iAmSelf = false;
        this.iAmSelfColor = 'orange';
        this.iAmThirdColor = 'lime';
        this.iAmThird = false;
        this.iAmFifth = false;
        this.iAmFifthColor = 'red';
        this.isMyThird = false;
        this.isMyFifth = false;
    }
    Note.prototype.highlightContent = function () {
        var _this = this;
        this.midi.stream.filter(function (msg) { return msg.name === 'keydown'; }).subscribe(function (msg) {
            var msgMod = msg.key % 12;
            var myMod = _this.midiKey % 12;
            /** Hightlight notes that are contained in the played note */
            // octave from played, or self
            if (myMod === msgMod) {
                _this.iAmSelf = true;
            }
            // third of played
            if ((myMod > msgMod && msgMod === myMod - 4) || (myMod < msgMod && msgMod === myMod + 8)) {
                _this.iAmThird = true;
            }
            // fifth of played
            if ((myMod > msgMod && msgMod === myMod - 7) || (myMod < msgMod && msgMod === myMod + 5)) {
                _this.iAmFifth = true;
            }
            /** Highlight notes that as chords contain the played note */
            // MY third
            if ((myMod < msgMod && msgMod - 4 === myMod) || (myMod > msgMod && msgMod + 8 === myMod)) {
                _this.isMyThird = true;
            }
            // MY fifth
            if ((myMod < msgMod && msgMod - 7 === myMod) || (myMod > msgMod && msgMod + 5 === myMod)) {
                _this.isMyFifth = true;
            }
        });
        /** UP: unhighlight! */
        this.midi.stream.filter(function (msg) { return msg.name === 'keyup'; }).subscribe(function (msg) {
            var msgMod = msg.key % 12;
            var myMod = _this.midiKey % 12;
            /** Hightlight notes that are contained in the played note */
            // octave from played, or self
            if (myMod === msgMod) {
                _this.iAmSelf = false;
            }
            // third of played
            if ((myMod > msgMod && msgMod === myMod - 4) || (myMod < msgMod && msgMod === myMod + 8)) {
                _this.iAmThird = false;
            }
            // fifth of played
            if ((myMod > msgMod && msgMod === myMod - 7) || (myMod < msgMod && msgMod === myMod + 5)) {
                _this.iAmFifth = false;
            }
            /** Highlight notes that as chords contain the played note */
            // MY third
            if ((myMod < msgMod && msgMod - 4 === myMod) || (myMod > msgMod && msgMod + 8 === myMod)) {
                _this.isMyThird = false;
            }
            // MY fifth
            if ((myMod < msgMod && msgMod - 7 === myMod) || (myMod > msgMod && msgMod + 5 === myMod)) {
                _this.isMyFifth = false;
            }
        });
    };
    return Note;
}());
var _a, _b, _c, _d, _e;
//# sourceMappingURL=flat-page.component.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    return HomePageComponent;
}());
HomePageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-home-page',
        template: __webpack_require__(252),
        styles: [__webpack_require__(238)]
    }),
    __metadata("design:paramtypes", [])
], HomePageComponent);

//# sourceMappingURL=home-page.component.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapToIterablePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapToIterablePipe = (function () {
    function MapToIterablePipe() {
    }
    MapToIterablePipe.prototype.transform = function (dict) {
        var a = [];
        for (var key in dict) {
            if (dict.hasOwnProperty(key)) {
                a.push({ key: key, val: dict[key] });
            }
        }
        return a;
    };
    return MapToIterablePipe;
}());
MapToIterablePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Pipe */])({
        name: 'mapToIterable',
    })
], MapToIterablePipe);

//# sourceMappingURL=map-to-iterable.pipe.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_three__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_orbit_controls_es6__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__midi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_webmidi__ = __webpack_require__(505);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_webmidi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_webmidi__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PianoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular

// Three


// Services



var PianoComponent = (function () {
    function PianoComponent(midi, animation) {
        var _this = this;
        this.midi = midi;
        this.animation = animation;
        // new: lights array!
        this.lights = [];
        // timer
        this.lastFrameAt = new Date().getTime();
        this.warnings = [];
        this.dimensions = {
            gravity: 0.0,
            zSpeed: -0.1,
            kick: 0,
            box: {
                width: 5,
                height: 4,
                depth: 2.4,
                rotationX: 0.01,
                rotationY: 0.00,
                rotationZ: 0.00,
                fadeSpeed: 0.001,
            },
            lights: {
                directional: {
                    intensity: 0.8,
                }
            }
        };
        this.animate = function () {
            // take the current time
            var now = new Date().getTime();
            var passed = now - _this.lastFrameAt;
            _this.fps = Math.round(1000 / passed);
            _this.lastFrameAt = now;
            if (_this.fps < 50) {
                // this.warnings.unshift(`frame rate at ${this.fps}`)
            }
            // possibly needed later:
            _this.controls.update();
            // do your update -> lights becomes a list.
            //this.directional.intensity = this.dimensions.lights.directional.intensity
            // push current dimensions down the stream.
            _this.animation.beforeRenderSource.next(_this.dimensions);
            // repeat
            requestAnimationFrame(_this.animate);
            // render
            _this.renderer.render(_this.scene, _this.camera);
        };
        var myWorker = new Worker('/assets/workers/worker.js');
        myWorker.postMessage([1, 2]);
        console.log('Message posted to worker');
        myWorker.onmessage = function (e) {
            console.log('Message received from worker', e.data);
        };
        __WEBPACK_IMPORTED_MODULE_5_webmidi__["enable"](function (err) {
            if (err) {
                console.log("WebMidi could not be enabled.", err);
            }
            else {
                console.log("WebMidi enabled!");
                __WEBPACK_IMPORTED_MODULE_5_webmidi__["getInputByName"]('IAC Driver Bus 1').addListener('noteon', 'all', function (e) {
                    console.log('webmidi ole !note on', e);
                });
                __WEBPACK_IMPORTED_MODULE_5_webmidi__["inputs"].forEach(function (input) {
                    console.log('- id  :', input.id);
                    console.log('- name:', input.name);
                    console.log('- manu:', input.manufacturer);
                    console.log('- conn:', input.connection);
                    console.log('---');
                });
                console.log('outputs:', __WEBPACK_IMPORTED_MODULE_5_webmidi__["outputs"]);
                __WEBPACK_IMPORTED_MODULE_5_webmidi__["outputs"].forEach(function (output) {
                    console.log('- id  :', output.id);
                    console.log('- name:', output.name);
                    console.log('- manu:', output.manufacturer);
                    console.log('- conn:', output.connection);
                    console.log('---');
                });
            }
        });
    }
    PianoComponent.prototype.save = function (button) {
        localStorage.setItem(button, JSON.stringify(this.dimensions));
    };
    PianoComponent.prototype.load = function (button) {
        this.dimensions = JSON.parse(localStorage.getItem(button));
    };
    PianoComponent.prototype.requestFullscreen = function () {
        var doc = document.getElementById('sceneContainer');
        doc.webkitRequestFullScreen();
    };
    PianoComponent.prototype.ngAfterViewInit = function () {
        var win = window;
        win.THREE = __WEBPACK_IMPORTED_MODULE_1_three__;
        /** set up the scene */
        this.sceneSetup();
        /** make keyboard */
        this.keyboard = new Keyboard(this.scene, 'piano', 88);
        this.keyboard.setup(this.midi, this.animation);
        this.keyboard.keyboardObject.visible = false;
        /** subscribe to knobs for camera */
        this.bindCamera();
        /** kick off animation loop */
        this.animate();
    };
    PianoComponent.prototype.bindCamera = function () {
        var _this = this;
        this.midi.stream.filter(function (msg) { return msg.keyName === 'R1'; }).subscribe(function (msg) {
            _this.camera.position.x = (msg.decimal * 200) - 100;
        });
        this.midi.stream.filter(function (msg) { return msg.keyName === 'R2'; }).subscribe(function (msg) {
            _this.camera.position.y = (msg.decimal * 200) - 100;
        });
        this.midi.stream.filter(function (msg) { return msg.keyName === 'R3'; }).subscribe(function (msg) {
            _this.camera.position.z = (msg.decimal * 200) - 100;
        });
        // load preset
        this.midi.stream.filter(function (msg) { return msg.keyName === 'B1'; }).subscribe(function (msg) {
            _this.dimensions = {
                gravity: 0.0,
                zSpeed: -0.1,
                kick: 1.2,
                box: {
                    width: 1,
                    height: 2,
                    depth: 2,
                    rotationX: 0.05,
                    rotationY: 0.00,
                    rotationZ: 0.00,
                    fadeSpeed: 0.01,
                },
                lights: {
                    directional: {
                        intensity: 0.8,
                    }
                }
            };
        });
        this.midi.stream.filter(function (msg) { return msg.keyName === 'B2'; }).subscribe(function (msg) {
            _this.dimensions = {
                gravity: 0.1,
                zSpeed: -0.1,
                kick: 1.2,
                box: {
                    width: 6.8,
                    height: 4,
                    depth: 2.4,
                    rotationX: 0.05,
                    rotationY: 0.00,
                    rotationZ: 0.00,
                    fadeSpeed: 0.001,
                },
                lights: {
                    directional: {
                        intensity: 0.8,
                    }
                }
            };
        });
        this.midi.stream.filter(function (msg) { return msg.keyName === 'B3'; }).subscribe(function (msg) {
            _this.dimensions = {
                gravity: 0.0,
                zSpeed: -0.1,
                kick: 0.2,
                box: {
                    width: 5,
                    height: 4,
                    depth: 2.4,
                    rotationX: 0.05,
                    rotationY: 0.00,
                    rotationZ: 0.00,
                    fadeSpeed: 0.001,
                },
                lights: {
                    directional: {
                        intensity: 0.8,
                    }
                }
            };
        });
        this.midi.stream.filter(function (msg) { return msg.keyName === 'B4'; }).subscribe(function (msg) {
            _this.dimensions = {
                gravity: 0.0,
                zSpeed: -0.1,
                kick: 0,
                box: {
                    width: 5,
                    height: 4,
                    depth: 2.4,
                    rotationX: 0.01,
                    rotationY: 0.00,
                    rotationZ: 0.00,
                    fadeSpeed: 0.001,
                },
                lights: {
                    directional: {
                        intensity: 0.8,
                    }
                }
            };
        });
    };
    PianoComponent.prototype.sceneSetup = function () {
        /** make a scene! */
        this.scene = new __WEBPACK_IMPORTED_MODULE_1_three__["Scene"]();
        this.renderer = new __WEBPACK_IMPORTED_MODULE_1_three__["WebGLRenderer"]({ alpha: false, antialias: true });
        this.renderer.setClearColor(0xffffff, 1);
        this.renderer.setClearColor(0x111111, 1);
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = __WEBPACK_IMPORTED_MODULE_1_three__["PCFSoftShadowMap"];
        this.renderer.setSize(this.sceneContainer.nativeElement.scrollWidth, this.sceneContainer.nativeElement.scrollHeight);
        this.renderer.shadowMap.enabled = true;
        this.sceneContainer.nativeElement.appendChild(this.renderer.domElement);
        this.camera = new __WEBPACK_IMPORTED_MODULE_1_three__["PerspectiveCamera"](40, this.sceneContainer.nativeElement.scrollWidth / this.sceneContainer.nativeElement.scrollHeight, 1, 10000);
        this.camera.position.z = 5;
        this.camera.fov = 60;
        this.camera.position.set(0, 17, 26);
        // controls
        this.controls = new __WEBPACK_IMPORTED_MODULE_2_orbit_controls_es6__["a" /* default */](this.camera, this.renderer.domElement);
        this.controls.enabled = true;
        this.controls.autoRotate = true;
        this.controls.maxDistance = 1500;
        this.controls.minDistance = 0;
        this.controls.autoRotateSpeed = 0.5;
        //this.controls.autoRotate = false
        // lights
        this.directional = new __WEBPACK_IMPORTED_MODULE_1_three__["DirectionalLight"](0xFFFFFF, 1);
        this.directional.position.set(2, 10, 7);
        this.directional.target.position.set(0, 0, 0);
        this.directional.castShadow = true;
        this.directional.shadow.radius = 0.5;
        this.directional.shadow.camera.visible = true;
        this.directional.shadowCameraNear = 3;
        this.directional.shadowCameraFar = 9;
        // try some bindings
        this.directional.shadowBias = 0.0001;
        this.directional.shadowMapWidth = 100;
        this.directional.shadowMapHeight = 1000;
        this.scene.add(this.directional);
        // spotlight
        this.spot = new __WEBPACK_IMPORTED_MODULE_1_three__["SpotLight"]();
        this.spot.castShadow = true;
        this.spot.position.x = 0;
        this.spot.position.y = 4;
        this.spot.position.z = 3;
        var shadow = this.spot.shadow;
        this.spot.visible = false;
        //this.scene.add(this.spot)
        var spotLightHelper = new __WEBPACK_IMPORTED_MODULE_1_three__["SpotLightHelper"](this.spot);
        // this.scene.add( spotLightHelper )
        // ambient
        this.ambient = new __WEBPACK_IMPORTED_MODULE_1_three__["AmbientLight"](0xff0000);
        this.ambient.intensity = 1;
        //this.scene.add(this.ambient)
        var helper = new __WEBPACK_IMPORTED_MODULE_1_three__["DirectionalLightHelper"](this.directional);
        var camHelper = new __WEBPACK_IMPORTED_MODULE_1_three__["CameraHelper"](this.directional.shadow.camera);
        // this.scene.add(helper)
        //this.scene.add(camHelper)
        // load lights from data
        var lights = [
            {
                name: 'red ambitent',
                type: 'ambient',
                color: 0xff0000,
                intensity: 1,
            },
            {
                name: 'sun',
                type: 'directional',
                color: 0xffffff,
                intensity: 1,
                position: { x: 2, y: 10, z: 7 },
                target: { x: 0, y: 0, z: 0 },
            }
        ];
        /** first, remove all lights */
        for (var _i = 0, _a = this.lights; _i < _a.length; _i++) {
            var light = _a[_i];
            this.scene.remove(light);
        }
        this.lights = [];
        // add lights from data
        for (var _b = 0, lights_1 = lights; _b < lights_1.length; _b++) {
            var light = lights_1[_b];
            var licht = void 0;
            if (light.type === 'ambient') {
                licht = new __WEBPACK_IMPORTED_MODULE_1_three__["AmbientLight"](light.color);
                licht.intensity = light.intensity;
            }
            if (light.type === 'directional') {
                licht = new __WEBPACK_IMPORTED_MODULE_1_three__["DirectionalLight"](light.color, light.intensity);
                licht.position.set(light.position.x, light.position.y, light.position.z);
                licht.target.position.set(light.target.x, light.target.y, light.target.z);
            }
            //this.scene.add(licht)
            this.lights.push(licht);
        }
    };
    return PianoComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewChild */])('sceneContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], PianoComponent.prototype, "sceneContainer", void 0);
PianoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-piano',
        template: __webpack_require__(253),
        styles: [__webpack_require__(239)],
        changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* ChangeDetectionStrategy */].OnPush
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__midi_service__["a" /* MIDIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__midi_service__["a" /* MIDIService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__animation_service__["a" /* AnimationService */]) === "function" && _c || Object])
], PianoComponent);

var Keyboard = (function () {
    function Keyboard(scene, name, keys) {
        if (keys === void 0) { keys = 88; }
        this.scene = scene;
        this.name = name;
        this.keys = keys;
        this.keyboardObject = new __WEBPACK_IMPORTED_MODULE_1_three__["Object3D"]();
        this.notes = [];
        this.noteNames = ['A', 'Bb', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#'];
    }
    /** get access to services */
    Keyboard.prototype.setup = function (midi, animation) {
        this.midi = midi;
        this.animation = animation;
        this.makeNotes();
        this.placeNotes();
        this.placeSpiral();
    };
    Keyboard.prototype.makeNotes = function () {
        for (var i = 0; i < 88; i++) {
            // the low A on an 88 keys keyboard is midi key 21
            var midiOffset = 21;
            var midiKey = i + midiOffset;
            var name = this.noteNames[i % 12];
            var color = name.length > 1 ? 'black' : 'white';
            var octave = Math.floor((i + 9) / 12);
            var position = i;
            var note = new Note(this.midi, this.animation, this.scene, name, color, midiKey, octave, position);
            note.highlightContent();
            this.notes.push(note);
        }
    };
    Keyboard.prototype.placeSpiral = function () {
        var planeHeight = 10;
        // 2D for now
        var planeGeo = new __WEBPACK_IMPORTED_MODULE_1_three__["PlaneGeometry"](1, 1);
        // bottom left
        planeGeo.vertices[0].set(0, 0, 0);
        // bottom right
        planeGeo.vertices[1].set(0, 0, 0);
        // top left
        planeGeo.vertices[2].set(-2.5, 10, 0);
        // top right
        planeGeo.vertices[3].set(2.5, 10, 0);
        var planeMat = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0xff0000 });
        planeMat.side = __WEBPACK_IMPORTED_MODULE_1_three__["DoubleSide"];
        var planeMesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](planeGeo, planeMat);
        this.scene.add(planeMesh);
    };
    Keyboard.prototype.placeNotes = function () {
        var whitesPlaced = 0;
        for (var _i = 0, _a = this.notes; _i < _a.length; _i++) {
            var note = _a[_i];
            note.baseMesh.position.x = whitesPlaced;
            if (note.color === 'white') {
                whitesPlaced += 1;
            }
            if (note.color === 'black') {
                note.baseMesh.position.y = 0.5;
                note.baseMesh.position.z = -1;
                note.baseMesh.position.x = (whitesPlaced * 1) - 0.5;
            }
            this.keyboardObject.add(note.baseMesh);
        }
        // position keyboard
        var box = new __WEBPACK_IMPORTED_MODULE_1_three__["Box3"]().setFromObject(this.keyboardObject);
        console.log('box', box);
        var width = box.max.x + (box.min.x * -1);
        var x = width / -2;
        var frameColor = 0xffffff;
        frameColor = 0x333333;
        // back
        var backBox = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](width, 2, 2);
        var backMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: frameColor });
        var back = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](backBox, backMaterial);
        back.position.x = (width / 2) - 0.5;
        back.position.z = -3;
        this.keyboardObject.add(back);
        // bottom
        var bottomBox = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](width, 1, 5);
        var bottomMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: frameColor });
        var bottom = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](bottomBox, bottomMaterial);
        bottom.position.x = (width / 2) - 0.5;
        bottom.position.y = -0.75;
        bottom.position.z = 0;
        //this.keyboardObject.add(bottom)
        // right
        var rightWidth = 2;
        var rightBox = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](rightWidth, 2.25, 6.5);
        var rightMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: frameColor });
        var right = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](rightBox, rightMaterial);
        right.position.x = width + 0.5;
        right.position.y = -0.125;
        right.position.z = -0.75;
        this.keyboardObject.add(right);
        // left
        var leftWidth = 2;
        var leftBox = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](leftWidth, 2.25, 6.5);
        var leftMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: frameColor });
        var left = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](leftBox, leftMaterial);
        left.position.x = -1.5;
        left.position.y = -0.125;
        left.position.z = -0.75;
        this.keyboardObject.add(left);
        this.keyboardObject.position.x = x;
        this.scene.add(this.keyboardObject);
    };
    return Keyboard;
}());
var Note = (function () {
    function Note(midi, animation, scene, name, color, midiKey, octave, position, colorHSL) {
        var _this = this;
        this.midi = midi;
        this.animation = animation;
        this.scene = scene;
        this.name = name;
        this.color = color;
        this.midiKey = midiKey;
        this.octave = octave;
        this.position = position;
        this.colorHSL = colorHSL;
        this.iAmSelf = false;
        this.iAmOctave = false;
        this.iAmThird = false;
        this.iAmFifth = false;
        this.isMyThird = false;
        this.isMyFifth = false;
        // todo: is my low third (I am the minor fall)
        this.kick = 1.5;
        this.makeBase();
        this.animation.beforeRenderStream.subscribe(function (dimensions) {
            _this.dimensions = dimensions;
        });
    }
    Note.prototype.makeBase = function () {
        if (this.color === 'white') {
            var whiteBox = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](0.98, 0.98, 4);
            var whiteKeyMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x333333 });
            var whiteMesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](whiteBox, whiteKeyMaterial);
            this.baseMesh = whiteMesh;
        }
        else {
            var blackBox = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](0.4, 1, 2);
            var blackKeyMaterial = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: 0x000000 });
            var blackMesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](blackBox, blackKeyMaterial);
            this.baseMesh = blackMesh;
        }
    };
    Note.prototype.highlightContent = function () {
        var _this = this;
        this.midi.stream.filter(function (msg) { return msg.name === 'keydown'; }).subscribe(function (msg) {
            var msgMod = msg.key % 12;
            var myMod = _this.midiKey % 12;
            /** Hightlight notes that are contained in the played note */
            if (msg.key === _this.midiKey) {
                _this.iAmSelf = true;
                /**
                 * Firing of a vessel
                 */
                var vessel = new Vessel(_this.animation, _this.scene, _this, _this.dimensions);
                // where is the note?
                _this.scene.updateMatrixWorld(true);
                var position = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
                position.setFromMatrixPosition(_this.baseMesh.matrixWorld);
                vessel.vesselMesh.position.x = position.x;
                var scaleX = 1 - (_this.position / 88);
                var scaleY = (_this.position / 88);
                var scale = 1;
                vessel.vesselMesh.scale.set(scaleX, scaleY, scale);
                vessel.vesselMesh.position.y = 2;
                vessel.vesselMesh.position.z = -3;
                vessel.velocity.y = ((msg.velocity / 127) * 50) * _this.dimensions.kick;
                vessel.velocity.z = _this.dimensions.zSpeed;
                _this.scene.add(vessel.vesselMesh);
                if (_this.color === 'white') {
                    _this.baseMesh.rotateX(0.1);
                    var bx = new __WEBPACK_IMPORTED_MODULE_1_three__["Box3"]().setFromObject(_this.baseMesh);
                    _this.baseMesh.position.y = -0.2; // bx.max.y * -0.5
                }
                else {
                    _this.baseMesh.rotateX(0.1);
                    _this.baseMesh.position.y = _this.baseMesh.position.y - 0.2;
                }
            }
            // octave from played, or self
            if (myMod === msgMod) {
                _this.iAmOctave = true;
            }
            // third of played
            if ((myMod > msgMod && msgMod === myMod - 4) || (myMod < msgMod && msgMod === myMod + 8)) {
                _this.iAmThird = true;
            }
            // fifth of played
            if ((myMod > msgMod && msgMod === myMod - 7) || (myMod < msgMod && msgMod === myMod + 5)) {
                _this.iAmFifth = true;
            }
            /** Highlight notes that as chords contain the played note */
            // MY third
            if ((myMod < msgMod && msgMod - 4 === myMod) || (myMod > msgMod && msgMod + 8 === myMod)) {
                _this.isMyThird = true;
            }
            // MY fifth
            if ((myMod < msgMod && msgMod - 7 === myMod) || (myMod > msgMod && msgMod + 5 === myMod)) {
                _this.isMyFifth = true;
            }
        });
        /** UP: unhighlight! */
        this.midi.stream.filter(function (msg) { return msg.name === 'keyup'; }).subscribe(function (msg) {
            var msgMod = msg.key % 12;
            var myMod = _this.midiKey % 12;
            /** Hightlight notes that are contained in the played note */
            if (msg.key === _this.midiKey) {
                _this.iAmSelf = false;
                if (_this.color === 'white') {
                    if (_this.baseMesh.rotation.x !== 0) {
                        _this.baseMesh.rotateX(-0.1);
                        _this.baseMesh.position.y = 0;
                    }
                }
                else {
                    _this.baseMesh.rotateX(-0.1);
                    _this.baseMesh.position.y = 0.5;
                }
            }
            // octave from played, or self
            if (myMod === msgMod) {
                _this.iAmOctave = false;
            }
            // third of played
            if ((myMod > msgMod && msgMod === myMod - 4) || (myMod < msgMod && msgMod === myMod + 8)) {
                _this.iAmThird = false;
            }
            // fifth of played
            if ((myMod > msgMod && msgMod === myMod - 7) || (myMod < msgMod && msgMod === myMod + 5)) {
                _this.iAmFifth = false;
            }
            /** Highlight notes that as chords contain the played note */
            // MY third
            if ((myMod < msgMod && msgMod - 4 === myMod) || (myMod > msgMod && msgMod + 8 === myMod)) {
                _this.isMyThird = false;
            }
            // MY fifth
            if ((myMod < msgMod && msgMod - 7 === myMod) || (myMod > msgMod && msgMod + 5 === myMod)) {
                _this.isMyFifth = false;
            }
        });
    };
    return Note;
}()); /** end of Note */
var Vessel = (function () {
    function Vessel(animation, scene, note, dimensions) {
        var _this = this;
        this.animation = animation;
        this.scene = scene;
        this.note = note;
        this.dimensions = dimensions;
        this.velocity = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"]();
        var xvesselGeo = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxGeometry"](this.dimensions.box.width, this.dimensions.box.height, this.dimensions.box.depth);
        var vesselGeo = new __WEBPACK_IMPORTED_MODULE_1_three__["BoxBufferGeometry"](this.dimensions.box.width, this.dimensions.box.height, this.dimensions.box.depth);
        var vesselMat = new __WEBPACK_IMPORTED_MODULE_1_three__["MeshPhongMaterial"]({ color: randomColor(), transparent: true });
        var hsla = HSLAs[note.name];
        // vesselMat.color.setHSL(hsla.h, hsla.s, hsla.l)
        var glow = new __WEBPACK_IMPORTED_MODULE_1_three__["Color"]();
        glow.setHSL(hsla.h, hsla.s, hsla.l - 0.2);
        glow.setHSL(1, 0, 0.7);
        vesselMat.emissive = glow;
        this.vesselMesh = new __WEBPACK_IMPORTED_MODULE_1_three__["Mesh"](vesselGeo, vesselMat);
        this.animationSubscription = this.animation.beforeRenderStream.subscribe(function (dimensions) {
            var now = new Date().getTime();
            var childCount = _this.scene.children.length;
            //console.log('on this render pass, there are children:', childCount )
            // apply gravity
            var gravityVector = new __WEBPACK_IMPORTED_MODULE_1_three__["Vector3"](0, (-1 / 60) * dimensions.gravity, 0);
            _this.velocity.add(gravityVector);
            // rotate
            _this.vesselMesh.rotation.x += dimensions.box.rotationX / 10;
            _this.vesselMesh.rotation.y += dimensions.box.rotationY / 10;
            _this.vesselMesh.rotation.z += dimensions.box.rotationZ / 10;
            // fade
            _this.vesselMesh.material.opacity -= _this.dimensions.box.fadeSpeed / 30;
            var myMesh = _this.vesselMesh;
            var myMaterial = myMesh.material;
            var h = vesselMat.emissive.getHSL().h;
            var s = vesselMat.emissive.getHSL().s;
            var l = vesselMat.emissive.getHSL().l - 0.05;
            var co = myMaterial.emissive;
            co.setHSL(h, s, l);
            myMaterial.needsUpdate = true;
            // re-position yourself
            _this.vesselMesh.position.add(_this.velocity);
            if (_this.vesselMesh.position.y < 0 || _this.vesselMesh.material.opacity < 0) {
                // this.vesselMesh.visible = false
                _this.scene.remove(_this.vesselMesh);
                _this.animationSubscription.unsubscribe();
            }
            var then = new Date().getTime();
            var delta = then - now;
            //console.log('update vessel in MS ', delta)
        });
    }
    return Vessel;
}());
var randomColor = function () {
    return Math.floor(Math.random() * 16777215);
};
var HSLAs = {
    'A': { h: 0.08, s: 0.71, l: 0.75, a: 1 },
    'Bb': { h: 0.0833333, s: 0.5, l: 0.833333, a: 1 },
    'B': { h: 0.15, s: 0.5, l: 0.916666, a: 1 },
    'C': { h: 0.18, s: 0.1, l: 0.95, a: 1 },
    'C#': { h: 0.19, s: 0.5, l: 0.9166, a: 1 },
    'D': { h: 0.18, s: 0.71, l: 0.8333, a: 1 },
    'D#': { h: 0.583333333, s: 0.5, l: 0.75, a: 1 },
    'E': { h: 0.53, s: 0.57, l: 0.65, a: 1 },
    'F': { h: 0.64, s: 0.5, l: 0.5833, a: 1 },
    'F#': { h: 0.38, s: 0.5, l: 0.71, a: 1 },
    'G': { h: -1, s: 0.59, l: 0.58333, a: 1 },
    'G#': { h: -0.9, s: 0.5, l: 0.666, a: 1 },
};
var _a, _b, _c;
//# sourceMappingURL=piano.component.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__midi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__animation_service__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_matter_js__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_matter_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_matter_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_three__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ShowComponent = (function (_super) {
    __extends(ShowComponent, _super);
    function ShowComponent(midi, animation) {
        var _this = _super.call(this) || this;
        _this.midi = midi;
        _this.animation = animation;
        _this.things = {};
        _this.notes = [];
        _this.knobMapping = [
            {
                name: 'jump height',
                reaction: function (decimal) {
                    console.log(decimal);
                }
            }
        ];
        /** HELPERS */
        /** a parabola, starting at 0
         * consider having an 'a' argument
        */
        _this.jumpPosition = function (height, percent) {
            // a defines the steepness of the parabola
            var a = -1;
            var xOffset = Math.sqrt(height) * a;
            var totalX = xOffset * -2;
            var x = (totalX * percent) + xOffset;
            return (a * (x * x)) + height;
        };
        /**
         * Three.js Animation Loop
         */
        _this.animate = function () {
            _this.controls.update();
            requestAnimationFrame(_this.animate);
            // render
            _this.renderer.render(_this.scene, _this.camera);
        };
        _this.matterEngine = __WEBPACK_IMPORTED_MODULE_5_matter_js__["Engine"];
        return _this;
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * call your parent (show) setup function
         */
        this.setupShow(this.midi, this.sceneContainer.nativeElement);
        /**
         * Reacting to MIDI events
         *
         * - knob turns
         * - and key presses
         */
        this.midi.stream.subscribe(function (message) {
            if (!message) {
                console.log('no message passed!');
                return;
            }
            /**
             * Keydown:
             *
             * - play sound
             * - animation happens reactively! :)
             */
            if (message.name === 'keydown') {
                // play sound
                _this.midi.soundNote(0, message.key, message.velocity);
            }
            if (message.name === 'keyup') {
                // stop playing sound
                _this.midi.stopNote(0, message.key, message.velocity);
            }
        });
        // kick off animation loop
        this.animate();
        /** BOX MAKING */
        var colorRange = colors['I. J. Belmont (1944)'];
        var _loop_1 = function (i) {
            var boxSize = 0.5; //  + (i / 40)
            var boxDistance = boxSize / 10;
            var geo = new __WEBPACK_IMPORTED_MODULE_6_three__["BoxGeometry"](boxSize, boxSize, boxSize);
            var mat = new __WEBPACK_IMPORTED_MODULE_6_three__["MeshPhongMaterial"]({ color: Math.floor(Math.random() * 16777215), transparent: true, opacity: 0.9 });
            var index = i + 24;
            var colorIndex = index % 12;
            var color = colorRange[colorIndex];
            var hue = color[0] / 360;
            var sat = color[1] / 100;
            var light = color[2] / 100;
            // which midi key are we?
            var midiKey = i + 21; // or lowest box A1 (box zero) is midi key 21
            var offsetter = i - 45;
            // light
            light = i / 100;
            mat.color.setHSL(hue, sat, light);
            var mymesh = new __WEBPACK_IMPORTED_MODULE_6_three__["Mesh"](geo, mat);
            mymesh.castShadow = true;
            mymesh.position.z = 0;
            mymesh.visible = true;
            // straight line.
            //mymesh.position.x = (offsetter * boxSize) + (offsetter * boxDistance)
            // helix!
            var x = Math.cos(i % 12) * 3;
            var y = Math.sin(i % 12) * 3;
            var z = i / 12;
            mymesh.position.set(x, y, z);
            this_1.scene.add(mymesh);
            this_1.notes.push(mymesh);
            /**
             * REACTIVE BOXES
             */
            // subscribe to key down/up stream
            this_1.midi.stream.subscribe(function (message) {
                /**
                 * reaction to key-down
                 */
                if (message.key === midiKey && message.name === 'keydown') {
                    mymesh.visible = true;
                    mymesh.material.opacity = 1;
                    // jump, using the state of the knobs
                    var heightDecimal = _this.midi.knobs['R1'];
                    var durationDecimal = _this.midi.knobs['R2'];
                    _this.animateJump(30 * heightDecimal, durationDecimal * 5000).subscribe(function (val) {
                        mymesh.position.y = val;
                    });
                    // also do the scale
                    _this.animation.animateEasing('linear', 500).subscribe(function (decimal) {
                        var scale = (decimal) + 1;
                        mymesh.scale.set(scale, scale, scale);
                    });
                }
                else if (message.key === midiKey && message.name === 'keyup') {
                    //mymesh.visible = false
                    _this.animation.animateEasing('linear', 1000).subscribe(function (decimal) {
                        mymesh.material.opacity = 1 - decimal + 0.1;
                    });
                }
            });
        };
        var this_1 = this;
        for (var i = 0; i < 90; i++) {
            _loop_1(i);
        }
    };
    // not pure! :)
    ShowComponent.prototype.animateJump = function (height, durationMS) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (stream) {
            // consider basing duration of offset, e.g. how steep.
            var start = new Date().getTime();
            var end = start + durationMS;
            var step = function () {
                var now = new Date().getTime();
                var progress;
                if (now > end) {
                    progress = 1;
                }
                else {
                    progress = (now - start) / durationMS; // percent as decimal
                }
                var y = _this.jumpPosition(height, progress);
                stream.next(y);
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            step();
        }).share();
    };
    ShowComponent.prototype.toRadians = function (angle) {
        return angle * (Math.PI / 180);
    };
    return ShowComponent;
}(__WEBPACK_IMPORTED_MODULE_1__show__["a" /* Show */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewChild */])('sceneContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], ShowComponent.prototype, "sceneContainer", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewChild */])('matterContainer'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _b || Object)
], ShowComponent.prototype, "matterContainer", void 0);
ShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-show',
        template: __webpack_require__(254),
        styles: [__webpack_require__(240)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__midi_service__["a" /* MIDIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__midi_service__["a" /* MIDIService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__animation_service__["a" /* AnimationService */]) === "function" && _d || Object])
], ShowComponent);

/** COLORS AND SONGS */
var colors = {
    'Isaac Newton (1704)': {
        format: 'HSL',
        ref: 'Gerstner, p.167',
        english: ['red', null, 'orange', null, 'yellow', 'green', null, 'blue', null, 'indigo', null, 'violet'],
        0: [0, 96, 51],
        1: [0, 0, 0],
        2: [29, 94, 52],
        3: [0, 0, 0],
        4: [60, 90, 60],
        5: [135, 76, 32],
        6: [0, 0, 0],
        7: [248, 82, 28],
        8: [0, 0, 0],
        9: [302, 88, 26],
        10: [0, 0, 0],
        11: [325, 84, 46] // B
    },
    'Louis Bertrand Castel (1734)': {
        format: 'HSL',
        ref: 'Peacock, p.400',
        english: ['blue', 'blue-green', 'green', 'olive green', 'yellow', 'yellow-orange', 'orange', 'red', 'crimson', 'violet', 'agate', 'indigo'],
        0: [248, 82, 28],
        1: [172, 68, 34],
        2: [135, 76, 32],
        3: [79, 59, 36],
        4: [60, 90, 60],
        5: [49, 90, 60],
        6: [29, 94, 52],
        7: [360, 96, 51],
        8: [1, 89, 33],
        9: [325, 84, 46],
        10: [273, 80, 27],
        11: [302, 88, 26]
    },
    'George Field (1816)': {
        format: 'HSL',
        ref: 'Klein, p.69',
        english: ['blue', null, 'purple', null, 'red', 'orange', null, 'yellow', null, 'yellow green', null, 'green'],
        0: [248, 82, 28],
        1: [0, 0, 0],
        2: [302, 88, 26],
        3: [0, 0, 0],
        4: [360, 96, 51],
        5: [29, 94, 52],
        6: [0, 0, 0],
        7: [60, 90, 60],
        8: [0, 0, 0],
        9: [79, 59, 36],
        10: [0, 0, 0],
        11: [135, 76, 32]
    },
    'D. D. Jameson (1844)': {
        format: 'HSL',
        ref: 'Jameson, p.12',
        english: ['red', 'red-orange', 'orange', 'orange-yellow', 'yellow', 'green', 'green-blue', 'blue', 'blue-purple', 'purple', 'purple-violet', 'violet'],
        0: [360, 96, 51],
        1: [14, 91, 51],
        2: [29, 94, 52],
        3: [49, 90, 60],
        4: [60, 90, 60],
        5: [135, 76, 32],
        6: [172, 68, 34],
        7: [248, 82, 28],
        8: [273, 80, 27],
        9: [302, 88, 26],
        10: [313, 78, 37],
        11: [325, 84, 46]
    },
    'Theodor Seemann (1881)': {
        format: 'HSL',
        ref: 'Klein, p.86',
        english: ['carmine', 'scarlet', 'orange', 'yellow-orange', 'yellow', 'green', 'green blue', 'blue', 'indigo', 'violet', 'brown', 'black'],
        0: [0, 58, 26],
        1: [360, 96, 51],
        2: [29, 94, 52],
        3: [49, 90, 60],
        4: [60, 90, 60],
        5: [135, 76, 32],
        6: [172, 68, 34],
        7: [248, 82, 28],
        8: [302, 88, 26],
        9: [325, 84, 46],
        10: [0, 58, 26],
        11: [0, 0, 3]
    },
    'A. Wallace Rimington (1893)': {
        format: 'HSL',
        ref: 'Peacock, p.402',
        english: ['deep red', 'crimson', 'orange-crimson', 'orange', 'yellow', 'yellow-green', 'green', 'blueish green', 'blue-green', 'indigo', 'deep blue', 'violet'],
        0: [360, 96, 51],
        1: [1, 89, 33],
        2: [14, 91, 51],
        3: [29, 94, 52],
        4: [60, 90, 60],
        5: [79, 59, 36],
        6: [135, 76, 32],
        7: [163, 62, 40],
        8: [172, 68, 34],
        9: [302, 88, 26],
        10: [248, 82, 28],
        11: [325, 84, 46]
    },
    'Bainbridge Bishop (1893)': {
        format: 'HSL',
        ref: 'Bishop, p.11',
        english: ['red', 'orange-red or scarlet', 'orange', 'gold or yellow-orange', 'yellow or green-gold', 'yellow-green', 'green', 'greenish-blue or aquamarine', 'blue', 'indigo or violet-blue', 'violet', 'violet-red', 'red'],
        0: [360, 96, 51],
        1: [1, 89, 33],
        2: [29, 94, 52],
        3: [50, 93, 52],
        4: [60, 90, 60],
        5: [73, 73, 55],
        6: [135, 76, 32],
        7: [163, 62, 40],
        8: [302, 88, 26],
        9: [325, 84, 46],
        10: [343, 79, 47],
        11: [360, 96, 51]
    },
    'H. von Helmholtz (1910)': {
        format: 'HSL',
        ref: 'Helmholtz, p.22',
        english: ['yellow', 'green', 'greenish blue', 'cayan-blue', 'indigo blue', 'violet', 'end of red', 'red', 'red', 'red', 'red orange', 'orange'],
        0: [60, 90, 60],
        1: [135, 76, 32],
        2: [172, 68, 34],
        3: [211, 70, 37],
        4: [302, 88, 26],
        5: [325, 84, 46],
        6: [330, 84, 34],
        7: [360, 96, 51],
        8: [10, 91, 43],
        9: [10, 91, 43],
        10: [8, 93, 51],
        11: [28, 89, 50]
    },
    'Alexander Scriabin (1911)': {
        format: 'HSL',
        ref: 'Jones, p.104',
        english: ['red', 'violet', 'yellow', 'steely with the glint of metal', 'pearly blue the shimmer of moonshine', 'dark red', 'bright blue', 'rosy orange', 'purple', 'green', 'steely with a glint of metal', 'pearly blue the shimmer of moonshine'],
        0: [360, 96, 51],
        1: [325, 84, 46],
        2: [60, 90, 60],
        3: [245, 21, 43],
        4: [211, 70, 37],
        5: [1, 89, 33],
        6: [248, 82, 28],
        7: [29, 94, 52],
        8: [302, 88, 26],
        9: [135, 76, 32],
        10: [245, 21, 43],
        11: [211, 70, 37]
    },
    'Adrian Bernard Klein (1930)': {
        format: 'HSL',
        ref: 'Klein, p.209',
        english: ['dark red', 'red', 'red orange', 'orange', 'yellow', 'yellow green', 'green', 'blue-green', 'blue', 'blue violet', 'violet', 'dark violet'],
        0: [0, 91, 40],
        1: [360, 96, 51],
        2: [14, 91, 51],
        3: [29, 94, 52],
        4: [60, 90, 60],
        5: [73, 73, 55],
        6: [135, 76, 32],
        7: [172, 68, 34],
        8: [248, 82, 28],
        9: [292, 70, 31],
        10: [325, 84, 46],
        11: [330, 84, 34]
    },
    'August Aeppli (1940)': {
        format: 'HSL',
        ref: 'Gerstner, p.169',
        english: ['red', null, 'orange', null, 'yellow', null, 'green', 'blue-green', null, 'ultramarine blue', 'violet', 'purple'],
        0: [0, 96, 51],
        1: [0, 0, 0],
        2: [29, 94, 52],
        3: [0, 0, 0],
        4: [60, 90, 60],
        5: [0, 0, 0],
        6: [135, 76, 32],
        7: [172, 68, 34],
        8: [0, 0, 0],
        9: [211, 70, 37],
        10: [273, 80, 27],
        11: [302, 88, 26]
    },
    'I. J. Belmont (1944)': {
        ref: 'Belmont, p.226',
        english: ['red', 'red-orange', 'orange', 'yellow-orange', 'yellow', 'yellow-green', 'green', 'blue-green', 'blue', 'blue-violet', 'violet', 'red-violet'],
        0: [360, 96, 51],
        1: [14, 91, 51],
        2: [29, 94, 52],
        3: [50, 93, 52],
        4: [60, 90, 60],
        5: [73, 73, 55],
        6: [135, 76, 32],
        7: [172, 68, 34],
        8: [248, 82, 28],
        9: [313, 78, 37],
        10: [325, 84, 46],
        11: [338, 85, 37]
    },
    'Steve Zieverink (2004)': {
        format: 'HSL',
        ref: 'Cincinnati Contemporary Art Center',
        english: ['yellow-green', 'green', 'blue-green', 'blue', 'indigo', 'violet', 'ultra violet', 'infra red', 'red', 'orange', 'yellow-white', 'yellow'],
        0: [73, 73, 55],
        1: [135, 76, 32],
        2: [172, 68, 34],
        3: [248, 82, 28],
        4: [302, 88, 26],
        5: [325, 84, 46],
        6: [326, 79, 24],
        7: [1, 89, 33],
        8: [360, 96, 51],
        9: [29, 94, 52],
        10: [62, 78, 74],
        11: [60, 90, 60]
    },
    'Circle of Fifths (Johnston 2003)': {
        format: 'RGB',
        ref: 'Joseph Johnston',
        english: ['yellow', 'blue', 'orange', 'teal', 'red', 'green', 'purple', 'light orange', 'light blue', 'dark orange', 'dark green', 'violet'],
        0: [255, 255, 0],
        1: [50, 0, 255],
        2: [255, 150, 0],
        3: [0, 210, 180],
        4: [255, 0, 0],
        5: [130, 255, 0],
        6: [150, 0, 200],
        7: [255, 195, 0],
        8: [30, 130, 255],
        9: [255, 100, 0],
        10: [0, 200, 0],
        11: [225, 0, 225]
    },
    'Circle of Fifths (Wheatman 2002)': {
        format: 'HEX',
        ref: 'Stuart Wheatman',
        english: [],
        data: ['#122400', '#2E002E', '#002914', '#470000', '#002142', '#2E2E00', '#290052', '#003D00', '#520029', '#003D3D', '#522900', '#000080', '#244700', '#570057', '#004D26', '#7A0000', '#003B75', '#4C4D00', '#47008F', '#006100', '#850042', '#005C5C', '#804000', '#0000C7', '#366B00', '#80007F', '#00753B', '#B80000', '#0057AD', '#6B6B00', '#6600CC', '#008A00', '#B8005C', '#007F80', '#B35900', '#2424FF', '#478F00', '#AD00AD', '#00994D', '#F00000', '#0073E6', '#8F8F00', '#8A14FF', '#00AD00', '#EB0075', '#00A3A3', '#E07000', '#6B6BFF', '#5CB800', '#DB00DB', '#00C261', '#FF5757', '#3399FF', '#ADAD00', '#B56BFF', '#00D600', '#FF57AB', '#00C7C7', '#FF9124', '#9999FF', '#6EDB00', '#FF29FF', '#00E070', '#FF9999', '#7ABDFF', '#D1D100', '#D1A3FF', '#00FA00', '#FFA3D1', '#00E5E6', '#FFC285', '#C2C2FF', '#80FF00', '#FFA8FF', '#00E070', '#FFCCCC', '#C2E0FF', '#F0F000', '#EBD6FF', '#ADFFAD', '#FFD6EB', '#8AFFFF', '#FFEBD6', '#EBEBFF', '#E0FFC2', '#FFEBFF', '#E5FFF2', '#FFF5F5']
    }
};
var songs = [
    // Sinding - Rustles of Spring Op-32 No-3
    'data:audio/midi;base64,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',
    // Tchaikovsky - Arabian Dance
    'data:audio/midi;base64,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',
    // Tchaikovsky - Waltz of the Flowers
    'data:audio/midi;base64,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',
    // Granados - Oriental
    'data:audio/midi;base64,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',
    // Joplin - The Entertainer
    'data:audio/midi;base64,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'
];
var _a, _b, _c, _d;
//# sourceMappingURL=show.component.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SliderComponent = (function () {
    function SliderComponent() {
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* EventEmitter */]();
        this.styles = {
            x: {
                'width.px': 200,
            },
            y: {
                'width.px': 200,
                'transform': 'perspective( 600px ) rotateZ(270deg)',
                'position': 'absolute',
                'left.px': -80,
                'top.px': 80,
            },
            z: {
                'transform': 'perspective( 300px ) rotateY( 45deg )',
                'width.px': 200,
            }
        };
        this.containerStyles = {
            x: {},
            y: {
                'width.px': 30,
                'height.px': 200,
                'position': 'relative',
            },
            z: {}
        };
    }
    SliderComponent.prototype.ngOnInit = function () {
    };
    SliderComponent.prototype.onInput = function ($event) {
        var val = parseFloat($event.target.value);
        this.onChange.emit(val);
    };
    return SliderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('val'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "val", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('from'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "from", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('to'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "to", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('step'),
    __metadata("design:type", Number)
], SliderComponent.prototype, "step", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('xyz'),
    __metadata("design:type", String)
], SliderComponent.prototype, "xyz", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* EventEmitter */]) === "function" && _a || Object)
], SliderComponent.prototype, "onChange", void 0);
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-slider',
        template: "\n  <div [ngStyle]=\"containerStyles[xyz]\">\n  <input \n    type=\"range\" \n    [value]=\"val\" \n    [min]=\"from\" \n    [max]=\"to\" \n    [step]=\"step\"\n    (input)=\"onInput($event)\"\n    [ngStyle]=\"styles[xyz]\"\n    />\n    </div>\n  ",
        styles: [__webpack_require__(241)]
    }),
    __metadata("design:paramtypes", [])
], SliderComponent);

var _a;
//# sourceMappingURL=slider.component.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__show__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__midi_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_three__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__animation_service__ = __webpack_require__(30);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpaceComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpaceComponent = (function (_super) {
    __extends(SpaceComponent, _super);
    function SpaceComponent(midi, animation) {
        var _this = 
        // inherit goodies from Show
        _super.call(this) || this;
        _this.midi = midi;
        _this.animation = animation;
        // move show vars here!
        _this.kickIntesity = 1;
        _this.animate = function () {
            // required?
            _this.controls.update();
            // push a message down the before render stream
            _this.animation.beforeRenderSource.next('rendering coming up');
            requestAnimationFrame(_this.animate);
            // render
            _this.renderer.render(_this.scene, _this.camera);
        };
        return _this;
    }
    SpaceComponent.prototype.ngAfterViewInit = function () {
        /**
         * call your parent (show) setup function
         */
        this.setupShow(this.midi, this.sceneContainer.nativeElement);
        var myKeyCount = 49;
        var toTheLeft = 15;
        var toTheRight = 12;
        var totalKeyCount = myKeyCount + toTheLeft + toTheRight;
        for (var i = 0; i < totalKeyCount; i++) {
            var midiNote = i + 20;
            var ship = new Ship(this.midi, this.animation, midiNote);
            ship.body.position.x = (i - totalKeyCount / 2) * 1;
            this.scene.add(ship.body);
        }
        this.animate();
    };
    SpaceComponent.prototype.toRadians = function (angle) {
        return angle * (Math.PI / 180);
    };
    return SpaceComponent;
}(__WEBPACK_IMPORTED_MODULE_1__show__["a" /* Show */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('width'),
    __metadata("design:type", Number)
], SpaceComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('height'),
    __metadata("design:type", Number)
], SpaceComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* ViewChild */])('sceneContainer'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* ElementRef */]) === "function" && _a || Object)
], SpaceComponent.prototype, "sceneContainer", void 0);
SpaceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-space',
        template: __webpack_require__(255),
        styles: [__webpack_require__(242)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__midi_service__["a" /* MIDIService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__midi_service__["a" /* MIDIService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__animation_service__["a" /* AnimationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__animation_service__["a" /* AnimationService */]) === "function" && _c || Object])
], SpaceComponent);

/**
 * A beautiful spacecraft
 *
 * It knows where it's going, it maintains a velocity Vector3
 *
 * Thrust is also coming in as a Vector3, which we apply against the current
 * velocity vector, to arrive at a new velocity (direction and speed)
 */
var Ship = (function () {
    function Ship(midi, animation, midiNote) {
        var _this = this;
        this.midi = midi;
        this.animation = animation;
        this.midiNote = midiNote;
        this.body = new __WEBPACK_IMPORTED_MODULE_3_three__["Object3D"]();
        this.thrust = 0;
        this.pushBackFactor = 1;
        this.gravityVector = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, -1 / 60, 0);
        this.g = 10; // meters per second per second (earth's gravity accelation)
        this.gFactor = 1;
        this.velocity = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, 0, 0);
        console.log('Ship constructed.');
        this.build();
        console.log('... and built :)');
        this.midi.stream.subscribe(function (msg) {
            //console.log(msg)
            /* give thrust according to knob */
            if (msg.keyName === 'R1') {
                _this.thrust = msg.decimal * 3;
                _this.thruster.material.opacity = msg.decimal;
            }
            if (msg.keyName === 'R2') {
                // this.pushBackFactor = msg.decimal * 3
                // this.gFactor = msg.decimal * 10
            }
            if (msg.keyName === 'Master') {
                _this.gFactor = msg.decimal;
                //console.log(this.gFactor)
            }
            if (msg.keyName === 'B1') {
                // kick with delay the higher you are
                var delay = _this.midiNote * 50;
                var kickIntesity = Math.random();
                var kickVector_1 = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, kickIntesity, 0);
                setTimeout(function () { return _this.velocity.add(kickVector_1); }, delay);
                // this.velocity.add(kickVector)
            }
            if (msg.keyName === 'B2') {
                var kickVector = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](-0.04, 0.8, 0);
                _this.velocity.add(kickVector);
            }
            if (msg.keyName === 'B3') {
                var kickVector = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, 1.5, 0);
                _this.velocity.add(kickVector);
            }
            if (msg.name === 'keydown') {
                if (msg.key === _this.midiNote) {
                    // reset
                    if (_this.body.position.y > 0) {
                        _this.body.position.y = 0;
                        _this.velocity = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"]();
                    }
                    // kick (take show's factor)
                    var kickVector = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, msg.velocity * 1.5, 0);
                    _this.velocity.add(kickVector);
                }
            }
            if (msg.name === 'keydown' && msg.key === _this.midiNote) {
                // play sound
                _this.midi.soundNote(0, msg.key, msg.velocity);
            }
            if (msg.name === 'keyup' && msg.key === _this.midiNote) {
                // stop playing sound
                console.log(msg);
                _this.midi.stopNote(0, msg.key, msg.velocity);
            }
        });
        /**
         * Update yourself
         *
         * - apply velocity vector
         * - apply gravity vector
         */
        this.animation.beforeRenderStream.subscribe(function () {
            var thrustVector = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, _this.thrust / 60, 0);
            var gravityVector = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, -1 / 60 * _this.gFactor, 0);
            // add gravity and thrust vector to velocity vector
            _this.velocity.add(gravityVector).add(thrustVector);
            // check if you going down
            if (_this.velocity.y < 0) {
                _this.body.visible = false;
            }
            else {
                _this.body.visible = true;
            }
            // apply the new velocity vector to create movement
            _this.body.position.add(_this.velocity);
            // make sure you don't go into the ground
            if (_this.body.position.y < 0) {
                // console.log(this.body.position.y)
                // for now, just simply set yourself to 0y
                //this.body.position.y = 0
                // cancel out velocity?
                _this.velocity.y = 0;
                _this.body.position.y = 0;
                // push back
                var deepnessFactor = (_this.body.position.y * -1);
                // push back should also be informed by how deep I'm in the shits
                var pushBack = new __WEBPACK_IMPORTED_MODULE_3_three__["Vector3"](0, (_this.velocity.y * -1), // * this.pushBackFactor + deepnessFactor,
                0);
                //pushBack.sub(this.gravityVector)
                // this.velocity.add(pushBack)
                //console.log('pushback', pushBack.y, this.velocity.y)
            }
            /*this.body.rotateX(0.001)
            this.body.rotateY(0.001)
            this.body.rotateZ(0.003)*/
        });
    }
    Ship.prototype.build = function () {
        var coreGeo = new __WEBPACK_IMPORTED_MODULE_3_three__["BoxGeometry"](10, 10, 10);
        var coreMat = new __WEBPACK_IMPORTED_MODULE_3_three__["MeshPhongMaterial"]({ color: this.randomColor() });
        var core = new __WEBPACK_IMPORTED_MODULE_3_three__["Mesh"](coreGeo, coreMat);
        var thrustGeo = new __WEBPACK_IMPORTED_MODULE_3_three__["BoxGeometry"](10, 10, 10);
        var thrustMat = new __WEBPACK_IMPORTED_MODULE_3_three__["MeshPhongMaterial"]({ color: 0xff0000, transparent: true, opacity: this.thrust });
        var thrust = new __WEBPACK_IMPORTED_MODULE_3_three__["Mesh"](thrustGeo, thrustMat);
        thrust.position.y = -10;
        this.body.add(core);
        this.body.add(thrust);
        this.thruster = thrust;
    };
    Ship.prototype.randomColor = function () {
        return Math.floor(Math.random() * 16777215);
    };
    return Ship;
}());
var _a, _b, _c;
//# sourceMappingURL=space.component.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringifyPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StringifyPipe = (function () {
    function StringifyPipe() {
    }
    StringifyPipe.prototype.transform = function (value, args) {
        return JSON.stringify(value);
    };
    return StringifyPipe;
}());
StringifyPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* Pipe */])({
        name: 'stringify'
    })
], StringifyPipe);

//# sourceMappingURL=stringify.pipe.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToggleComponent = (function () {
    function ToggleComponent() {
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* EventEmitter */]();
    }
    ToggleComponent.prototype.ngOnInit = function () {
    };
    ToggleComponent.prototype.onInput = function ($event) {
        this.onChange.emit($event.target.checked);
    };
    return ToggleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* Input */])('val'),
    __metadata("design:type", Boolean)
], ToggleComponent.prototype, "val", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* EventEmitter */]) === "function" && _a || Object)
], ToggleComponent.prototype, "onChange", void 0);
ToggleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Component */])({
        selector: 'app-toggle',
        template: "\n  <input \n    type=\"checkbox\"\n    [value]=\"val\"\n    (change)=\"onInput($event)\"\n  />\n  ",
        styles: [__webpack_require__(243)]
    }),
    __metadata("design:paramtypes", [])
], ToggleComponent);

var _a;
//# sourceMappingURL=toggle.component.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 243:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 247:
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 248:
/***/ (function(module, exports) {

module.exports = "cemetary component\n<div style=\"width: 100vw; height:500px; background-color:aqua;\" #sceneContainer></div>\nshadow radius {{ directional?.shadow.radius }}\n<input type=\"range\" [(ngModel)]=\"directional?.shadow.radius\" min=\"0\" max=\"1\" step=\"0.01\" />\n\nshadow map width \n<input *ngIf=\"directional\" type=\"range\" [(ngModel)]=\"directional.shadowMapWidth\" min=\"0\" max=\"4000\" step=\"1\" />\n<input *ngIf=\"directional\" type=\"range\" [(ngModel)]=\"directional.shadowMapHeight\" min=\"0\" max=\"4000\" step=\"1\" />\n\nbias\n<input *ngIf=\"directional\" type=\"range\" [(ngModel)]=\"directional.position.y\" min=\"0\" max=\"30\" step=\"0.1\" />\n"

/***/ }),

/***/ 249:
/***/ (function(module, exports) {

module.exports = "\n\n<!--<div \n  [style.background-color]=\"hslString()\"\n  [style.height.px]=\"300\"\n>\n\n  hallo color-page {{ hslString() }}\n-->\n\n<!-- demo show -->\n<app-show></app-show>\n\n"

/***/ }),

/***/ 250:
/***/ (function(module, exports) {

module.exports = "<p>\n  control-panel works!\n\n  <md-checkbox class=\"example-margin\" [(ngModel)]=\"yep\">keyboard material :)</md-checkbox>\n<md-slider\n        [max]=\"100\"\n        [min]=\"-100\"\n        [step]=\"1\"\n        \n        [(ngModel)]=\"jo\"\n        [vertical]=\"false\">\n    </md-slider>\n</p>\n\n<div style=\"background: blue;  background-clip: text; -webkit-text-fill-color: transparent;\">\n\n  jo\n\n</div>\n"

/***/ }),

/***/ 251:
/***/ (function(module, exports) {

module.exports = "<h1> hello colors</h1>\n\ncamera fov\n<app-slider [from]=\"0\" [to]=\"360\" [val]=\"camera.fov\"\n  (onChange)=\"camera.fov = $event; camera.updateProjectionMatrix()\"></app-slider>\n\ncamera x\n<app-slider [from]=\"-100\" [to]=\"100\" [val]=\"camera.position.x\"\n  (onChange)=\"camera.position.x = $event\"></app-slider>\n\ndirectional intensity\n<app-slider [from]=\"0\" [to]=\"5\" [step]=\"0.05\" [val]=\"1\" \n  (onChange)=\"directional.intensity = $event\"\n></app-slider>\n\nambient intensity {{ ambient.intensity }}\n<app-slider [from]=\"0\" [to]=\"5\" [step]=\"0.05\" [val]=\"1\" \n  (onChange)=\"ambient.intensity = $event\"\n></app-slider>\n\n<app-toggle\n  [val]=\"ambient.visible\"\n  (onChange)=\"ambient.visible = $event;\"\n></app-toggle>\n\n<div #sceneContainer style=\"width: 100vw; height: 70vh; margin: 0px auto;\"></div>\n\n<flex-row>\n  <flex-col *ngFor=\"let chord of chords()\">\n    <flex-col style=\"margin: 20px; overflow:hidden;\">\n      <flex-row [style.background-color]=\"hslaString(chord.self)\" style=\"width: 200px; height: 100px;\"><b>{{ chord.self }}</b><br> h: {{ HSLAs[chord.self].h }}, s: {{ HSLAs[chord.self].s }}, l: {{ HSLAs[chord.self].l }} </flex-row>\n      <flex-row [style.background-color]=\"hslaString(chord.third)\" style=\"width: 200px; height: 100px;\">{{ chord.third }}<br> h: {{ HSLAs[chord.third].h }}, s: {{ HSLAs[chord.third].s }}, l: {{ HSLAs[chord.third].l }}  </flex-row>\n      <flex-row [style.background-color]=\"hslaString(chord.fifth)\" style=\"width: 200px; height: 100px;\">{{ chord.fifth }}<br> h: {{ HSLAs[chord.fifth].h }}, s: {{ HSLAs[chord.fifth].s }}, l: {{ HSLAs[chord.fifth].l }} </flex-row>\n    </flex-col>\n  </flex-col>\n</flex-row>\n\n\n\n<div *ngFor=\"let note of noteNames\">\n  {{ note }}\n  <input type=\"range\" [(ngModel)]=\"HSLAs[note].h\" min=\"-1\" max=\"1\" step=\"0.01\" />\n  <input type=\"range\" [(ngModel)]=\"HSLAs[note].s\" min=\"-1\" max=\"1\" step=\"0.01\" />\n  <input type=\"range\" [(ngModel)]=\"HSLAs[note].l\" min=\"-1\" max=\"1\" step=\"0.01\" />\n</div>\n\n\n<flex-row style=\"background-color: #333;\">\n\n  <flex-col *ngFor=\"let note of baseKeyboard.notes\" (click)=\"fakeKeypress($event, note)\" [style.background-color]=\"note.iAmSelf ? hslaString(note.name) : 'transparent'\"\n    style=\"border: 1px solid black; \">\n    <h1>{{ note.name}}</h1>\n    {{ note.octave }} {{ note.midiKey }}\n\n    <div [style.background-color]=\"note.iAmSelf ? hslaString(note.name) : 'transparent'\">self</div>\n    <div [style.background-color]=\"note.iAmThird ? hslaString(note.name): 'transparent'\">third from played</div>\n    <div [style.background-color]=\"note.iAmFifth ? hslaString(note.name): 'transparent'\">fifth from played</div>\n\n    <div [style.background-color]=\"note.isMyThird ? hslaString(note.name): 'transparent'\">is my thrid</div>\n    <div [style.background-color]=\"note.isMyFifth ? hslaString(note.name): 'transparent'\">is my fifth</div>\n\n  </flex-col>\n\n</flex-row>"

/***/ }),

/***/ 252:
/***/ (function(module, exports) {

module.exports = "\n<flex-col-center>\n  \n  <app-entertainer [width]=\"1400\" [height]=\"600\"></app-entertainer>\n\n  <!--<app-space [width]=\"1400\" [height]=\"600\"></app-space>\n  Here is another show\n  <app-show [width]=\"900\" [height]=\"600\"></app-show>-->\n\n</flex-col-center>"

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<div style=\"display: none; position:absolute; top: 0; left: 0; width: 100%; height: 120vh; background: url(http://apod.nasa.gov/apod/image/0603/coma_misti.jpg) -80px -80px;\n  color: red;\n  -webkit-text-fill-color: transparent;\n  -webkit-background-clip: text;\n  font-weight: bold;\n  font-size: 100px;\n  font-family: arial, helvetica;\n  width: 600px;\n\n  margin: 50px auto;\n  text-align: center;\">\n  hallo!</div>\n<div id=\"sceneContainer\" #sceneContainer style=\"width: 100vw; height: 120vh;\"></div>\n<div style=\"z-index:100; overflow-y: scroll; top: 0; left: 0; background: #000; color: white; position:fixed; width: 300px; padding: 30px; height: 100vh;\">\n\n\n\n\n<button (click)=\"save('R5')\">save config to R5</button>\n<button (click)=\"load('R5')\">load R5 config</button>\n\n  <button (click)=\"midi.player.start()\">play</button>\n<button (click)=\"midi.player.stop()\">stop</button>\n\n<button *ngFor=\"let song of midi.songList\" (click)=\"midi.playSong( song )\">{{ song.name }}</button>\n\nkeyboard: <input type=\"checkbox\" [(ngModel)]=\"keyboard?.keyboardObject.visible\" />\n\n<button (click)=\"requestFullscreen()\">full screen</button>\n\n<hr>\n<flex-row>\n<app-slider [xyz]=\"'y'\" (onChange)=\"spot.position.y = $event\"></app-slider>\n  <flex-col-end>\n    <app-slider [xyz]=\"'z'\" (onChange)=\"spot.position.z = $event\"></app-slider>\n    <app-slider [xyz]=\"'x'\" (onChange)=\"spot.position.x = $event\"></app-slider>\n  </flex-col-end>\n</flex-row>\n\n<hr>\nz speed x {{ dimensions.zSpeed }}\n<app-slider *ngIf=\"controls\" [from]=\"-1\" [to]=\"1\" [step]=\"0.001\" [val]=\"dimensions.zSpeed\"\n  (onChange)=\"dimensions.zSpeed = $event\"></app-slider>\n\nautorotate speed x {{ controls?.autoRotateSpeed }}\n<app-slider *ngIf=\"controls\" [from]=\"-10\" [to]=\"10\" [step]=\"0.01\" [val]=\"directional.position.x\"\n  (onChange)=\"controls.autoRotateSpeed = $event\"></app-slider>\n\ndirectional x {{ directional?.position.x}}\n<app-slider *ngIf=\"directional\" [from]=\"-100\" [to]=\"100\" [step]=\"0.1\" [val]=\"directional.position.x\"\n  (onChange)=\"directional.position.x = $event\"></app-slider>\n\ndirectional y {{ directional?.position.y}}\n<app-slider *ngIf=\"directional\" [from]=\"-100\" [to]=\"100\" [step]=\"0.1\" [val]=\"directional.position.y\"\n  (onChange)=\"directional.position.y = $event\"></app-slider>\n\n\ncamera x {{ camera?.x }}\n  <app-slider *ngIf=\"camera\" [from]=\"-100\" [to]=\"100\" [step]=\"0.1\" [val]=\"camera.position.x\"\n  (onChange)=\"camera.position.x = $event\"></app-slider>\n  \n  camera y {{ camera?.y }}\n  <app-slider *ngIf=\"camera\" [from]=\"-100\" [to]=\"100\" [step]=\"0.1\" [val]=\"camera.position.y\"\n  (onChange)=\"camera.position.y = $event\"></app-slider>\n\n    camera z {{ camera?.z }}\n  <app-slider *ngIf=\"camera\" [from]=\"-100\" [to]=\"100\" [step]=\"0.1\" [val]=\"camera.position.z\"\n  (onChange)=\"camera.position.z = $event\"></app-slider>\n\n\ndirectional light intensity: {{ dimensions.lights.directional.intensity }}\n<app-slider [from]=\"0\" [to]=\"10\" [step]=\"0.1\" [val]=\"dimensions.lights.directional.intensity\"\n  (onChange)=\"dimensions.lights.directional.intensity = $event\"></app-slider>\n\nbox fadeSpeed: {{ dimensions.box.fadeSpeed }}\n<app-slider [from]=\"0\" [to]=\"1\" [step]=\"0.001\" [val]=\"dimensions.box.fadeSpeed\"\n  (onChange)=\"dimensions.box.fadeSpeed = $event\"></app-slider>\n\nbox rotationX: {{ dimensions.box.rotationX }}\n<app-slider [from]=\"0\" [to]=\"4\" [step]=\"0.01\" [val]=\"dimensions.box.rotationX\"\n  (onChange)=\"dimensions.box.rotationX = $event\"></app-slider>\n\nbox rotationY: {{ dimensions.box.rotationY }}\n<app-slider [from]=\"0\" [to]=\"4\" [step]=\"0.01\" [val]=\"dimensions.box.rotationY\"\n  (onChange)=\"dimensions.box.rotationY = $event\"></app-slider>\n\nbox rotationZ: {{ dimensions.box.rotationZ }}\n<app-slider [from]=\"0\" [to]=\"4\" [step]=\"0.01\" [val]=\"dimensions.box.rotationZ\"\n  (onChange)=\"dimensions.box.rotationZ = $event\"></app-slider>\n\n\nbox width: {{ dimensions.box.width }}\n<app-slider [from]=\"0\" [to]=\"10\" [step]=\"0.1\" [val]=\"dimensions.box.width\"\n  (onChange)=\"dimensions.box.width = $event\"></app-slider>\n\nbox height: {{ dimensions.box.height }}\n<app-slider [from]=\"0\" [to]=\"10\" [step]=\"0.1\" [val]=\"dimensions.box.height\"\n  (onChange)=\"dimensions.box.height = $event\"></app-slider>\n\nbox depth: {{ dimensions.box.depth }}\n<app-slider [from]=\"0\" [to]=\"10\" [step]=\"0.1\" [val]=\"dimensions.box.depth\"\n  (onChange)=\"dimensions.box.depth = $event\"></app-slider>\n\nkick: {{ dimensions.kick }}\n<app-slider [from]=\"0\" [to]=\"10\" [step]=\"0.1\" [val]=\"dimensions.kick\"\n  (onChange)=\"dimensions.kick = $event\"></app-slider>\n\ngravity: {{ dimensions.gravity }}\n<app-slider [from]=\"-1\" [to]=\"1\" [step]=\"0.001\" [val]=\"dimensions.gravity\"\n  (onChange)=\"dimensions.gravity = $event\"></app-slider>\n\n  {{ camera?.fov }}\n  <app-slider *ngIf=\"camera\" [from]=\"0\" [to]=\"360\" [val]=\"camera.fov\"\n  (onChange)=\"camera.fov = $event; camera.updateProjectionMatrix()\"></app-slider>\n\n  fps: {{ fps }} warnings:\n  <div *ngFor=\"let warning of warnings\">\n    {{ warning }}\n  </div>\n</div>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "\n\n<div #sceneContainer style=\"width: 100vw; height: 70vh; margin: 0px auto;\"></div>\n\n<div style=\"width: 100vw; height: 30vh; border-top: 1px solid #333; background-color:#111; padding: 20px; color: #ddd; overflow: scroll;\">\n  \n  <!--- sliders -->\n\n  <!--- knobs  -->\n  <flex-row-around>\n<flex-col>{{ midi.knobs['R1'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R2'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R3'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R4'] | decimalToPercent }}% </flex-col>\n\n<flex-col>{{ midi.knobs['R5'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R6'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R7'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R8'] | decimalToPercent }}% </flex-col>\n  </flex-row-around>\n\n\n<!-- SONG PLAYING -->\n<div style=\"height: 40px;\"></div>\n\n<button (click)=\"midi.player.start()\">play</button>\n<button (click)=\"midi.player.stop()\">stop</button>\n\n<button *ngFor=\"let song of midi.songList\" (click)=\"midi.playSong( song )\">{{ song.name }}</button>\n\n</div>\n\n\n\n"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "\nspace here\n<!--<button (click)=\"rotate()\">rotate!</button>\n<button (click)=\"applyForce(-1, 1)\">-1 newton (left)</button>\n\n<button (click)=\"applyForce(1, 1)\">apply one newton for 1 second</button>-->\ny position: {{ ship?.body.position.y }}\ny speed: {{ ship?.velocity?.y   }}\npush factor {{ ship?.pushBackFactor | decimalToPercent }}\n\n<div \n  #sceneContainer\n  [style.width.px]=\"width\"\n  [style.height.px]=\"height\"\n  [style.background]=\"'lime'\"\n>\n  <!-- three.js renders here -->\n</div>\n\n<div style=\"width: 100vw; height: 30vh; border-top: 1px solid #333; background-color:#111; padding: 20px; color: #ddd; overflow: scroll;\">\n  \n  <h3>G: {{ this.g }} m/s2 times {{ this.gFactor }}</h3>\n\n  <!--- sliders -->\n\n  <!--- knobs  -->\n  <flex-row-around>\n<flex-col>{{ midi.knobs['R1'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R2'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R3'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R4'] | decimalToPercent }}% </flex-col>\n\n<flex-col>{{ midi.knobs['R5'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R6'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R7'] | decimalToPercent }}% </flex-col>\n<flex-col>{{ midi.knobs['R8'] | decimalToPercent }}% </flex-col>\n  </flex-row-around>\n\n\n<!-- SONG PLAYING -->\n<div style=\"height: 40px;\"></div>\n\n<button (click)=\"midi.player.start()\">play</button>\n<button (click)=\"midi.player.stop()\">stop</button>\n\n<button *ngFor=\"let song of midi.songList\" (click)=\"midi.playSong( song )\">{{ song.name }}</button>\n\n</div>\n\n"

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MIDIService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MIDIService = (function () {
    function MIDIService() {
        var _this = this;
        // test: count downs
        this.downCount = 0;
        /**
         * keyboard state: knobs
         */
        this.knobs = {};
        this.toggles = {};
        this.keyNameMap = {
            7: 'Master',
            91: 'R1',
            93: 'R2',
            74: 'R3',
            71: 'R4',
            73: 'R5',
            75: 'R6',
            72: 'R7',
            10: 'R8',
            // toggles
            97: 'B1',
            96: 'B2',
            66: 'B3',
            67: 'B4',
            64: 'B5',
            65: 'B6',
            // same as master, 7:  'B7',
            // same as R8, 10: 'B8',
            1: 'Modululation',
        };
        /* browser and midi device success */
        this.onMIDISuccess = function (midiAccess) {
            console.log('browser and device good');
            // raw MIDI data, inputs, outputs, and sysex status
            var midi = midiAccess;
            var inputs = midi.inputs.values();
            // for each of the incoming messages from a connected midi device
            for (var input = inputs.next(); input && !input.done; input = inputs.next()) {
                // call the onMIDIMessage function
                input.value.onmidimessage = _this.streamMessage;
            }
        };
        /** browser or device issues */
        this.onMIDIFailure = function (error) {
            console.log('No access to MIDI devices or your browser does not support WebMIDI API.');
        };
        /** take a message with raw data in data object
         *
         * outputs a nicely formatted midi message
         * updates internal representation
         */
        this.streamMessage = function (message) {
            var _a = message.data, action = _a[0], key = _a[1], value = _a[2];
            // console.log('MIDI service received action, key, value: ', message.data)
            var msg;
            var control;
            var eventName;
            var keyName;
            var velocity;
            switch (action) {
                case 144:
                    msg = {
                        control: 'keyboard',
                        name: 'keydown',
                        key: key,
                        keyName: 'C1',
                        velocity: value / 127,
                    };
                    break;
                case 128:
                    msg = {
                        control: 'keyboard',
                        name: 'keyup',
                        key: key,
                        keyName: 'C1',
                        velocity: value / 127,
                    };
                    break;
                case 176:
                    msg = {
                        control: 'dial',
                        name: 'turn',
                        key: key,
                        keyName: _this.keyNameMap[key],
                        decimal: value / 127
                    };
                    // update local representation (does not work)
                    var newVal = value / 127;
                    var knobName = _this.keyNameMap[key];
                    _this.knobs[knobName] = newVal;
                    break;
            }
            // pass down the message stream
            _this.source.next(msg);
        };
        this.songList = [
            {
                name: 'Rustles of Spring Op-32 No-3',
                data: 'data:audio/midi;base64,TVRoZAAAAAYAAAABAYBNVHJrAAA2FQD/UQMH0zQA/wMAALBAfwCQRh0ygEZARpBGGWNJFwSARkBASUALkE0kLYBNQCOQUh8wTRkFgFJATJBJICxGKAuASUAcTUAWRkAMkEEpKoBBQBuQRh4ySSYlgEZAH0lACJBNLiaATUAJkFIyNU0pKoBSQBWQSS0PgE1ACJBGORyASUAbsEAABIBGQCaQREJLgERADrBAfx+QRDlLSSMngERAH5BNHRxQOgSASUAPTUA2UEADkE07RUkbEIBNQCSQRDIogElAC0RAIpA9PDJEIz2APUAFkEkoIYBEQCBJQAqQTRMUUDRBgFBAMpBJExVEJgw/LQuATUATSUAEREAVP0AzkEEyH7BAABWQRCVASSoygERAIpBNIQaASUAkTUADkFAuALBAf02QTRUHgFBAJ0FADk1ADZBJGUZEIgCASUAwREA8kEQpNoBEQDKQRDFOSSENgERAK0lAE5BNIyqATUAFkFAuQE0iA4BQQC2QSSgRgE1AIZBEIw2ASUAnREA4kCUpIkQWQkkgF4BEQAUlQBlJQBeQTRovgE1AA5BQMBcsKR6AUEATkE0jL4BNQA+QMTEFgCxAAJBJEhFEIB+AMUARSUAAREATkDVUJEQxAIA1QDCQSRkZODsWgERALElAAJBQOhY9SCCAOEAckE00FoA9QAuQQUsTgE1AAFBAEJBJIy2ASUARQUAykEZJSLBAADCQSTFTTTEOgElAIE1ADZBSLwCwQH8QgEZAH5BNOwmAUkA7kEkuMUYtAIBNQB9JQCVGQA6QQUYugEFAAJBGKCtJNSqARkAdkE03FYBJQBNNQA6QUi9LTRwqgFJAAJBJMAiATUAWkEZDEYBJQB9GQAWwQAAfkEROYYBEQBywQH8XkEQnMkk2DoBEQCpJQBOQTSoqgE1ACJBQMDyAUEAAkE07KUkoAIBNQCSQRC8TgElAHkRACpA9Oy+APUAIkEQmPUkmJYBEQCRJQAWQTR4sgE1AAJBQLkFNLQCAUEA1TUATkEkeFj8wBkQqGYBJQB4/QAdEQDeQQTgWsEAAIZBEHlJIIxiAREAukE0fCIBIQCGQUC4AgE1AJLBAfwyAUEAZkE0pIIBBQA5NQBGQSB8rRCUKgEhAIkRAKpBEPS+AREA9kEQsRYBEQACQSCI4gEhAAJBNJB9QOxGATUAzkE0iBIBQQCKQSCMUgE1AEJBELBGASEAeREBgkCkyJ0QkXkgeBYBEQDYpQAZIQAqQTR4rgE1ADZBQJxowJR1NIxKAMEAIUEApkDVKBkgaDoBNQAyQRCMHgDVAD0hAHERAEZA4N2BIHwA8OA+AOEAbkE0nF4BIQA6QUDEFgDxAC5BBRw+ATUALUEAOkFQ7LFAwFIBBQA6QREcQgFRAAJBNJhlIJwCAUEARTUAbSEA4REAwkEhCJrBAAIEEgEhAEbBAfxOQSBonTTEkUDgLgEhAJVBADk1AAJBUOC9QMCJNKhCAVEApkEgsCYBQQCJNQAVIQA6QREAfgERAGJBIKjlNKhmASEANkFA5J4BQQAuQVD0IgE1AMJBQJSVNIgOAVEAdkEgxDoBNQAlQQACQRj0PgEhAB7BAABeARkAkkEhCSLBAfwOASEA1kEgyJUwtDYBIQBmQUDkagExAGVBAC5BUMTRQPh+AVEAGkEwyL0gmCYBQQBNMQBZIQAaQPEUwSDoKgDxABJA+MSBAPQSASEAFPkAJkEwdAFAbG4BAQAOQQTsUgFBAB5BUMgOATEADQUAZkENGD4BUQACQUDcrTBMASDsVgFBADZBEPQSAQ0AASEAPTEAfkEZEBLBAACaAREAwRkAAkEhYP4BIQAewQH8xkEgtQU0vC4BIQByQUEMfgE1AIFBABpBUNzNQPStNNgyAVEAnkEgjBoBQQABNQCSQREYLgEhANJBIKx9NNxyAREAASEALkFAuMIBQQABNQAOQVDknUCYZgFRAA5BNMSZIKwmATUANUEAAkEY1FIBIQACwQAAdgEZAD5BITESASEAisEB/CJBIRDRMKhqASEAEkFAyMYBMQAtQQACQVDcfUCQegFRAAJBMIy1ILgqAUEAWkDw8DIBIQAlMQBM8QACQPj4eSDQEQDsSgD5ABJBMIxaAQEAASEAAkEE/HlA6C4BBQBWQQ0kLgFBABZBUOgWATEAwVEAAQ0AIkFA2DEwiBEQ9Dkg/EYBQQAxMQAVIQAOQRkQLsEAALYBEQCKQSF0ZgEZAI0hAErBAfxaQSEYvTTkYgEhADJBQQjNUQwWAUEAGTUArkFBBGE04FYBUQB+QSDgRgFBAE01ABUhADJBGVilIPRqARkAWkE06J1BBCIBIQC1QQAhNQACQVD8wUEgQTTEPgFRAG5BILgBESw+ATUAQUEANSEAAREARsEAAM5BLX16wQH8zkFBFIYBLQB+QVDEngFRABZBXNwiAUEAwkFRBPYBXQBCQUCoXSzIOgFRACFBAGUtAFpA/TjZLJhCwQAAtkE9GM4BLQA4/QACQUjgWsEB/FYBPQAdSQA2QVzg2UitAT0AIgFdAE5BLOROAT0AJUkAbS0AEkERLN7BAAACQS0AqUEQ3gEtADJBUNSeAVEAAkFc2CLBAfw6AUEAtkFQ7C4BEQCqQUCsDgFdAG1RAAJBLQRGAUEAIkD9CH4BLQAg/QCGQQU4uSDsOsEAAKZBNMS9QOwmASEAnUEAAkFRCBoBNQA2wQH8qkFA6C4BBQAyQTSwAgFRAEFBAE01AA5BIKCE8OQqASEBQkD9BDrBAAACAPEARkEQpKkgrQ4BEQASQSzAngEtAA0hAEpBQMQCwQH81kEsXKYA/QA5QQA2QSB0XRCQUgEtAA0hAEZA4Jh6AREAkOEApkDwcF7BAACqQQC4+RiUsgEBAGJBIJx2ARkAmsEB/CYBIQAuQTCVISB4cgExAFJBGIi+ASEAIRkAlkDQzE4A8QBmwQABakDVeDoA0QD+QPC1dQRgYgDxABpBELVNIMhSAREAFQUAwkEQdDIBIQBWQQSglsEB/FpA8Ki03VACAQUALPEAAREBCNUADkDw+FLBAAB6QQS4uRDQDgDxAOkFAAJBINwOAREAcsEB/G5BEGhdBIgOASEAkkDhMAzweBIBEQAZBQBM3QBk8QBWwQABNkDxRF4A4QGmwQH8rgDxAPJA8P0SAPEAKkEEeJEQyQYBBQAuQSCkAgERASZBEIhWASEAJkEE2LYBEQByQPAoKgEFADJA1SxyAPEA4sEAABZA8LDhBLSGAPEAMkEQkIUg7BbBAfwyAQUAxSEALkDc/B4A1QAqQQRcXPDoLOEEZgERACDxAAEFAEzdAIpA6Qy+AOEAGkDtQGbBAAByAOkAfkD42PUEsDYA+QByQRDg2gEFAALBAfwiAREANkEoxLYBKQACQRCwJQSIRgDtABZA6Qkg+LAaAQUALREAGkDhJFoA6QAg+QEOwQAAikEFOQoA4QA+QPjc9RC5CgD5AA5BHMiqAREAMsEB/BYBHQBGQSjhARyMRgEpAEpBELUo+IQCAR0AnREANPkBBkD4rNEQnJIA+QCeQRzIfgERADkdABpBKO0NHLiCASkAEkEQvSz4fBoBHQBtEQBM+QBiQQjMLsEAALIBBQBmQPhtORR8ngD5AEZBIJAuAQkAAsEB/EIBFQBZIQBeQSixISAkigEpATkhADZA+GTmAPkAekDcyOj4bPEMhOUYkBoA+QDOwQAAWgEZAA0NADZBKMjNGIENDLgOASkAKsEB/M5A+Jg6ARkAYQ0ASPkAWkDk5Rj4qBYA3QCKwQAAdkEMpIkYrCIA+QChGQA1DQACQSjohsEB/CpBGLBiASkAikEMZFIA5QAiQPjIQOjoLgEZABkNACD5AKrBAABqAOkAFkD5LWbBAfwCAPkAvkD4ZLUMtCYA+QBmQRi0vgEZABkNAB5BKNzBGJCWASkAKkEMgMz4rDoBGQCA+QARDQA6QN00xPjgwQy0ngD5ABZBGMDOARkAGkEpBBYBDQBY3QBSQRjEhQyUQOTgAgEpAF5A+NxA6QRyARkAAPkALOUAKQ0AgkDxKLYA6QBmQPVMTsEAADoA8QB2QQDc4QzwngEBADJBGNTaAQ0AAsEB/AIBGQBCQTD8cgD1AF5BGMxxDLA6ATEANkDxIH4BDQACQQDALgEZAJUBAA5A6QhOAPEBkkENRALBAAD2AOkAnkEA8OEYuQ0koDIBAQAWwQH8cgElAD5BMMwyARkAkkEkmJ0YgFYBMQC6QQDcfgElABkBAEEZASZBAKSxGMT5JLgiAQEA3SUAHkEw5CIBGQDCQSS4rRioJgExALZBAMhSASUAWQEANRkAAkERGIYBDQAmwQAAWkEAvPUdDPoBAQBeQSjcSsEB/FIBEQAtKQAxHQACQTDs0SkM4Rz8OgExAHEpAF5BAKCGAR0ARkDlTB4BAQEGQQEAsRTIysEAABpBJMxOAQEAukExEDoBFQABJQC6QST4MsEB/GZBFJhGATEAkkEAxHIBJQBFAQAhFQAaQO1lLQDMQsEAAE5BFOReAOUAkkEkpC4BAQCWQTEMIgEVACbBAfy6QRSkkgDtADExABZBAMQ49VhOASUAGQEADRUAPsEAAPZBAWSmAPUAdsEB/DYBAQDOQQFI3RS8wgEBAAJBJKCtMQAOASUASRUAkkElEG0UlFIBMQBeQQEkdgElABpA5WACAQEAeRUAxkEA/B4A5QCCQRSEySTgYgEBAKpBMSRGARUAJSUAykElJJkUjFYBMQCCQQEgfgElADkBADEVAUrBAACiQQVx0sEB/AIBBQDGQQURHREUogEFAG5BJLhmAREAaSUAAkE09PUk9HERDCYBNQDSQQTMbgElAHURACUFAA5A/XD1BOCGwQAAhkEQ7PUkuA4BBQBmwQH8TgERACZBNPwaASUA8kElABIBNQB+QRDgIgD9ANZBBMROASUAaQUAFREAGkD1WNEFAALBAADWQREczgEFACJBJMyGwQH8OgERADpBNTAuAPUARSUAikEk7HURFAIBNQD6QQSkXgElAG0RAA0FAC5A8WCVBMy9ERTCAQUADkEkmGoA8QB+QTUgEgERADUlAO5BJOAOATUAfkEQ+BzpFIYA6QAREQBCQQQoMgElAHEFAE5A4XRAsVC1CQDhINB+wQAAOgEJAGJBLPCeASEAHS0ADkFBHPUs5FbBAfyKQSDUAgFBAJJBCOgmALEAIOEAQS0ARkDdkA4BIQABCQACQK1c1QjgDsEAANZBIOySAQkAZkEs+KYBLQABIQACwQH8EkFBJPUs4IYA3QBSQSDgAgFBAFCtAC5BCRCmAS0AQSEAAQkAGkDZjDCpRI0I7PEg+HLBAAA2AQkAckEtDNVBMBoBIQBxLQBKwQH8ckEtHLYBQQAaQSEAwQkcWgEtABzZAGipABkhAEEJAA5A1bwYpWTJCNiSwQAAUkEg/NYBCQBmQS0QhsEB/E5BQTwCASEAJNUAbS0AfKUAFkEs8NoBQQA2QSDYyQkIXM2EIJ1YAgEtAFkJABkhAcDNAQidAFJBSWAVGSARJQgVNSwYlYUOwQABhkCxJHoAlQDWwQH8OgFJAEpAxSwOATUAYSUAULEADRkAjMUAPkDVXRYA1QCGQOkwfgDpAXpBBWwY1WQY9M06ANUA9PUAFQUCBQ5BGSwA6SDOARkAWOkAskClPBkRRCD0+ADhFCbBAAF+QLEsbgDhAKylADj1AALBAfwOAREALkDE+J4AsQBsxQAuQNUkygDVAIJA4RC+AOEA4kD1YCjFWT4AxQCw9QIFGkDNKBj9IGYAzQDQ/QDWQIEAPQU4FNVgFsEAAAJA8P3osRBeAIEAGNUAiPEAKLEAJsEB/L4BBQCKQOEVggDhAFZA3VFWAN0AnkDhJBkROBDxBBUFGBTZQZIA2QBmQNVxqNFgMgDVAWJAzTgCANEBrkDJQCIAzQCewQAA9kDFLD4AyQF2wQH8KkDBFB4AxQBdBQAA8QBA4QA5EQDOQL0EYgDBAXJA2OgZAQwWAL0AEkDwkCi4wMLBAAFSQLDoZgC5AL7BAfwyANkANPEAWLEAEkCsyI4BAQEArQAyQLENcgCxAOJBGTgc6LwA9MwBBLBOwQAAJkCUubixACoAlQCU6QCawQH8MgD1AA5AxQAqAQUAGLEAcMUATRkALkDVOIoA1QD2QOD1aOjUHgDhAIjpAIpBBWQY1YQA9QTeANUAqPUAeQUCCFZBGTQo6Nk6ARkAROkBakD1ABThOAERWACJGL7BAAGGAIkAEkC4+L4AuQAU4QAs9QA+wQH8RgERAFZAxPl81XxqAMUBrkDhYAIA1QEyQPVcGgDhAA5AxRUWAMUBhPUCBCZAzSQg/QiiAM0AWP0AUkCVIP0FTCzVIAzs1BrBAAHqQLEQcgCVAHDVAGTtADrBAfwuQMUYOgEFAFCxAQzFAAJA1VX9ESww4PQM7OgA/QgOANUBsOEARkDZMaoA2QAuQNVVhM0YWgDVAWZAxRhWAM0BEMUAgkC9AWC5FDIAvQFSQLEsegC5ATJAqQiSALEAOKkAZO0AIP0AWkClGL4BEQCWQJ0sGgClAPZAlRTGAJ0AtJUBOkCROJLBAAAaQSFgEREAAPEoIQT93MD8AgCRAJzBAELBAfxKAPEAnQUATkDVPC4BIQB5EQCqQOEAOgDVAKjhACZA8RSOAPEA2kERTADhYTYA4QChEQIE2kDo+BUY+IYA6QANGQDKQMEYDsEAAEJBIVwM8TwVEMwRAQS8yNic0UByAMEADMkAbkDVWAIBAQAZIQAhEQAawQH8LgDRAADVADpA3TSGAPEAwN0AHkDhCKzpIDYA4QBY6QA+QPEssPkkogDxAC5BAQiGAQEAIPkAckEFPGrBAAB6QQ1IpRD8DgEFAO5BGTBSAQ0AnREARkClLEDxcA0hWDURMOIBGQEGQMDExgDBACbBAfwCAKUALkDVaAIA8QCJIQAQ1QBFEQDKQOEJgPE8GgDhAJDxARZBETwZBOQA4VGaAOEAqQUBDREBakDpDAEZLIYA6QAZGQDGwQAARkEhMAzxFBTA0AEQwBEA7bzI7EYAwQBuQNEgLgDJAKDRACJA1URSwQH8IgEBAADVAC0RABJA3TQyASEAyPEASkDg8E4A3QBSQOlATgDhAFJA8NASAOkA0kD5VIYA8QBuQQEkUgD5AC0BACbBAACGQQUsOsEB/LJBDVCGAQUAEkEQ7Q0ZMCIBDQC1EQAOwQAAhkEheCDxMAERIBSk/OYBGQD+QMCwfgClAEDBABzxACJA1WwCwQH8WgERAETVAWJA4JjOAOEAOkDxNIYA8QCqQRFkGQUktgEhAY0RAgRxBQDKQSFcEREUygERAQrBAABaQS1gEJykLRhsDQy8DPysHgEhAc5AuJgaAJ0BcsEB/C5AzNAuALkAeM0AOP0AUkDc0QIA3QCqQOihQPTMOgENAJzpAAD1ALZA/Wj+ARkAAS0AikD0wVzonBoA9QCk6QDWQNzVZgDdADJAzLlMuKwaAM0BYLkAIkERLILBAABCQLDEXgD9AeJAzMBKALEA+sEB/G5A4N1o8MkGAREAKkD9IQUQmJIA/QG+QSDkJgERAMjxAHpBGMzuASEAWkEQ5IoBGQCpEQAg4QACQQTNVP0USgEFAOJBBNBCAP0BUkD85I4BBQCiQPEEGgD9AEzNARZA4QxSAPEA9kDo1E4A4QDmQODQ0gDpAH5A1WwCAOEBfkDNLE4A1QDqQNVQRgDNAS5AzPxWANUA5M0AAkDBIVyxTHIAwQEaQK1EmgCxAM7BAAA2QTWIGQVQASEkAKVQGREYFgCtAgQOQMD8kgClAJ0FAA7BAfwWQNVQDgDBADkRAGkhAADVANU1AA5A4RVA8OyeAOEAckEFUIYA8QBqQT2cDQ18ISFAGgEFAP5BBKhSAQ0ANSEAOT0ADQUAWkDxBSThADoA8QBY4QEyQNWUeRFgAUFkFgDVAHERAAFBAH5AwLjCAMEADsEAADpBUZwApPwhISgBQPAhNNEIwLlGAKUAGMEAEkDVfHYBUQACwQH8GgE1AEVBAADVAMkhAGpA3Fz84SAyAN0BFkDxBCYA4QCM8QAmQTVsAQVRMgE1ABZA8JSGAQUAXPEAVkDguK4A4QDiQNV0TQ0gWgDVAJ5BEPgCAQ0AvkCk9FkY+D4ApQBBEQDOQR2ILP00DRBoLOzsHNUkKsEAADoBGQAqQOCYEgERAgUiwQH8FgDVADj9ABThADDtAE5BGSCeAR0AhkERRPIBGQDqQTV4TsEAAE4BEQAaQMxhWOCRRgDhAIJA7FRuwQH8ckD8yEIAzQA87QBE/QBWQQSZPRDQfgEFAN5BHRBCAREA4kEQxUYBHQAmQQUEWgERAIZA/KwmAQUApP0AfkDssN4A7QBSQODhlgDhAA5BOTh4yLAuwQAAMgE1AS5A5MCqAMkAVkDxBNbBAfw+AOUAQkD4/E4A8QBI+QBWQQi9RgEJAA5BKNguATkAcSkB4kE9OBkouBUMpBbBAAACQRhQGKyBdMjQmgCtACDJAIJA3Ng+wQH8dgDdAEUpAA0ZAFkNAC5A6MyqAT0BCkD4rVkMmBIA6QA4+QCFDQAuQUV0ARUoRSkEcgEVACkpAIlFAF5BDNzKAQ0ALkD4oRoA+QACQOjEngDpAS5A3RhtSVAhGMgmAN0AOUkAURkAIkDIyLbBAAACQUh0FgDJAAJBWYgtPOwBKRgsrL1EyIiWAK0ANMkAIT0AOsEB/AJA3QAuAVkARUkAZN0AlSkAekDovgQA+QyGAOkAHPkAukE9eBkNGZD4uD4BDQApPQBE+QAuQOjIngDpAQZA3RDRFMwSAN0AVkDI0KEY6A4AyQBOQKzsXgEVADStACJBIVB+ARkBPkElWD0E2BkYbAD02JYBIQA2QOhUANyUEgEZAErBAAIFXQH8LgDpAAzdABpBITA2AQUAAPUBESUAOkEZHKoBIQDqQNT0kT18AsEAAIoBGQEuQOidNPTpEgDVADpBBLCGwQH8lgDpAAD1AA5BDMBOAQUAxkEYtJ4BDQCiQSTobgEZAPZBGJkxDMgiASUAURkAbkEExF4BDQCaQPSwAgEFANZA6MCqAPUAgkDVKGYA6QAo1QFKQUEQVNEYXsEAAAIBPQGKQO0EYgDRAMpA+PgiwQH8AgDtARj5AAJBASS+AQEARkEQ4Tkw9GYBEQANQQBlMQC6wQAALkFFlAExKCEVOBUlBAC04UTQ5GYAtQAg0QBOQOToKsEB/K4BJQAdFQAtMQAY5QB2QPUYJgFFAU5BAMjZFQyqAQEALRUARPUAOkFN2BUxUAEdkVIBHQA6QRTYNgFNAC0xAFkVAEpBAOC49RgCAQEAkPUBJkDlDMFVWA4A5QACQSU8VNFEagElAFpAxNAWANEAJVUAeMUAEsEAAB5BYagBVUwRMWwArWwVRS1cxSDyAK0ADkDRPDrBAfxKAWEAKUUAEVUAIMUAVkDlFAIA0QB9MQAw5QDWQPUdKQFs+gD1AEEBAAJBRZwZFWwBJTABMUU5ASEaARUAcQEAAkD1IIoA9QAdJQAdMQBNRQCqQOUopgDlAH5A0VhuANEBKkCtcJoArQHqQWWcAVU8GUFMATVsPLGUFsEAAfYAsQAOQLUkzgFlAALBAfySAUEAAkC5OA4BVQBNNQAAtQEiQL1kqgC5AH5AwURCAL0A+MEAQkDFZVldgCTJiA0tQBU0/AFBID4AxQDoyQBCQM1VUNFUngFdADEtAADNAEJA1aQuATUAINEAlUEAQNUATkDZdXzdcFIA2QCWQVWQDSVwKUFIATVcUOFUTgDdAPjhAAJA5U006TxGAOUA3kDtLFIA6QB1NQAqQPFgGgFBAEDtAFklAGlVABZA9WDuAPEALkD5ZDlRtBUhhBFBOA4A9QAWQTU00P1cKgD5AOkhABZBATQ6AVEAWTUAZP0AMUEAAkEFVCoBAQE5BQACQQkcuUlcDRlcYQ1IZgFJACUJAEUZAB7BAAA6AQ0AXkFBhAERkdIBEQACwQH8MkEVGJIBQQCSQRkcWgEVAQJBHTheARkAkkEhOJ4BHQCSQSUsdgEhAEpBDZQc4SAc3PRGASUAAkEpZS0tNBIBKQEiQTE8QgEtAPJBNVDyATEAGkE5UDoBDQA03QCU4QABNQAWQT1tOQl8JUFYANloIOEYMgE5AHk9AGZBISiywQAAakElJDoBIQBZQQDOQSlYTsEB/BYBJQCU4QBOQS1MDgEpAUJBMUQuAQkAAS0AjNkArkEFkAE1iBzhPADVnIIBMQDKQTlYggE1ANZBPXxCATkA+T0AEkFBVKIBBQAA1QC+QUVQIgFBACThAOlFAAJBSTjU/XAY4QgszPgWAUkAPkFNpBYA/QBQ4QBYzQBOQVFYtgFNAZZBVXAclXABSST6AVEAIsEAAc5AsRBCAJUBWsEB/CZAxQieALEATMUAXUkAUkDVLLoA1QDGQOD1xPT4fgDhAJT1AOpBBKhBNViGAQUAzVUARkEQpU4BEQCGQSTc1gElAS5BEEzGARECBIZA9FgBSRDqATUAAPUAAkDgnMIA4QCqQUERmMSkUgFJAJzFAKpAsIkOALEA6kCUnSYAlQBOQLCdAgCxAN5AxJC2AMUAtkEkxCTUzMYA1QESQOBwIgFBAXJA9JUOAPUAykEEXQ4BBQBaQRCZUSzkZgElAAERAZJBNOQVJFACAS0BoSUASkEQgT4A4QB6QQR1AgEFAJ5A9G2KAPUAAkDgiMoA4QAVEQFKQNSmBDVArEYA1QA6QMSMigE1AHzFAJJAsJEOALEA1kCUlOYAlQDWQLBw8gCxADlBAE5AxJC+AMUA+kDU+NYA1QDKQOCx3gDhACZA1MzWANUAkkDEaMoAxQDuQNRYqgDVALJA4J209MCaAOEAkPUAokEExcT0lEYBBQDA9QB6QOBVZgDhAF5A9IUyAPUBCkEEUVIBBQBmQRCSBSEYzAIBEQBqwQACBNUB/CIBGQDWQRgoySSMOgEZANElAKJBNHSyATUAOkFIpVE0NFoBSQEaQSRIsRiAOgElAA01AJEZAFJBBMlhGJAeAQUA3kEkfDoBGQCxJQBGQTSkngE1AC5BSLjhNJCSAUkArkEklHoBNQAOQRjMcgElAA7BAABCARkAykEQ5WYBEQACwQH83kEQsX0kcBoBEQDJJQBSQTSgqgE1AGZBQKTVNGBSAUEA5kEkaJ0QiD4BNQAhJQBtEQBqQPSk+RBo/SSAAgD1ABURAPElAOZBQKzyAUEAekE0QLEkWFoBNQAeQPywHRBoRgElAHT9ACERAFrBAACSQQSowRB1bSCEcgERAMpBNJwCASEAqTUAGsEB/AJBQJz2AUEAIkE0fTkgaD4BBQAdNQBmQRBsGgEhAKkRAgRqQRCJHgERAGpBIIkWASEAIkE0VNlAiC4BNQCRQQB+QVC1CUBQggFRAMpBNJjKATUAOkEgbKYBQQAlIQECQKSVTSB8UgClAMZBNJACASEAzkFAsAIBNQEtQQBqQVCopMB8OUBspgDBAIFRAFpBNHBE1NhxIHAeATUASUEAKNUASSEAkkDgvLEgfSYBIQAWQTRMMgDhAAJA8MQtQMCyAPEAAUEAATUAlkFQqE0E0DlAjJoBUQACQTQ8wgEFACE1AAJBIFwyAUEALkEQ6JIBIQHJEQA6wQAAWkEhHe7BAfwWASEA6kEgsVE0oCIBIQCCQUDYvgE1ACFBAGZBUMyxQJxpNICSAVEAskERAEYBQQABNQEyQSC4xTScGgERAFkhAEZBQNTWAUEAFTUAHkFQ5KlA+JE0kEoBUQCCQSDIVgFBAAJBGOA6ATUAHSEAksEAAA4BGQDeQSFNWsEB/C4BIQDKQSDg8TCkEgEhAI5BQLiCATEALUEAEkFQ+LFA/FIBUQAqQTCcySC4tgEhABFBAE0xAEZA8KjFIGgeAPEAVkD4uJYBIQACQTC0RgD5AEpBAIBdQMhqAQEAEkEE8CoBMQAdQQBRBQACQVDkkQzwAUDInTB8RgFRAEJBETASAQ0ASTEARUEAlkEZIC7BAAAmAREA/RkAAkEhTYoBIQAmwQH8ukEg9M4BIQACQTTIpUDs5gFBAAE1ADZBUOzJQLi1NKwuAVEAnkEgnF4BNQBBQQAxIQCaQRDpDSCY7TS0FgEhAEURAE5BQMRyATUAWUEAZkFQsJFAsH4BUQBSQTSkZgFBADpBIGgOATUANkEYsKoBIQAiwQAAPgEZAIZBINmGASEADkEwrCLBAfy6QUDAkgExAClBAK5BUDxhQKhqAVEAIkEwaQkgfDIBQQCJMQAVIQByQPC0pSCMMgDxALEhAAJBMJzZALwNQLS6ATEAAUEAAQEAPkEExCFQpHIBBQAeQUDcXQzwMTCIOgFRAJ0NABZBIJBaAUEAAkEQ3FoBMQARIQCSQRkQWgERACLBAADqARkAPkEhPRYBIQA+wQH8bkEhEQk0yFIBIQB2QUEAsgFBAA01ACJBUPSlQOyRNLhiAVEAbkEhAHIBQQBNIQANNQByQRkYtSCsyTUUNgEZAH0hAFJBQRT+ATUAKkFRGDoBQQC6QUEsyTTsGgFRAM5BIOhKAUEAUSEADTUAAkERFZ7BAACSAREAOkEtWgQ6wQH8lkFA+L4BLQBaQVC8qgFRAAJBXOQmAUEA0kFRAQVArA4BXQB2QS0McgFRAEktAAFBAGZA/TzpLKzpPPwmwQAAfgEtAGZBSNzGAT0AMUkAAkFc9G7BAfw+AP0AOkFI4Qk84CIBXQByQSzkdgE9AHFJAAEtAA5BEUUtLLhawQAAYkFA+NoBLQA2QVDgwgFBADrBAfxGQVz0OgFRAKkRADpBUQUKAV0AAkFAyJEsyDIBUQABQQAuQPzsmgEtABD9AKZBBQkOwQAAJkEg0P00kH1A5CIBIQCdNQAtQQBKQVDkNsEB/KJBQLhuAQUATVEAAkE00J4BNQAZQQAWQSCIXPDAXgEhANzxAFZA/PDREKQCwQAA/kEglGoBEQByQSx0FgEhALUtABJBQKAqwQH8mgFBAHT9AAJBLLStIIQmAS0ALkEQkGoBIQAuQOCEbgERAMzhAHJA8KjKwQAATkEAoQUYnEoBAQEmQSB4esEB/D4BGQA1IQB+QTBgvSBwJgExANJBGF0eASEANkEAPDjQtAIBGQAk8QCZAQGuwQAALgDRACJA1Szc8JFFBICeAPEAPkEQuQ4BBQA1EQACQSC5GRCwXgEhACpBBJjA8MCmAQUAGREATPEAnkDdFPDwtHYA1QCqQQSQkRDEEgDxANURACEFAAJBINz6wQH8DkEQrCkEmBYBIQB+QPDsZgERABUFAAJA4TgyAPEAQN0A8sEAAOpA8RjeAOEBDsEB/IYA8QDaQPD80QSocgDxAFJBENUOAQUAGkEg5VkEfC4BIQC+QPCckgERAHEFAADxAPZA1P0E8LCqwQAAYkEEnJYA8QAWQRCwwgEFAAERACpBINQewQH8ykEQyFYBIQBKQN0AAQSwIgDVAF5A8NR44SQuAREAJPEALQUAON0AskDpDM4A4QB2QO1cRsEAAF4A6QBuQPjFBQTAegD5ACZBEOCawQH8SgERACEFABpBKPC9EMg6AO0ATSkAAkEEoEDo9LT41HYBBQAVEQACQOE0bgDpABz5AfJBBWwawQAA9gDhAIJA+Mz1EMz1HOhSAPkAHsEB/HIBHQAlEQAOQSkE8RzotRC4IgEpAQZA+HRGAR0AmPkAAREBPkD4nN0QrMIA+QBCQRzMygEdADJBKOwCAREBAkEc0LYBKQAeQRDJLPi4MgEdAHkRABD5AN5BCLjCAQUAYsEAAPZA+K0RFJEhIKAyAPkAAsEB/JIBIQAtFQBmQSiwjgEJAH5BICieASkAakEUSQz4aA4BFQAdIQDA+QB+QNydCPhwtsEAAFJBDHDVGJgqAPkBEQ0ATRkADkEowE7BAfxqASkAYkEYsJEMzLT4wFoBGQAxDQAs+QCKQOTk3PioRgDdAEbBAACmQQy0egD5ABpBGMDCAQ0AFRkALkEo6HLBAfxSQRi0FgEpAMJBDJBk+LxY6QACAOUAORkAAQ0AFPkA1sEAAJ5A+VRqAOkBGPkATsEB/I5A+PzlDMA6APkAmkEYwMko9AIBGQARDQC+QRj0cQyEWgEpAIpA+NBiARkASPkAHkDdQEYBDQCyQPjMzQyUqgD5ABpBGMkpKPwSAQ0AYRkAnkEYnFIA3QAZKQBCQQxkQOUYOPjgoOkYDgD5ACEZAF0NAGDlAFpA8UDaAOkAfkD1WBLBAADCAPEAokEA5PEM+KIBAQBWQRjI2gENAALBAfwCARkAKkExFKIA9QAmQRjYoPE0DgExABJBDJkOAQ0AAkDpEEoBGQBE8QHiQQ1oIsEAAR5BAOB6AOkAckEY3S0kvDLBAfw2AQEAlSUAIkEw/GIBGQCKQSTYoRhwLgExAOpBALx2ASUASQEAORkBWkEAtJEY0PEk0C4BAQDeQTD8FgEZAD0lALJBJSCdGKhyATEAikEBCLIBJQABGQAxAQAuQRFQksEAAA4BDQCyQQD87R0dDSj8AgEBAE7BAfw2AREArkExDB4BHQBJKQC+QSktDRz8RgExAIEpAEpBAQD2AR0AbQEAAkDlTRkAyQEUpK7BAAA2QSTAigEBAKpBMQhuASUAFRUArkElMBbBAfxeQRSgggExAGZBASxeASUARQEAWkDtdCIBFQEOQQDsoRTcFgDlAO5BJMgOAQEA0RUAASUAAkEwyM0k5E0UgHIBMQBOQPVgAQEEGgDtAEUlAC7BAAAWAQEAZRUAskEBeLoA9QCOwQH8PgEBAL5BASTdFMCCAQEAZkEkuLkw2CYBJQAVFQDCQSTsZRSMAgExAKpBANAiASUAhQEAJkDlYFoBFQESQQDwVgDlAF5BFLC1JMguAQEAqkEw/C4BJQA5FQC6QSTgygExAAJBFGDCASUAGkEA/JoBAQBVFQC6wQAAakEFkgQ6wQH9WkEQ/HoBBQBqQSSYyTUwFgERAAElAOJBJQCiATUAHkEQxIkFBGYBJQBdBQBZEQAqQP15KQUYxRD01gEFABpBJMB6AREAkkE1ADoBJQBU/QB2QST0fRDUEgE1AOZBBPRGASUAkQUAGkD1fCYBEQDGQQToMsEAAJ5BEPDqAQUAIkEkwGoBEQBSQTUkFsEB/CIBJQDKQSUQdgE1AAJBEQStBRgOAPUAgSUAIQUAcREAAkDxfKkE2PEROLYBBQBSQSTAWgDxAEZBNTQCAREALSUA1kEk+HIBNQACQOkgKRDsXgDpADZBBMweAREAQSUAOQUAekCxaADhgOUJHJrBAAByQSCcngEJAD5BLOi6ASEAAkFBLBIBLQBiwQH8nkEs7OEg8A4BQQCSQQkADgCxACThACktAIUJAAJA3ZgkrXAOASEA3kEI4NkgyLIBCQAWwQAAPkEtANFBOB4BIQBhLQBawQH8fkEtIAIA3QBqQSDQIgFBAACtAHJBCRRuAS0AZkDZpBipaC4BIQBNCQCKQQjQ1SDslgEJAHpBLQy2ASEARkFBNFYBLQC2QS0U9gFBACZBIRClCPhKAS0AANkAPKkAdQkAIkDV3AIBIQAWQKWcuQjYYsEAAKpBIQSWAQkATkEtALbBAfwiASEADkFBLCIA1QAhLQC0pQAiQS0g1gFBAEJBIJRJCPgszZAYnWgiASEALQkADS0CBBTNAKidAFpBSXABGTwhJSQBNTwslXjmwQABCkCxKJIAlQEuQMUoPsEB/BIBSQApNQAYsQCMxQABJQAmQNVEbgEZAHDVAKJA4SF49USSAOEAWPUAZkE1kBEFeAElGSIBBQAlJQBVNQIF/kEZZBFJYKoBSQA9GQDSQUGIERF0AKVcQSUUJsEAAOpAsTUKAKUAWkDFFF7BAfwmAUEAHSUAELEAckDVTA4AxQABEQB41QDKQOEhOPVUMgDhAJD1AI5BJVgM9XV2APUASSUCBOZBLTAA/TxyAP0AKS0BOsEAAA5BETQBNZQAgWQZIQwBBQWWAIEAAkCxUJoAsQB+wQH8bgE1AH0hAA0RAA0FABpA4Tmw3VwOAOEBekERNAFBVBkhIAE1LAIA3QAmQNlhRgDZAHJA1Zm80WhCANUBOkDNSEoA0QGGwQAAAkDJYEIAzQFyQMU8AsEB/FIAyQD1IQByQMEoFgDFAC01ADERADVBAQ5AvTx+AMEBDkC5EA0xVAEJCDUg+CoAvQGCQLEkngEJABi5AGUhAJJArQw+ATEAFLEBLK0AOkCxHVoAsQDaQUlwAsEAAAJBGUwpJQQRNSAglU2EsRBGAJUA0UkAEsEB/A4BNQBFJQBKQMUgEgEZAJCxANzFACJA1WDWANUA7kDo7KIA6QD+QQVoGPUUFNVk7gDVAPj1ACEFAgUKQRk8DOkgigEZAFDpAK7BAAASQRFoFOFMIKUEDPUFAgD1AF5AsPh+AOEAKKUAtsEB/AJAxPACAREAZLEAhMUAZkDVIKIA1QDSQOCkygDhAI5A9WAoxUj2AMUA7PUCBQJA/TAgzNSWAM0AGP0A9sEAAA5AgKhNBVws1UQY8N2eANUALkCxCA4AgQCEsQAw8QAWwQH8sgEFAK5A4SW6AOEAHkDdRZoA3QBGQOD0AREwQPDcEQTwDsEAAAJA2SXSANkAJkDVYN7BAfzOANUALkDRHX4A0QASQM0dDsEAAJYAzQAiQMkJtMTwLgDJAMrBAfyqAMUAUkDAsDYA8QANBQChEQAM4QD8wQACQLzFUgC9AI5AuKABARg42LAM8IhywQABlkCwzDYAuQGssQAWwQH8GkCspAIA8QCk2QAtAQBorQCKQLDSBG4AsQAmQJTAesEAADJBBSAQ9IwQ1OU6AJUAKkCwxA4A1QF2wQH8NkDE+DIAsQCMxQAk9QCGQNU1agDVAAJA4QVs2SRGAOEAdNkAvkDVUCD1TJLBAACSAQUAMkDM8CIA1QECQMUMbgDNACbBAfwWAMUA7kDAyMIA9QBuQLjQcgDBAKpBBUAUtPzWAQUAqLkADsEAABpAsTwhEWgBCQgOALUADkDxYBT8/Yi5ENYAsQBiQMEkEgC5AC7BAfxiAREALQkAVP0ADPEALkDFGDYAwQDaQM0cbgDFAIpA1XRiAM0AWNUAfkDZOQDdNFoA2QA6QOEASgDdAKpA5RxKAOEAfkDpCBIA5QCY6QCWQO0U8PEwSgDtAG5A9SCyAPEARPUAAkD5TPj9VJLBAAAuAPkAokCU1EEFRKYA/QGqQLDYMgCVASrBAfxSALEAAkDE4MoAxQC+QNVNcODwEgDVAZpA2RBGAOEA7NkAekD1NCDVPNYBBQA41QBGQM0BOMTwIgDNAHTFAL5AwOU4uNheAMEAyPUADkEFMIYAuQACQLR0xgEFACS1AMJAsSwBESAU8QgA/OAVCNxywQABykC0dHYAsQACQLjwfgC1AK7BAfwyALkAAkDA9PYAwQANCQAtEQACQMToAgD9ATDxABzFADpAzKS2AM0AckDU0LIA1QACQNko+NzwQgDZACZA4NxGAN0AvkDk+EIA4QCA5QAeQOkEwgDpAJJA7QDs8SByAO0AhkD1BGoA8QBA9QBmQPkZMP0YVsEAAAIA+QCSQJTNSgD9AAJBBPV+AJUAesEB/HJA1RzSANUAckDE3J4BBQCUxQAqQLDhrNUoYgCxAEjVAFZA4NjCAOEAIkD01T0E2JoA9QB9BQACQODtZNUoAgDhAKDVAGZAxLDKAMUALkCwxNIAsQAuQOEE4gDhAA5A9PUOAPUAJkEErQkQrJYBBQBiQPUkPgERAN5A4MxeAPUAnkDVCGIA4QBc1QACQMTQ0gDFAF5A9RDdBMQuAPUAxkEQ6DoBBQDeQSS8kgERABZBBOwCASUAqkD06FIBBQCGQOC8tgD1ACJA1ViiANUANOEAakEE5LEQ3GYBBQBaQSS4ogERADZBNPzBEQA6ATUAKSUAukEEtEIBEQCFBQACQPTw2ODUDgD1AJDhAI5BEQSuAREAFkEk3OoBJQAOQTTRBUDIsgE1ADlBAA5BJPjdEMhGASUAnkEEpBYBEQChBQAqQPSkrgD1AA5BJPjJNMgeASUA7kFA7BoBNQDCQVTUmgFVAAFBAAJBNPDJJPCKATUATkEQ0N0E2DIBJQBpBQAeQTUwIgERAKpBQPiKATUALkFU4NllDEoBQQB9ZQAuQUFAAgFVAOJBNNAOAUEA4kElAG4BNQCSQRDIVUEgggElAK5BVRRCAUEA4kFlCCYBEQClVQCGQXDgcgFlACVxAWJBhWgZQQABVTAVNLgBJJByAVUARYUAATUAJSUARUECEKpBVVQBJRgBQSQRETgVNRgA9IwBBJHSAREAyVUAATUARQUAJUEADPUAuSUCBdpBJVAA9SgBERQVBUws4NUaAOEAAQUALPUAJREAUSUCDQ5BBTwA9QwA4QgMsUgQ1XQMxOYFRgDFAXEFAADVASyxAAzhADz1AhAiQMU4JGWQAJVqHVYAlQIZoGUAnMUCBHbBAAIU+QACLWv8vAA==',
            },
            {
                name: 'The EnterTainer',
                data: 'data:audio/midi;base64,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',
            },
            {
                name: 'Tchaikovsky - Waltz of the Flowers',
                data: 'data:audio/midi;base64,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',
            },
            {
                name: 'Granados - Oriental',
                data: 'data:audio/midi;base64,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',
            },
            {
                name: 'Tchaikovsky - Arabian Dance',
                data: 'data:audio/midi;base64,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'
            }
        ];
        /**
         * create MIDI Stream
         */
        this.stream = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (source) {
            _this.source = source;
        }).share();
        this.stream.subscribe();
        /**
         * set up knobs and defaults
         */
        for (var i = 1; i < 9; i++) {
            // knobs are default 0.5
            var knobName = 'R' + i;
            this.knobs[knobName] = 0.5;
            // toggles are default OFF
            var toggleName = 'B' + i;
            this.toggles[toggleName] = false;
        }
        /**
         * get MIDI Keyboard
         */
        var nav = navigator;
        if (nav.requestMIDIAccess) {
            nav.requestMIDIAccess({
                sysex: false
            }).then(this.onMIDISuccess, this.onMIDIFailure);
        }
        else {
            alert('no midi support, sorry');
        }
        /**
         * create MIDI Player
         */
        MIDI.loader = new sketch.ui.Timer;
        MIDI.loadPlugin({
            soundfontUrl: '/assets/soundfont/',
            onprogress: function (state, progress) {
                MIDI.loader.setValue(progress * 100);
            },
            onsuccess: function () {
                /// player setup
                _this.player = MIDI.Player;
                // player speed
                _this.player.timeWarp = 1;
                // load song and do nothing
                _this.player.loadFile(_this.songList[0].data, function () {
                    console.log('song loaded');
                });
                // listen to player events
                _this.player.addListener(function (data) {
                    // let now = data.now; // where we are now
                    // let end = data.end; // time when song ends
                    // let channel = data.channel; // channel note is playing on
                    var message = data.message; // 128 is noteOff, 144 is noteOn
                    var note = data.note; // the note
                    var velocity = data.velocity; // the velocity of the note
                    if (message === 144) {
                        _this.downCount++;
                    }
                    // stream the event
                    _this.streamMessage({ data: [message, note, velocity] });
                });
            }
        });
    }
    /**
     * loads then play a given song
     * @param song
     */
    MIDIService.prototype.playSong = function (song) {
        var _this = this;
        console.log('play', song.name);
        this.player.loadFile(song.data, function () {
            console.log('song loaded');
            _this.player.start();
        });
    };
    /**
     * Play a sound on the Web-Midi thing
     *
     * @param channel The MIDI channel
     * @param key the MIDI key
     * @param velocityDecimal the velocity between 0 and 1
     */
    MIDIService.prototype.soundNote = function (channel, key, velocityDecimal) {
        MIDI.noteOn(0, key, velocityDecimal * 127, 0);
    };
    /**
     * Send a 'note-off' signal to our midi js setup
     * @param channel
     * @param key
     * @param velocityDecimal
     */
    MIDIService.prototype.stopNote = function (channel, key, velocityDecimal) {
        MIDI.noteOff(0, key, velocityDecimal);
    };
    return MIDIService;
}());
MIDIService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], MIDIService);

//# sourceMappingURL=midi.service.js.map

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnimationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnimationService = (function () {
    function AnimationService() {
        var _this = this;
        this.EasingFunctions = {
            // no easing, no acceleration
            linear: function (t) { return t; },
            // accelerating from zero velocity
            easeInQuad: function (t) { return t * t; },
            // decelerating to zero velocity
            easeOutQuad: function (t) { return t * (2 - t); },
            // acceleration until halfway, then deceleration
            easeInOutQuad: function (t) { return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t; },
            // accelerating from zero velocity
            easeInCubic: function (t) { return t * t * t; },
            // decelerating to zero velocity
            easeOutCubic: function (t) { return (--t) * t * t + 1; },
            // acceleration until halfway, then deceleration
            easeInOutCubic: function (t) { return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1; },
            // accelerating from zero velocity
            easeInQuart: function (t) { return t * t * t * t; },
            // decelerating to zero velocity
            //easeOutQuart: function (t) { return 1 - (--t) * t * t * t },
            // acceleration until halfway, then deceleration
            //easeInOutQuart: function (t) { return t < .5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t },
            // accelerating from zero velocity
            easeInQuint: function (t) { return t * t * t * t * t; },
            // decelerating to zero velocity
            easeOutQuint: function (t) { return 1 + (--t) * t * t * t * t; },
            // acceleration until halfway, then deceleration
            easeInOutQuint: function (t) { return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * (--t) * t * t * t * t; },
            bounce: function (t) {
                var p = 0.3;
                return Math.pow(2, -10 * t) * Math.sin((t - p / 4) * (2 * Math.PI) / p) + 1;
            },
        };
        this.beforeRenderStream = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (source) {
            _this.beforeRenderSource = source;
        }).share();
        console.log('animation service constructed', this.beforeRenderSource);
        // if nobody subscribe, the above does not work
        this.beforeRenderStream.subscribe();
    }
    // replace with reactvie version
    AnimationService.prototype.animateValue = function (easing, durationMS, from, to, obj, key, whendone) {
        var _this = this;
        var start = new Date().getTime();
        var end = start + durationMS;
        var step = function () {
            var now = new Date().getTime();
            var progress;
            if (now > end) {
                progress = 1;
            }
            else {
                progress = (now - start) / durationMS; // percent as decimal
            }
            // now you know how much progress you've made. use this to calculate position!
            var easingProgress = _this.EasingFunctions[easing](progress);
            var delta = to - from;
            // set current
            var currentVal = (delta * easingProgress) + from;
            // this works, we are now manipulating the object directly
            obj[key] = currentVal;
            // call yourself
            if (progress < 1) {
                requestAnimationFrame(step);
            }
            else {
                if (whendone) {
                    whendone();
                }
            }
        };
        step();
    };
    /** observable easing functions! */
    AnimationService.prototype.animateEasing = function (easing, durationMS) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (stream) {
            var start = new Date().getTime();
            var end = start + durationMS;
            var step = function () {
                var now = new Date().getTime();
                var progress;
                if (now > end) {
                    progress = 1;
                }
                else {
                    progress = (now - start) / durationMS; // percent as decimal
                }
                // now you know how much progress you've made. use this to calculate position!
                var easingProgress = _this.EasingFunctions[easing](progress);
                stream.next(easingProgress);
                // call yourself
                if (progress < 1) {
                    requestAnimationFrame(step);
                }
            };
            step();
        }).share();
    };
    return AnimationService;
}());
AnimationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AnimationService);

//# sourceMappingURL=animation.service.js.map

/***/ }),

/***/ 507:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);


/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_three__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_orbit_controls_es6__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Show; });


/**
 * The base class for any show!
 *
 * provides space, lights, camera, etc
 */
var Show = (function () {
    function Show() {
        // lights
        this.lights = {};
        console.log('show constructed');
    }
    Show.prototype.setupShow = function (midi, element) {
        console.log('show setup with', midi);
        this.midi = midi;
        this.el = element;
        this.scene = new __WEBPACK_IMPORTED_MODULE_0_three__["Scene"]();
        this.renderer = new __WEBPACK_IMPORTED_MODULE_0_three__["WebGLRenderer"]({ alpha: false, antialias: true });
        this.renderer.shadowMapEnabled = true;
        this.renderer.shadowMapType = __WEBPACK_IMPORTED_MODULE_0_three__["PCFSoftShadowMap"];
        this.renderer.setSize(this.el.scrollWidth, this.el.scrollHeight);
        this.renderer.shadowMap.enabled = true;
        element.appendChild(this.renderer.domElement);
        this.camera = new __WEBPACK_IMPORTED_MODULE_0_three__["PerspectiveCamera"](75, this.el.scrollWidth / this.el.scrollHeight, 1, 10000);
        //this.camera = new OrthographicCamera(100, 100, 100, 100)
        this.camera.position.z = 5;
        // controls
        this.controls = new __WEBPACK_IMPORTED_MODULE_1_orbit_controls_es6__["a" /* default */](this.camera, this.renderer.domElement);
        this.controls.enabled = true;
        this.controls.autoRotate = true;
        this.controls.maxDistance = 1500;
        this.controls.minDistance = 0;
        this.controls.autoRotate = false;
        this.controls.noZoom = false;
        // lights
        this.ambient = new __WEBPACK_IMPORTED_MODULE_0_three__["AmbientLight"](0xffab12);
        this.scene.add(this.ambient);
        this.directional = new __WEBPACK_IMPORTED_MODULE_0_three__["DirectionalLight"](0xFFFFFF, 0.5);
        this.directional.position.set(2, 2, 7);
        this.directional.target.position.set(0, 0, 0);
        this.directional.castShadow = true;
        this.directional.shadow.radius = 0.5;
        this.directional.shadow.camera.visible = true;
        this.directional.shadowCameraNear = 3;
        this.directional.shadowCameraFar = 9;
        // try some bindings
        this.directional.shadowBias = 0.0001;
        this.directional.shadowMapWidth = 2048;
        this.directional.shadowMapHeight = 2048;
        this.scene.add(this.directional);
        // spotlight
        this.spot = new __WEBPACK_IMPORTED_MODULE_0_three__["SpotLight"]();
        this.spot.castShadow = true;
        this.spot.position.x = -1;
        this.spot.position.y = 1;
        this.spot.position.z = 3;
        var shadow = this.spot.shadow;
        this.lights.spot = this.spot;
        //this.scene.add(this.spot)
        var spotLightHelper = new __WEBPACK_IMPORTED_MODULE_0_three__["SpotLightHelper"](this.spot);
        //this.scene.add( spotLightHelper )
        // ambient
        this.ambient = new __WEBPACK_IMPORTED_MODULE_0_three__["AmbientLight"](0xffffff);
        this.ambient.intensity = 0.2;
        this.scene.add(this.ambient);
        var helper = new __WEBPACK_IMPORTED_MODULE_0_three__["DirectionalLightHelper"](this.directional);
        var camHelper = new __WEBPACK_IMPORTED_MODULE_0_three__["CameraHelper"](this.directional.shadow.camera);
        // this.scene.add(helper)
        //this.scene.add(camHelper)
    };
    return Show;
}());

//# sourceMappingURL=show.js.map

/***/ })

},[507]);
//# sourceMappingURL=main.bundle.js.map