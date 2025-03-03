import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { gsap } from 'gsap';
import AOS from 'aos';

@Component({
  selector: 'app-projects',
  standalone: true,
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [CommonModule]
})
export class ProjectsComponent implements OnInit {
  projects = [
    { 
      title: 'AI Mock Test Platform', 
      description: 'AI-powered platform for mock tests and competitive exam preparation.',
      icon: 'fas fa-robot',
      image: 'assets/projects/ai-mock.png',
      details: 'Built using Angular, .NET Core, and MongoDB. Features AI-generated questions, real-time scoring, and user analytics.',
      github: 'https://github.com/dipankaradhikary/ai-mock-test',
      liveDemo: 'https://ai-mock-test.live'
    },
    { 
      title: 'Receipt Designer', 
      description: 'A tool for designing business receipts and invoices.',
      icon: 'fas fa-file-invoice',
      image: 'assets/projects/receipt-designer.png',
      details: 'Developed with Angular and HTML2Canvas. Allows users to customize invoices and export them as PDF, DOCX, or images.',
      github: 'https://github.com/dipankaradhikary/receipt-designer',
      liveDemo: 'https://receipt-designer.live'
    },
    { 
      title: 'Grammar Learning App', 
      description: 'English grammar lessons with interactive quizzes.',
      icon: 'fas fa-book-open',
      image: 'assets/projects/grammar-app.png',
      details: 'Built using Angular and Firebase, offering quizzes, progress tracking, and gamified learning experience.',
      github: 'https://github.com/dipankaradhikary/grammar-app',
      liveDemo: 'https://grammar-app.live'
    },
    { 
      title: 'QR Code Generator', 
      description: 'Generate customizable QR codes with unique designs.',
      icon: 'fas fa-qrcode',
      image: 'assets/projects/qr-code.png',
      details: 'Developed with Angular and local storage. Users can create and download QR codes with custom colors and styles.',
      github: 'https://github.com/dipankaradhikary/qr-code-generator',
      liveDemo: 'https://qr-code-generator.live'
    }
  ];

  selectedProject: any = null;

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }

  openProjectPopup(project: any): void {
    this.selectedProject = project;
    document.body.style.overflow = 'hidden'; // Disable scrolling when popup opens
  }

  closeProjectPopup(): void {
    this.selectedProject = null;
    document.body.style.overflow = ''; // Re-enable scrolling
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Escape') {
      this.closeProjectPopup();
    }
  }
}
