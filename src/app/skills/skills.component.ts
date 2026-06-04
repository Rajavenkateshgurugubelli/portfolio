import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  name: string;
  logo: string;
  description: string;
  category: 'backend' | 'frontend' | 'database' | 'devops' | 'ai';
  tools: string[];
  expanded?: boolean;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  selectedCategory: string = 'all';

  categories = [
    { id: 'all', label: 'All Tech' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'frontend', label: 'Frontend UI' },
    { id: 'database', label: 'Databases & Caching' },
    { id: 'devops', label: 'Cloud & DevOps' },
    { id: 'ai', label: 'AI & Data Science' }
  ];

  skills: Skill[] = [
    {
      name: 'Java',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      description: 'Expertise in Java 8+, Spring Boot, Spring Cloud, and Microservices architecture.',
      category: 'backend',
      tools: ['JVM', 'Spring Boot', 'Spring Cloud', 'JUnit', 'Hibernate', 'Maven']
    },
    {
      name: 'Python',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: 'Proficient in building asynchronous APIs, scripting, ML modeling, and integrating RAG knowledge engines.',
      category: 'backend',
      tools: ['FastAPI', 'Django', 'Pytest', 'Poetry', 'Jupyter', 'Pandas']
    },
    {
      name: '.NET Core',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg',
      description: 'Developed high-performance REST APIs and backend services using C# and ASP.NET Core.',
      category: 'backend',
      tools: ['C#', 'ASP.NET Web API', 'Entity Framework', 'LINQ', 'xUnit']
    },
    {
      name: 'Spring Boot',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      description: 'Built scalable microservices, RESTful APIs, and integrated with Hibernate/JPA.',
      category: 'backend',
      tools: ['Spring Cloud', 'Spring Security', 'Eureka Discovery', 'Zuul Gateway', 'Spring Data']
    },
    {
      name: 'FastAPI',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
      description: 'Built high-performance, asynchronous REST APIs for RAG backends and NLP pipelines.',
      category: 'backend',
      tools: ['Pydantic', 'Uvicorn', 'SQLAlchemy', 'Asyncio', 'FastAPI TestClient']
    },
    {
      name: 'React.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Designed interactive frontend components and SPAs with state management.',
      category: 'frontend',
      tools: ['Redux Toolkit', 'React Hooks', 'Context API', 'Vite', 'React Router']
    },
    {
      name: 'Angular',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      description: 'Created enterprise-grade web applications and responsive user interfaces.',
      category: 'frontend',
      tools: ['RxJS', 'NgModules', 'Directives/Pipes', 'Angular CLI', 'Standalone Components']
    },
    {
      name: 'Vue.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      description: 'Designed interactive UI components and dashboards for utility portals.',
      category: 'frontend',
      tools: ['Vuex', 'Vue Router', 'Composition API', 'Nuxt.js']
    },
    {
      name: 'AWS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      description: 'Deployed and managed applications using EC2, S3, EKS, Lambda, and RDS.',
      category: 'devops',
      tools: ['EC2', 'S3', 'Lambda', 'EKS', 'VPC', 'RDS', 'CloudWatch']
    },
    {
      name: 'Kafka',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
      description: 'Implemented event-driven architectures for real-time transaction streams.',
      category: 'devops',
      tools: ['Kafka Brokers', 'Producers & Consumers', 'Kafka Connect', 'Zookeeper']
    },
    {
      name: 'LangChain',
      logo: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/langchain.svg',
      description: 'Developed RAG orchestrations, prompt templates, and evaluation pipelines.',
      category: 'ai',
      tools: ['Vector Stores', 'Retrievers', 'Prompt Templates', 'Chains', 'Agents']
    },
    {
      name: 'LangGraph',
      logo: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/langgraph.svg',
      description: 'Designed stateful, multi-agent conversational structures and cyclical LLM graphs.',
      category: 'ai',
      tools: ['StateGraph', 'Nodes & Edges', 'Short-Term Memory', 'Cyclical Routing']
    },
    {
      name: 'XGBoost',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      description: 'Trained and optimized boosted decision trees for real-time fraud classification.',
      category: 'ai',
      tools: ['Boosted Trees', 'Hyperparameter Tuning', 'Feature Importance']
    },
    {
      name: 'Machine Learning',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
      description: 'Applied statistical modeling, feature engineering, and data drift analysis.',
      category: 'ai',
      tools: ['Scikit-Learn', 'Pandas', 'NumPy', 'Data Drift Analysis']
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      description: 'Containerized applications for consistent deployment across environments.',
      category: 'devops',
      tools: ['Docker Compose', 'Dockerfiles', 'Multi-stage Builds', 'Registries']
    },
    {
      name: 'Kubernetes',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      description: 'Orchestrated microservices deployments using EKS and AKS.',
      category: 'devops',
      tools: ['Helm Charts', 'Pods/Services', 'Ingress Controller', 'kubectl']
    },
    {
      name: 'PostgreSQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      description: 'Designed relational schemas, optimized complex queries, and managed indexes.',
      category: 'database',
      tools: ['PL/pgSQL', 'JSONB Storage', 'Query Optimization', 'Indexes']
    },
    {
      name: 'MySQL',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      description: 'Managed data storage, user accounts, and high-performance queries for web services.',
      category: 'database',
      tools: ['Relational Schemas', 'Transaction Isolation', 'Query Tuning']
    },
    {
      name: 'Elasticsearch',
      logo: 'https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg',
      description: 'Optimized search indexes for high-performance data retrieval.',
      category: 'database',
      tools: ['Full-text Search', 'Inverted Indexes', 'Elastic Queries']
    },
    {
      name: 'Terraform',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg',
      description: 'Managed infrastructure as code (IaC) for AWS and Azure cloud setups.',
      category: 'devops',
      tools: ['IaC Declarations', 'State Management', 'Terraform Modules']
    },
    {
      name: 'Redis',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      description: 'Designed and implemented high-throughput caching layers for distributed web APIs.',
      category: 'database',
      tools: ['Caching Policies', 'Key-Value Store', 'Pub/Sub Messaging']
    },
    {
      name: 'CI/CD & GitOps',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
      description: 'Built automated deployment pipelines using Jenkins, Argo CD, and GitHub Actions.',
      category: 'devops',
      tools: ['Jenkins Pipelines', 'Argo CD', 'GitHub Actions']
    }
  ];

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  toggleExpand(skill: Skill) {
    skill.expanded = !skill.expanded;
  }

  get filteredSkills(): Skill[] {
    if (this.selectedCategory === 'all') {
      return this.skills;
    }
    return this.skills.filter(s => s.category === this.selectedCategory);
  }
}
