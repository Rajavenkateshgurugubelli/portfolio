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
            title: 'Cloud-Native E-Commerce',
            description: 'A scalable microservices architecture built with Spring Boot and Kafka. Features include real-time inventory management, secure payments, and AI-driven recommendations.',
            techStack: ['Java', 'Spring Boot', 'Kafka', 'React', 'AWS'],
            link: 'https://github.com/Rajavenkateshgurugubelli', // Default to profile if no specific link
            image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        },
        {
            title: 'Real-Time Analytics Dashboard',
            description: 'High-performance dashboard for visualizing streaming data. specialized in handling high-throughput scenarios using WebSockets and serverless compute.',
            techStack: ['Angular', 'TypeScript', 'AWS Lambda', 'DynamoDB'],
            link: 'https://github.com/Rajavenkateshgurugubelli',
            image: 'linear-gradient(135deg, #2af598 0%, #009efd 100%)'
        },
        {
            title: 'Secure Identity Provider',
            description: 'Custom OAuth2/OIDC authorization server implemented with .NET Core. Provides centralized authentication and role-based access control for enterprise apps.',
            techStack: ['.NET Core', 'C#', 'IdentityServer', 'Docker'],
            link: 'https://github.com/Rajavenkateshgurugubelli',
            image: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)'
        }
    ];
}
