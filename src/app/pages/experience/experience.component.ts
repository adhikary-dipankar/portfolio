import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-experience',
  standalone: true,
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss'],
  imports: [CommonModule]
})
export class ExperienceComponent implements OnInit {
  experiences = [
    { 
      title: 'Technology Consultant (Associate)', 
      company: 'PwC India', 
      period: 'July 2023 - Present', 
      description: 'Developing full-stack applications using .NET Core, Angular, and SQL. Implemented microservices-based architecture for enterprise clients.', 
      icon: 'fas fa-briefcase'
    },
    { 
      title: 'Software Developer Intern', 
      company: 'XYZ Solutions', 
      period: 'Jan 2023 - June 2023', 
      description: 'Built scalable APIs and enhanced UI/UX for e-commerce projects using Angular and .NET.', 
      icon: 'fas fa-code'
    },
    { 
      title: 'Freelance Developer', 
      company: 'Self-Employed', 
      period: '2021 - 2023', 
      description: 'Developed and deployed AI-powered web applications and educational platforms.', 
      icon: 'fas fa-laptop-code'
    },
    { 
      title: 'Freelance Developer', 
      company: 'Self-Employed', 
      period: '2021 - 2023', 
      description: 'Developed and deployed AI-powered web applications and educational platforms.', 
      icon: 'fas fa-laptop-code'
    },
    { 
      title: 'Freelance Developer', 
      company: 'Self-Employed', 
      period: '2021 - 2023', 
      description: 'Developed and deployed AI-powered web applications and educational platforms.', 
      icon: 'fas fa-laptop-code'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
