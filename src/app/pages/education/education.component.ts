import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class EducationComponent {
  milestones = [
    {
      year: '2015',
      title: 'High School',
      description: 'Completed high school with distinction in Science and Mathematics.',
      icon: 'fas fa-school',
      expanded: false
    },
    {
      year: '2017',
      title: 'Junior College',
      description: 'Specialized in Science and Mathematics with strong analytical skills.',
      icon: 'fas fa-book',
      expanded: false
    },
    {
      year: '2021',
      title: 'NIT Trichy - Chemical Engineering',
      description: 'Graduated with a minor in Computer Applications, worked on AI research.',
      icon: 'fas fa-graduation-cap',
      expanded: false
    },
    {
      year: '2023',
      title: 'PwC India - Associate',
      description: 'Started career as a Technology Consultant, specialized in .NET & Angular.',
      icon: 'fas fa-briefcase',
      expanded: false
    }
  ];
}
