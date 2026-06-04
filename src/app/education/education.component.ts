import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  showDetails: boolean = false;

  courses = [
    'Advanced Algorithms',
    'Machine Learning',
    'Cloud Architecture',
    'Database Systems',
    'Distributed Systems',
    'Natural Language Processing',
    'Software Engineering Methodologies',
    'Information Retrieval'
  ];

  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}