import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import Typed from 'typed.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  imports:[CommonModule]
})
export class DashboardComponent {

  constructor(private router: Router) {}

  // List of pages for navigation tiles
  pages = [
    { name: "Projects", link: "/projects", icon: "fas fa-code" },
    { name: "Experience", link: "/experience", icon: "fas fa-briefcase" },
    { name: "Education", link: "/education", icon: "fas fa-graduation-cap" },
    { name: "Certificates", link: "/certificates", icon: "fas fa-award" },
    { name: "Vision", link: "/vision", icon: "fas fa-lightbulb" },
    { name: "Distribution", link: "/distribution", icon: "fas fa-globe" }
  ];

  navigateTo(path: string): void {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
    this.initTypedText();
    this.initAnimations();
  }

  initTypedText(): void {
    const options = {
      strings: ["I am a .NET & Angular Developer", "Building Scalable Web Apps", "Expert in SQL, .NET Core, and Angular"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    };
    new Typed('.typed-text', options);
  }

  initAnimations(): void {
    gsap.from('.hero-title', { duration: 1, opacity: 0, y: -20, ease: 'power3.out' });
    gsap.from('.hero-icons img', { duration: 1, opacity: 0, scale: 0.8, stagger: 0.3, delay: 1 });
    gsap.from('.dashboard-tile', { duration: 1, opacity: 0, y: 20, stagger: 0.2, delay: 1.5 });
  }
}
