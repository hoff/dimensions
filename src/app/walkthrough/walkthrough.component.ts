import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  ChangeDetectionStrategy
} from "@angular/core";
import { Show } from "../show";
import { MIDIService } from "../midi.service";
import { AnimationService } from "../animation.service";

import * as THREE from "three";

import { Observable } from "rxjs/Observable";

const COLORS = {
  A: { h: 56 / 360, s: 1.0, l: 0.6 }, // yellow
  "A#": { h: (56 + 323) / 2, s: 0.99, l: 0.6 }, // 'brown',
  B: { h: 323 / 350, s: 0.96, l: 0.6 }, // 'pink',
  C: { h: 0.44, s: 0.96, l: 0.6 }, // 'white',
  "C#": { h: 0.44, s: 0.96, l: 0.6 }, // 'dunno',
  D: { h: 39 / 360, s: 1, l: 0.6 }, // 'orange',
  "D#": { h: 0.24, s: 0.5, l: 0.8 }, // 'dunno',
  E: { h: 112 / 360, s: 0.65, l: 0.6 }, // 'green',
  F: { h: 226 / 360, s: 1, l: 0.8 }, // 'blue',
  "F#": { h: 266 / 360, s: 0.65, l: 0.6 }, // 'violet',
  G: { h: 350 / 360, s: 1, l: 0.6 }, // 'red',
  "G#": { h: 0, s: 0.36, l: 0.6 } // brown,
};
const NOTES = [
  "f",
  "f#",
  "g",
  "g#",
  "a",
  "a#",
  "b",
  "c",
  "c#",
  "d",
  "d#",
  "e",
  "f",
  "f#",
  "g",
  "g#",
  "a",
  "a#",
  "b",
  "c",
  "c#",
  "d",
  "d#",
  "e",
  "f",
  "f#",
  "g",
  "g#",
  "a",
  "a#",
  "b",
  "c",
  "c#",
  "d",
  "d#",
  "e",
  "f",
  "f#"
];

@Component({
  selector: "app-walkthrough",
  templateUrl: "./walkthrough.component.html",
  styleUrls: ["./walkthrough.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WalkthroughComponent implements OnInit {
  frame = 0;
  show: Show;
  @ViewChild("container") container: ElementRef;

  constructor(public midi: MIDIService, public animation: AnimationService) {
    this.show = new Show();

    let map = {
      Digit1: "B1",
      Digit2: "B2",
      Digit3: "B3",
      Digit4: "B4",
      Digit5: "B5",
      Digit6: "B6"
    };
    let jo = Observable.fromEvent(window, "keydown").subscribe((event: any) => {
      let outKey = map[event.code];
      if (!outKey) {
        return;
      }
      this.midi.source.next({
        keyName: outKey,
        control: "tastatur",
        name: "keydown",
        key: 0
      });
    });
  }

  ngOnInit() {
    this.show.setupShow(this.midi, this.container.nativeElement);

    // create a box for each midi key!
    for (let i = 22; i < 77; i++) {
      // let box = new Box(this.animation, this.show.scene, i)
    }
    // kick off rendering
    this.animate();

    this.animation.beforeRenderStream.subscribe(() => {});

    // create wave parts
    /* for (let i = 0; i <= 360; i += 10) {
      new WaveElement(i, this.show.scene, this.midi, this.animation)
    } */
    
    // Main guy!

    for (let i = 0; i < 37; i++) {
      let frequency = Math.pow(2, i / 12);
      new Wave(frequency, this.show.scene, this.midi, this.animation, new THREE.Color(), i);
    }

    // ruler
    let rulerWidth = 20
    let rulerHeight = 0.03
    let geo = new THREE.BoxGeometry(rulerWidth, rulerHeight, 0.1)
    let mat = new THREE.MeshPhongMaterial()
    let box = new THREE.Mesh(geo, mat)
    box.position.y = rulerHeight / -2
    this.show.scene.add(box)

    
  }

  animate = () => {
    // push a message down the before render stream
    this.frame += 1;
    this.animation.beforeRenderSource.next(this.frame);

    // render
    this.show.renderer.render(this.show.scene, this.show.camera);

    // repeat!
    requestAnimationFrame(this.animate);
  };
}

class Box {
  herz = 1; // one cycle per second
  mesh: THREE.Mesh;

  xPosition: number;
  frequency: number;

  constructor(
    public animation: AnimationService,
    public scene: THREE.Scene,
    public midiNumber: number
  ) {
    let mat = new THREE.MeshPhongMaterial();
    let geo = new THREE.BoxGeometry(0.1, 0.1, 0.1);
    this.mesh = new THREE.Mesh(geo, mat);

    let exponent = (this.midiNumber - 21) / 12;
    this.frequency = 27.5 * Math.pow(2, exponent);

    this.xPosition = Math.log2(this.frequency);

    this.scene.add(this.mesh);
    this.animation.beforeRenderStream.subscribe(frame => {
      this.updatePosition(frame);
    });
  }

  updatePosition(frame: number) {
    // move 1 / 60th of the say, sine style.
    this.mesh.position.set(
      this.xPosition,
      0.01 * Math.sin(frame * (this.frequency * 0.001)),
      0
    );
  }
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

class Wave {
  names = ["F", "F#", "G", "G#", "A", "A#", "B", "C", "C#", "D", "D#", "E"];
  name: string;
  // is key down?
  down = false;

  barX: number;
  stick: THREE.Mesh;

  particleGroup = new THREE.Object3D();
  public measured = false;
  public barHeight: number;
  public barWidth = 0.092;
  public targetHeight = 1;
  constructor(
    public frequency: number,
    public scene: THREE.Scene,
    public midi: MIDIService,
    public animation: AnimationService,
    public color: THREE.Color = new THREE.Color(),
    public fromF0: number
  ) {
    this.barX = this.fromF0 / 10; // this factor determines how big the keyboard goes
    this.barHeight = 2 / this.frequency;
    // this.setup()
    this.name = this.names[this.fromF0 % 12];
    this.makeParticles();
    if (this.name.length === 1) {
      // this.measure()
      // this.growShrink()
    }
    // subscibe to 'same note measuring'
    this.animation.measureSubject.subscribe(noteName => {
      if (this.name === noteName) {
        this.measure()
      }
    }) 
  }

  takeColor() {
    if (!this.measured) { return }
    let colorHSL = COLORS[this.name];
    let anymat: any = this.stick.material
    anymat.color.setHSL( colorHSL.h, colorHSL.s, colorHSL.l )
  }

  loseColor() {
    // todo
    if (!this.measured) { return }
    // white
    let anymat: any = this.stick.material
    if (this.name.length === 1) {
      anymat.color.setHSL( 0, 0, 0.9 )
    } else {
      anymat.color.setHSL( 0, 0, 0.2 )      
    }
    
  }

  // show wave, hide wave, measure wave.
  measure() {
    if (this.measured) {
      return;
    }
    // x position of bar: record it
    let mat = new THREE.MeshPhongMaterial();
    let colorHSL = COLORS[this.name];
    // mat.color.setHSL( colorHSL.h, colorHSL.s, colorHSL.l )

    // black if black!
    if (this.name.length > 1) {
      mat.color.setHSL(0, 0, 0.1);
    }

    let geo = new THREE.BoxGeometry(this.barWidth, this.barHeight, 0.01);
    this.stick = new THREE.Mesh(geo, mat);
    this.stick.position.x = 0; // initial zero for measuring
    this.stick.position.y = this.barHeight / 2;
    this.scene.add(this.stick);

    // slide in from the left!
    this.animateToX(this.stick, 0, this.barX + 1, 50);
  }

  growShrink() {
    if (!this.measured) {
      return;
    }
    let yFactorTarget = this.targetHeight / this.barHeight;

    let scaleDistance = 1 - yFactorTarget;
    this.animation
      .animateEasing("linear", 1000)
      .subscribe((percentDecimal: any) => {
        //let newYScale =  yFactorTarget * percentDecimal

        let newYScale = 1 - scaleDistance * percentDecimal;

        this.stick.scale.setY(newYScale);
        // what is your actual height
        let actualHeight = this.barHeight * newYScale;
        this.stick.position.y = actualHeight / 2;
      });
  }

  layout() {
    console.log("layout!");
    if (!this.measured) {
      return;
    }
    // figure out how much to move left.
    let leftNotes = NOTES.slice(0, this.fromF0);
    let blacksBefore = leftNotes.filter(note => note.length > 1).length;
    // todo: animate
    let newX = this.barX - blacksBefore * this.barWidth + 1;

    // if you are black, move half further
    if (this.name.length > 1) {
      newX -= this.barWidth / 2;
      this.stick.position.setZ(this.barWidth / 2); // move black to front
      this.stick.scale.setX(0.6);
      this.stick.scale.setY(this.stick.scale.y / 2); // half the height. todo: move up!
    }
    // animate x position
    let startingX = this.stick.position.x;
    let distance = startingX - newX;
    this.animation.animateEasing("linear", 1000).subscribe((dec: number) => {
      let nextX = startingX - distance * dec;
      this.stick.position.setX(nextX);
    });
    // this.stick.position.setX(newX)

    // give volume
    this.stick.scale.setZ(3);
  }

  animateToX(object, fromX: number, toX: number, cycles: number) {
    let distance = toX - fromX;
    let cycle = 0;

    let animate = () => {
      window.requestAnimationFrame(() => {
        cycle += 1;
        distance = toX - fromX;
        let percent = cycle / cycles;
        let newX = fromX + distance * cycle / cycles;
        object.position.x = newX;
        if (percent <= 1) {
          animate();
        } else {
          this.measured = true;
          console.log("measured!");
        }
      });
    };
    animate();
  }

  makeParticles() {
    let particleCount = 200;
    for (let i = 0; i < particleCount; i++) {
      let positionPercent = i / particleCount;

      let particle = new Particle({
        hertz: this.frequency,
        positionDecimal: positionPercent,
        amplitude: 1 / this.frequency,
        animation: this.animation,
        scene: this.scene,
        color: COLORS[this.name]
      });
      this.particleGroup.add(particle.particle, particle.backParticle);
    }
    // hidden particles initially
    this.particleGroup.visible = false;
    this.scene.add(this.particleGroup);
    this.midi.stream
      .filter(msg => msg.key === 41 + this.fromF0)
      .subscribe(msg => {
        if (msg.name === "keydown") {
          this.showParticles();
          this.takeColor()
          this.down = true;
        }
        if (msg.name === "keyup") {
          this.hideParticle();
          this.down = false;
          this.loseColor()
        }
      });
    this.midi.stream.filter(msg => msg.keyName === "B1").subscribe(msg => {
      if (this.down) {
        this.measure();
        // broadcast to others of the same key!
        // this.animation.measureSubject.next(this.name)
      }
    });
    this.midi.stream.filter(msg => msg.keyName === "B2").subscribe(msg => {
      if (this.down) {
        this.growShrink();
      }
    });

    // mesasure all
    this.midi.stream.filter(msg => msg.keyName === "B5").subscribe(msg => {
      this.measure();
    });
    // grow shrink all
    this.midi.stream.filter(msg => msg.keyName === "B6").subscribe(msg => {
      this.growShrink();
    });

    // B3 layout!
    this.midi.stream.filter(msg => msg.keyName === "B3").subscribe(msg => {
      this.layout();
    });
  }

  

  log() {
    console.log(
      "wave here",
      this.name,
      "frequency",
      this.frequency,
      "from f0:",
      this.fromF0
    );
  }

  showParticles() {
    this.log();
    this.particleGroup.visible = true;
  }
  hideParticle() {
    this.particleGroup.visible = false;
  }
}

class WaveElement {
  mesh: THREE.Mesh;
  maxDisplacement: number;
  constructor(
    public degree: number,
    public scene: THREE.Scene,
    public midi: MIDIService,
    public animation: AnimationService,
    public position: number,
    public color: THREE.Color = new THREE.Color("white")
  ) {
    this.setup();
  }

  setup() {
    let mat = new THREE.MeshPhongMaterial();
    mat.color = this.color;
    let geo = new THREE.BoxGeometry(0.9, 0.3, 1);
    this.mesh = new THREE.Mesh(geo, mat);

    // x is based on position
    this.mesh.position.x = this.position - 18;

    // max displacement depends on your degree, which is passed
    this.maxDisplacement = Math.sin(toRadians(this.degree)) * 6; // this factor should also depend on wave frequency.

    this.scene.add(this.mesh);

    // static for now
    // this.mesh.position.y = this.maxDisplacement

    this.animation.beforeRenderStream.subscribe(frame => {
      let newY = this.maxDisplacement * Math.sin(frame / 10);
      
      // static version
      // newY = this.maxDisplacement
      this.mesh.position.y = newY;
    });
  }
}

interface ParticleOptions {
  hertz: number;
  positionDecimal: number;
  amplitude: number;
  animation: AnimationService;
  scene: THREE.Scene;

  color: { h: number; s: number; l: number };
}

class Particle {
  // services
  animation: AnimationService;
  scene: THREE.Scene;

  hertz: number; // frequency in herz
  positionDecimal: number; // how far into the wave is your position, between 0 and 1
  amplitude: number; // maximum extension of the wave

  // degree: your position on the wave
  degree: number;

  // max displacement
  maxDisplacement: number;
  minDisplacement: number;

  particle;
  backParticle;

  constructor(particleOptions: ParticleOptions) {
    this.animation = particleOptions.animation;
    this.scene = particleOptions.scene;
    this.hertz = particleOptions.hertz;
    this.positionDecimal = particleOptions.positionDecimal;
    this.amplitude = particleOptions.amplitude;

    let maxDegree = 180 * this.hertz; // how many sin bumps do we make along the way
    this.degree = this.positionDecimal * maxDegree;

    this.maxDisplacement = Math.sin(toRadians(this.degree)) * this.amplitude;
    this.minDisplacement =
      Math.sin(toRadians(this.degree - 180)) * this.amplitude;

    // make particle!
    let geometry = new THREE.Geometry();
    let material = new THREE.PointsMaterial({ size: 5 });
    material.color.setHSL(
      particleOptions.color.h,
      particleOptions.color.s,
      particleOptions.color.l
    );
    this.particle = new THREE.Points(geometry, material);

    let mat = new THREE.MeshBasicMaterial();
    mat.color.setHSL(
      particleOptions.color.h,
      particleOptions.color.s,
      particleOptions.color.l
    );
    let geo = new THREE.BoxGeometry(0.01, 0.01, 0.01);
    this.particle = new THREE.Mesh(geo, mat);
    this.backParticle = new THREE.Mesh(geo, mat);

    this.particle.position.y = this.positionDecimal * 2; // to meters up!
    this.backParticle.position.y = this.positionDecimal * 2; // two meters up max!

    this.animation.beforeRenderStream.subscribe(frame => {
      // calculate your new position, along x for now
      let newX = this.maxDisplacement * Math.sin(frame / 10); // improve frame

      // static version
      newX = this.maxDisplacement
      this.particle.position.x = newX;

      let backX = this.minDisplacement * Math.sin(frame / 10); // improve frame
      backX = this.maxDisplacement


      this.backParticle.position.x = backX;
    });
  }
}
