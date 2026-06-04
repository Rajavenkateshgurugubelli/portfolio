import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Certification {
  title: string;
  issuer: string;
  icon: string;
  flipped: boolean;
  skills: string[];
  description: string;
}

@Component({
  selector: 'app-certs',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./certs.component.css'],
  templateUrl: './certs.component.html'
})
export class CertsComponent {
  certifications: Certification[] = [
    {
      title: 'AWS Certified Solutions Architect - Associate',
      issuer: 'Amazon Web Services (AWS)',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
      flipped: false,
      skills: ['VPC & Hybrid Networking', 'IAM Security Policies', 'Serverless (Lambda, API Gateway)', 'High Availability & Scaling', 'Storage (S3, EFS, EBS)'],
      description: 'Validates comprehensive cloud design and deployment skills across AWS services.'
    },
    {
      title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
      issuer: 'Microsoft',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
      flipped: false,
      skills: ['Cloud Core Concepts', 'Azure Compute & Storage', 'Azure Governance & Compliance', 'Subscriptions & Cost Management'],
      description: 'Validates foundational knowledge of cloud services and how those services are provided with Azure.'
    },
    {
      title: 'Automation Specialist Level 1 (AS1)',
      issuer: 'Tricentis Tosca',
      icon: 'https://cdn.simpleicons.org/tricentis',
      flipped: false,
      skills: ['Workspace Configuration', 'Basic HTML/API Scanning', 'Test Case Execution', 'Automation Basics'],
      description: 'The foundational entry point covering workspace configuration, basic scanning, and test case execution.'
    },
    {
      title: 'Automation Specialist Level 2 (AS2)',
      issuer: 'Tricentis Tosca',
      icon: 'https://cdn.simpleicons.org/tricentis',
      flipped: false,
      skills: ['Advanced Execution', 'Tables Automation', 'Reusable Test Step Blocks', 'Verification & Assertions'],
      description: 'Focuses on advanced execution, tables, reusable test step blocks, and verification.'
    },
    {
      title: 'Automation Engineer Level 1 (AE1)',
      issuer: 'Tricentis Tosca',
      icon: 'https://cdn.simpleicons.org/tricentis',
      flipped: false,
      skills: ['Advanced Engines (TBox)', 'Custom Controls', 'Framework Configuration', 'Classic vs TBox Engines'],
      description: 'Delves into advanced engines, custom controls, and framework configuration.'
    },
    {
      title: 'Test Design Specialist Level 1 (TDS1)',
      issuer: 'Tricentis Tosca',
      icon: 'https://cdn.simpleicons.org/tricentis',
      flipped: false,
      skills: ['Test Case Design (TCD) Sheets', 'Requirements Mapping', 'Robust Test Sheets', 'Attributes & Instances'],
      description: 'Teaches test case design methodologies, requirements mapping, and creating robust test sheets.'
    },
    {
      title: 'Test Design Specialist Level 2 (TDS2)',
      issuer: 'Tricentis Tosca',
      icon: 'https://cdn.simpleicons.org/tricentis',
      flipped: false,
      skills: ['Structural Test Architecture', 'Complex Data Combinations', 'Orthogonal & Pairwise Design', 'Class Relations'],
      description: 'Expands on structural test architecture and handling complex data combinations.'
    }
  ];

  toggleFlip(cert: Certification) {
    cert.flipped = !cert.flipped;
  }
}
