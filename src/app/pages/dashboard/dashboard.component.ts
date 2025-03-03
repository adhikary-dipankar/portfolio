import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import Typed from 'typed.js';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private router: Router) {}  // ✅ Inject Router

  navigateToProjects(): void {
    this.router.navigate(['/projects']);  // ✅ Use the Router correctly
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
    gsap.from('.hero-description', { duration: 1, opacity: 0, y: 20, delay: 0.5, ease: 'power3.out' });
    gsap.from('.hero-icons img', { duration: 1, opacity: 0, scale: 0.8, stagger: 0.3, delay: 1 });
  }

  getImageUrl(imageName: string): string {
    return `${window.location.origin}/assets/icons/${imageName}`;
  }
  
}
