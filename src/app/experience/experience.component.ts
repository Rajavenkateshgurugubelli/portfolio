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
      company: 'TCGplayer',
      title: 'Software Developer in Test (SDET)',
      period: 'Jul 2023 – Present',
      domain: 'E-commerce / Marketplace',
        summary:
          'Lead UI and API automation for marketplace features with CI visibility.',
        bullets: [
          'Built Playwright (TS) and Selenium (Java) frameworks with parallel execution and trace capture.',
          'Wired Postman and REST Assured checks into CI for smoke and regression suites.',
          'Verified event flows across Kafka and RabbitMQ for orders, inventory, and payments.',
          'Created ELK dashboards to expose flakiness and accelerate fixes.'
        ],
      stack: [
        { label: 'Playwright' }, { label: 'Selenium' }, { label: 'Java' }, { label: 'TypeScript' },
        { label: 'Postman' }, { label: 'REST' }, { label: 'Kafka' }, { label: 'RabbitMQ' },
        { label: 'Azure DevOps' }, { label: 'GitHub Actions' }, { label: 'ELK' }
      ]
    },
    {
      company: 'Florida Power & Light',
      title: 'SDET',
      period: 'Sep 2021 – Aug 2022',
      domain: 'Energy / Customer Portals',
        summary:
          'Delivered automation for billing portals and metering APIs.',
        bullets: [
          'Authored Selenium/TestNG framework with reusable page objects.',
          'Implemented Tosca API suites with schema validation for metering and billing.',
          'Established JMeter load baselines and enforced SLAs in CI.',
          'Containerized test environments with Docker aligned to QA and stage.'
        ],
      stack: [
        { label: 'Selenium' }, { label: 'TestNG' }, { label: 'Tosca' }, { label: 'JMeter' },
        { label: 'Docker' }, { label: 'MySQL' }, { label: 'Spring Boot' }
      ]
    },
    {
      company: 'CGI',
      title: 'Test Engineer',
      period: 'May 2019 – Aug 2021',
      domain: 'Enterprise Applications',
        summary:
          'Built UI and API automation for internal services with continuous integration.',
        bullets: [
          'Engineered Selenium/JUnit tests with data-driven coverage.',
          'Exercised REST services for Spring Boot apps with contract assertions.',
          'Maintained PR smoke packs, nightly regression, and flaky test triage.'
        ],
      stack: [
        { label: 'Selenium' }, { label: 'JUnit' }, { label: 'Postman' },
        { label: 'Jenkins' }, { label: 'AWS' }, { label: 'Kafka' }
      ]
    }
  ];
}
