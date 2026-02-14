import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type Chip = { label: string };
type Role = {
  company: string;
  title: string;
  period: string;
  domain?: string;
  summary: string;
  bullets: string[];
  stack: Chip[];
};

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  roles: Role[] = [
    {
      company: 'Ebay',
      title: 'Senior Software Engineer',
      period: 'Jul 2023 – Present',
      domain: 'E-commerce',
      summary: 'Developing and maintaining RESTful APIs and inventory management systems for the e-commerce platform.',
      bullets: [
        'Developed RESTful APIs using Spring Boot and ASP.NET Core for seamless microservices communication.',
        'Implemented event-driven architecture using Apache Kafka for order updates and inventory synchronization.',
        'Designed GitOps-based CI/CD pipelines using Argo CD and Terraform for automated infrastructure.',
        'Optimized Elasticsearch indexes for high-performance search and aggregation.',
        'Integrated AI-assisted workflows to accelerate feature development and automated testing.',
        'Improved system performance with Redis and Ehcache caching strategies.'
      ],
      stack: [
        { label: 'Java' }, { label: 'Spring Boot' }, { label: 'ASP.NET Core' }, { label: 'Kafka' },
        { label: 'Elasticsearch' }, { label: 'Redis' }, { label: 'Kubernetes' }, { label: 'Terraform' }
      ]
    },
    {
      company: 'Florida Power and Light',
      title: 'Full Stack Engineer',
      period: 'Sep 2021 – Aug 2022',
      domain: 'Energy / Utility',
      summary: 'Rearchitected and delivered a mission-critical energy utility web application.',
      bullets: [
        'Developed backend modules using Spring Boot and Spring Data JPA for billing and user profiles.',
        'Built dynamic frontend components using Vue.js and TypeScript for energy usage insights.',
        'Implemented microservices architecture with Spring Cloud for modular deployments.',
        'Automated deployment using Docker and CI/CD pipelines on AWS EKS.',
        'Enhanced code quality through TDD using JUnit and Mockito.'
      ],
      stack: [
        { label: 'Vue.js' }, { label: 'Java' }, { label: 'Spring Boot' }, { label: 'MySQL' },
        { label: 'AWS EKS' }, { label: 'Docker' }, { label: 'Jenkins' }
      ]
    },
    {
      company: 'Comerica Bank',
      title: 'Software Developer',
      period: 'May 2019 – Aug 2021',
      domain: 'Banking / Finance',
      summary: 'Designed and developed Spring Boot microservices for enterprise-wide applications.',
      bullets: [
        'Implemented REST APIs with versioning and JWT-based authentication.',
        'Architected event-driven integrations using Apache Kafka for real-time processing.',
        'Managed AWS infrastructure (EC2, S3, RDS) and deployed on Kubernetes (EKS).',
        'Built reactive front-end components with React.js and Redux.',
        'Utilized MongoDB for document storage and aggregation pipelines.'
      ],
      stack: [
        { label: 'Java' }, { label: 'Spring Boot' }, { label: 'React.js' }, { label: 'Kafka' },
        { label: 'AWS' }, { label: 'MongoDB' }, { label: 'Kubernetes' }
      ]
    }
  ];
}
