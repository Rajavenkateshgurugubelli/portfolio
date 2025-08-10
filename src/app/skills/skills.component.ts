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
      name: 'Selenium',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
      description: 'Designed robust Selenium frameworks for web and microservice automation. Automated regression and E2E tests, built reusable page object models.'
    },
    {
      name: 'Playwright',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg',
      description: 'Automated cross-browser and E2E tests for customer-facing web apps, improving reliability and coverage.'
    },
    {
      name: 'Cypress',
      logo: 'https://cdn.simpleicons.org/cypress/17202C',
      description: 'Used for fast, reliable UI and API automation in modern web applications.'
    },
    {
      name: 'Postman',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      description: 'Automated REST API testing for complex workflows, validating order, payment, and billing integrations.'
    },
    {
      name: 'JMeter',
      logo: 'https://cdn.simpleicons.org/tricentis/0078D7',
      description: 'Developed performance, load, and stress testing scenarios to uncover bottlenecks and improve scalability.'
    },
    {
      name: 'Azure DevOps',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg',
      description: 'Integrated automated test suites into CI/CD pipelines, enabling continuous testing and faster releases.'
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      description: 'Configured containerized test environments for parallel and isolated test executions.'
    },
    {
      name: 'Kafka',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
      description: 'Validated microservices and event-driven architectures for real-time data consistency.'
    },
    {
      name: 'RabbitMQ',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg',
      description: 'Used for messaging validation in distributed systems and automation flows.'
    },
    {
      name: 'Tosca',
      logo: 'https://cdn.simpleicons.org/tricentis/0078D7',
      description: 'Developed and maintained API regression test suites using Tosca, enabling comprehensive validation.'
    },
    {
      name: 'GitHub Actions',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      description: 'Implemented CI/CD-integrated test pipelines for nightly runs and faster defect identification.'
    },
    {
      name: 'Jenkins',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg',
      description: 'Practiced TDD and continuous integration for faster and more reliable releases.'
    },
    {
      name: 'Spring Boot',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      description: 'Created microservices-level test suites and backend validations.'
    },
    {
      name: 'SQL Server',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
      description: 'Utilized for backend data validations as part of end-to-end automation workflows.'
    },
    {
      name: 'AWS',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg',
      description: 'Implemented automated validations for cloud-native architectures and resources.'
    },
    {
      name: 'Kubernetes',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
      description: 'Configured and managed containerized test environments for parallel and isolated test runs.'
    },
    {
      name: 'Redis',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
      description: 'Developed and maintained distributed caching test validations for data consistency.'
    },
    {
      name: 'JUnit',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-original.svg',
      description: 'Practiced TDD and BDD using JUnit for high-quality, maintainable code.'
    },
    {
      name: 'TestNG',
      logo: 'data:image/svg+xml;utf8,<svg xmlns=%27http://www.w3.org/2000/svg%27 width=%2764%27 height=%2764%27 viewBox=%270 0 64 64%27><rect width=%2764%27 height=%2764%27 rx=%2712%27 fill=%27%23FF6C37%27/><text x=%2750%25%27 y=%2752%25%27 text-anchor=%27middle%27 font-family=%27Arial, Helvetica, sans-serif%27 font-weight=%27700%27 font-size=%2718%27 fill=%27%23fff%27>TestNG</text></svg>',
      description: 'Designed custom automation frameworks using TestNG, improving regression test coverage.'
    },
    {
      name: 'Cucumber',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cucumber/cucumber-plain.svg',
      description: 'Implemented BDD tests to bridge collaboration between QA and business stakeholders.'
    },
    {
      name: 'Pytest',
      logo: 'https://cdn.simpleicons.org/pytest/0A9EDC',
      description: 'Used for Python-based automation and validation of backend services.'
    },
    {
      name: 'RestAssured',
      logo: 'https://avatars.githubusercontent.com/u/19369327?s=200&v=4',
      description: 'Automated REST API validation for microservices and distributed workflows.'
    },
    {
      name: 'Angular',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angular/angular-original.svg',
      description: 'Automated UI test scenarios for customer-facing portals and internal tools.'
    },
    {
      name: 'React',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      description: 'Automated end-to-end UI testing of React.js applications for responsiveness and compatibility.'
    },
    {
      name: 'Vue.js',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      description: 'Designed and executed automated UI tests using Vue.js components.'
    }
  ];

  selectedSkill: Skill | null = null;

  selectSkill(skill: Skill) {
    this.selectedSkill = skill;
  }
}