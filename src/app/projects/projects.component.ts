import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    title: string;
    description: string;
    techStack: string[];
    link: string;
    image: string; // Placeholder CSS gradient or logic
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
    projects: Project[] = [
        {
            title: 'Modern Portfolio',
            description: 'A high-performance, responsive personal portfolio built with Angular 17. Features a custom "Midnight Tech" theme, glassmorphism UI, and optimized animations.',
            techStack: ['Angular', 'TypeScript', 'CSS3', 'Netlify'],
            link: 'https://github.com/Rajavenkateshgurugubelli/portfolio',
            image: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
        },
        {
            title: 'Java Masterclass Repository',
            description: 'Comprehensive Java learning resource covering Core Java, OOP, Collections, Concurrency, and Modern Java Features (Java 8-21). Includes hands-on exercises and capstone projects.',
            techStack: ['Java 21', 'JUnit', 'Maven', 'Eclipse'],
            link: 'https://github.com/Rajavenkateshgurugubelli/Learn-Java',
            image: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
        },
        {
            title: 'NR Tax Filing System',
            description: 'Enterprise-grade tax wizard for international students (F1/J1) to file 1040-NR forms. Handles treaty benefits, FICA exemptions, and PDF generation.',
            techStack: ['Angular', 'TypeScript', 'Node.js', 'PDF-Lib'],
            link: 'https://github.com/Rajavenkateshgurugubelli/1040-NR-Tax-filing',
            image: 'linear-gradient(135deg, #10b981 0%, #059669 100%)'
        }
    ];
}
