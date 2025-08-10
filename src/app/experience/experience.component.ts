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
        'Design and maintain UI/API automation and CI integration for buyer/seller flows and messaging services.',
      bullets: [
        'Playwright (TS) and Selenium (Java) suites with stable parallel runs, trace/video capture.',
        'API checks (Postman/REST) wired into CI for smoke and regression; env-aware data setup/teardown.',
        'Kafka/RabbitMQ validations for order lifecycle, inventory, and payments.',
        'Surfaced flaky tests and error patterns with ELK dashboards; collaborated on targeted fixes.'
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
        'Delivered test automation for customer billing portals and metering APIs.',
      bullets: [
        'Selenium/TestNG framework with reusable page objects for portal workflows.',
        'Tosca API suites for metering/billing integrations with schema checks.',
        'JMeter baselines for key endpoints; SLAs tracked in CI.',
        'Containerised local test envs (Docker) aligned with QA/stage configs.'
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
        'Built UI and API automation for internal services with CI execution.',
      bullets: [
        'Selenium/JUnit frameworks; data-driven tests for edge cases.',
        'REST checks for Spring Boot services; simple contract assertions.',
        'PR smoke packs; nightly regression; flaky test quarantine and triage.'
      ],
      stack: [
        { label: 'Selenium' }, { label: 'JUnit' }, { label: 'Postman' },
        { label: 'Jenkins' }, { label: 'AWS' }, { label: 'Kafka' }
      ]
    }
  ];
}
