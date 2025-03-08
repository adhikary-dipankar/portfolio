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
    { name: "QR Code Generator", description: "Dynamic QR code generator in Angular.", url: "https://github.com/dipankaradhikary/qr-code-generator" },
    { name: "Receipt Generato", description: "Dynamic Receipt generator in Angular.", url: "https://github.com/dipankaradhikary/qr-code-generator" },
    { name: "Orders Management", description: "Dynamic Order taking and give suggestions in Angular.", url: "https://github.com/dipankaradhikary/qr-code-generator" }

  ];

  selectedLocation: any = null;

  showDetails(location: any) {
    this.selectedLocation = location;
  }
}
