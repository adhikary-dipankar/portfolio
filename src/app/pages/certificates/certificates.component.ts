import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import AOS from 'aos';

@Component({
  selector: 'app-certificates',
  standalone: true,
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss'],
  imports: [CommonModule]
})
export class CertificatesComponent implements OnInit {
  certificates = [
    { 
      title: 'Microsoft Certified: Azure Fundamentals', 
      issuer: 'Microsoft', 
      year: 2024, 
      image: 'assets/certificates/azure.png',
      description: 'Azure cloud computing fundamentals covering cloud concepts, services, security, and compliance.',
      link: 'https://www.microsoft.com/learn/certification/azure-fundamentals'
    },
    { 
      title: 'AWS Certified Cloud Practitioner', 
      issuer: 'Amazon AWS', 
      year: 2023, 
      image: 'assets/certificates/aws.png',
      description: 'Introduction to AWS cloud architecture, services, billing, and security.',
      link: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
    },
    { 
      title: 'Google Associate Cloud Engineer', 
      issuer: 'Google Cloud', 
      year: 2023, 
      image: 'assets/certificates/google.png',
      description: 'Deploying applications, monitoring cloud resources, and managing cloud environments on Google Cloud.',
      link: 'https://cloud.google.com/certification/cloud-engineer'
    },
    { 
      title: 'Full-Stack Web Development', 
      issuer: 'Udemy', 
      year: 2022, 
      image: 'assets/certificates/fullstack.png',
      description: 'Comprehensive full-stack development using Angular, .NET, and SQL databases.',
      link: 'https://www.udemy.com/course/full-stack-web-development/'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    AOS.init();
  }
}
