import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

interface EducationMilestone {
  year: string;
  title: string;
  description: string;
  details: string;
  icon: string;
  expanded: boolean;
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
  imports:[CommonModule]
})
export class EducationComponent implements OnInit {
  milestones: EducationMilestone[] = [
    {
      year: '2015',
      title: 'High School',
      description: 'Completed high school with distinction.',
      details: 'Achieved high grades in science and mathematics. Participated in various extracurricular activities including robotics and coding competitions.',
      icon: 'fas fa-school',
      expanded: false
    },
    {
      year: '2017',
      title: 'Junior College',
      description: 'Specialized in Science and Mathematics.',
      details: 'Focused on Physics, Chemistry, and Mathematics. Developed a strong foundation in analytical problem-solving and participated in Olympiads.',
      icon: 'fas fa-book',
      expanded: false
    },
    {
      year: '2021',
      title: 'NIT Trichy - Chemical Engineering',
      description: 'Graduated with a minor in Computer Applications.',
      details: 'Worked on research projects related to AI in chemical processes. Built multiple software solutions and contributed to open-source projects.',
      icon: 'fas fa-graduation-cap',
      expanded: false
    },
    {
      year: '2023',
      title: 'PwC India - Associate',
      description: 'Started career as a Technology Consultant.',
      details: 'Specialized in .NET, Angular, and SQL. Developed enterprise applications for clients and contributed to large-scale projects.',
      icon: 'fas fa-briefcase',
      expanded: false
    }
  ];

  constructor() {}

  ngOnInit(): void {}

  toggleExpand(index: number) {
    // Close all popups before opening the clicked one
    this.milestones.forEach((m, i) => {
      if (i !== index) {
        m.expanded = false;
      }
    });

    this.milestones[index].expanded = !this.milestones[index].expanded;
  }
}
