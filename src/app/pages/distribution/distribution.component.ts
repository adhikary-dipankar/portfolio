import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-distribution',
  standalone: true,
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.scss'],
  imports: [CommonModule]
})
export class DistributionComponent {
  githubRepos = [
    { name: "Portfolio", description: "A futuristic portfolio in Angular & .NET", url: "https://github.com/dipankaradhikary/angular-portfolio" },
    { name: "AI Mock Test", description: "AI-powered competitive exam mock tests.", url: "https://github.com/dipankaradhikary/ai-mock-test" },
    { name: "QR Code Generator", description: "Dynamic QR code generator in Angular.", url: "https://github.com/dipankaradhikary/qr-code-generator" }
  ];

  locations = [
    { name: "India", top: "60%", left: "75%", description: "Major contributions from India." },
    { name: "USA", top: "30%", left: "40%", description: "Used by developers in the USA." },
    { name: "UK", top: "35%", left: "50%", description: "Collaborations with UK-based teams." }
  ];

  selectedLocation: any = null;

  showDetails(location: any) {
    this.selectedLocation = location;
  }
}
