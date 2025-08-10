import { Component } from '@angular/core';

@Component({
  selector: 'app-certs',
  standalone: true,
  styleUrls: ['./certs.component.css'],
  template: `
  <section class="certificates">
    <h2>Certificates</h2>
    <ul class="cert-grid">
      <li>
        <a class="card rise cert-card" href="https://learn.microsoft.com/certifications/azure-fundamentals/" target="_blank" rel="noopener">
          <span class="cert-icon" aria-hidden="true">🎓</span>
          <span class="cert-title">Microsoft Certified: Azure Fundamentals (AZ-900)</span>
        </a>
      </li>
      <li>
        <a class="card rise cert-card" href="https://university.tricentis.com/" target="_blank" rel="noopener">
          <span class="cert-icon" aria-hidden="true">🎓</span>
          <span class="cert-title">Tricentis Tosca Automation Specialist Level 1</span>
        </a>
      </li>
      <li>
        <a class="card rise cert-card" href="https://university.tricentis.com/" target="_blank" rel="noopener">
          <span class="cert-icon" aria-hidden="true">🎓</span>
          <span class="cert-title">Tricentis Tosca Automation Specialist Level 2</span>
        </a>
      </li>
      <li>
        <a class="card rise cert-card" href="https://university.tricentis.com/" target="_blank" rel="noopener">
          <span class="cert-icon" aria-hidden="true">🎓</span>
          <span class="cert-title">Tricentis Tosca Test Design Specialist Level 1</span>
        </a>
      </li>
      <li>
        <a class="card rise cert-card" href="https://university.tricentis.com/" target="_blank" rel="noopener">
          <span class="cert-icon" aria-hidden="true">🎓</span>
          <span class="cert-title">Tricentis Tosca Test Design Specialist Level 2</span>
        </a>
      </li>
      <li>
        <a class="card rise cert-card" href="https://university.tricentis.com/" target="_blank" rel="noopener">
          <span class="cert-icon" aria-hidden="true">🎓</span>
          <span class="cert-title">Tricentis Tosca Automation Engineer Level 1</span>
        </a>
      </li>
      <li>
        <a class="card rise cert-card" href="https://university.tricentis.com/" target="_blank" rel="noopener">
          <span class="cert-icon" aria-hidden="true">🎓</span>
          <span class="cert-title">Tricentis Tosca Automation Engineer Level 2</span>
        </a>
      </li>
    </ul>
  </section>
  `
})
export class CertsComponent {}
