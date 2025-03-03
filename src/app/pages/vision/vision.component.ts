import { Component, OnInit } from '@angular/core';
import { tsParticles } from "@tsparticles/engine";

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {

  constructor() {}

  async ngOnInit() {
    await this.loadParticles();
  }

  async loadParticles() {
    tsParticles.load({
      id: "particles-js",
      options: {
        particles: {
          number: { value: 100 },
          shape: { type: "circle" },
          opacity: { value: 0.5 },
          size: { value: 3 },
          move: { speed: 2, direction: "none", random: false, straight: false }
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" }
          }
        }
      }
    });
  }
}
