import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  logo: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      description: 'Expertise in Java 8+, Spring Boot, Spring Cloud, and Microservices architecture.'
    },
    {
      name: '.NET Core',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      description: 'Developed high-performance REST APIs and backend services using C# and ASP.NET Core.'
    },
    {
      name: 'Spring Boot',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      description: 'Built scalable microservices, RESTful APIs, and integrated with Hibernate/JPA.'
    },
    {
      name: 'FastAPI',
      logo: 'https://www.vectorlogo.zone/logos/fastapi/fastapi-icon.svg',
      description: 'Built high-performance, asynchronous REST APIs for RAG backends and NLP pipelines.'
    },
    {
      name: 'React.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Designed interactive frontend components and SPAs with state management.'
    },
    {
      name: 'Angular',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      description: 'Created enterprise-grade web applications and responsive user interfaces.'
    },
    {
      name: 'Vue.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      description: 'Designed interactive UI components and dashboards for utility portals.'
    },
    {
      name: 'AWS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      description: 'Deployed and managed applications using EC2, S3, EKS, Lambda, and RDS.'
    },
    {
      name: 'Kafka',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
      description: 'Implemented event-driven architectures for real-time transaction streams.'
    },
    {
      name: 'LangChain & LangGraph',
      logo: 'https://www.vectorlogo.zone/logos/langchain/langchain-icon.svg',
      description: 'Developed RAG orchestrations, conversational agents, and LLM evaluation suites.'
    },
    {
      name: 'XGBoost & ML',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: 'Trained classifiers for credit card fraud detection and applied data drift analysis.'
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      description: 'Containerized applications for consistent deployment across environments.'
    },
    {
      name: 'Kubernetes',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      description: 'Orchestrated microservices deployments using EKS and AKS.'
    },
    {
      name: 'PostgreSQL & MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      description: 'Designed schemas, optimized complex queries, and managed transactional databases.'
    },
    {
      name: 'Elasticsearch',
      logo: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg',
      description: 'Optimized search indexes for high-performance data retrieval.'
    },
    {
      name: 'Terraform',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
      description: 'Managed infrastructure as code (IaC) for AWS and Azure cloud setups.'
    }
  ];
}
