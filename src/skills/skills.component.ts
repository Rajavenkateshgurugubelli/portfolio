import { Component } from '@angular/core';

interface Skill {
  name: string;
  logo: string;
  description: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  skills: Skill[] = [
    {
      name: 'Selenium',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg',
      description: `Used for designing and implementing scalable test automation frameworks for web and microservice applications at TCGplayer, Florida Power and Light, and CGI. Automated regression and end-to-end tests, built reusable page object models, and reduced manual verification efforts by 60%.`
    },
    {
      name: 'Playwright',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg',
      description: `Automated cross-browser and end-to-end tests for customer-facing web apps at TCGplayer, improving regression reliability and test coverage across Chromium, Firefox, and WebKit.`
    },
    {
      name: 'Cypress',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-original.svg',
      description: `Used for automating UI and API tests for modern web applications, ensuring robust regression coverage and fast feedback cycles.`
    },
    {
      name: 'Postman',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg',
      description: `Automated REST API testing for complex workflows at TCGplayer and Florida Power and Light, validating order, payment, and billing integrations.`
    },
    {
      name: 'JMeter',
      logo: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/apache-jmeter.svg',
      description: `Developed performance, load, and stress testing scenarios to uncover bottlenecks and improve system scalability at TCGplayer, Florida Power and Light, and CGI.`
    },
    {
      name: 'Azure DevOps',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg',
      description: `Integrated automated test suites into CI/CD pipelines at TCGplayer, enabling continuous testing and faster release cycles.`
    },
    {
      name: 'Docker',
      logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
      description: `Configured containerized test environments for parallel and isolated test executions at Florida Power and Light and CGI.`
    },
    {
      name: 'Kafka',
      logo: 'https://raw.githubusercontent.com/gilbarbara/logos/main/logos/apache-kafka.svg',
      description: `Validated microservices and event-driven architectures involving Kafka for real-time data consistency and system resilience at TCGplayer and CGI.`
    }
  ];

  selectedSkill: Skill | null = null;

  selectSkill(skill: Skill) {
    this.selectedSkill = skill;
  }
}