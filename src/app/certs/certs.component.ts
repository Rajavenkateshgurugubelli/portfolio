import { Component } from '@angular/core';

@Component({
  selector: 'app-certs',
  standalone: true,
  styleUrls: ['./certs.component.css'],
  template: `
  <section>
    <h2>Certifications</h2>
    <div class="card">
      <ul class="cert-list">
        <li><a href="https://learn.microsoft.com/certifications/azure-fundamentals/" target="_blank" rel="noopener">Microsoft Certified: Azure Fundamentals (AZ-900)</a></li>
        <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca Automation Specialist Level 1</a></li>
        <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca Automation Specialist Level 2</a></li>
        <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca Test Design Specialist Level 1</a></li>
        <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca Test Design Specialist Level 2</a></li>
        <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca Automation Engineer Level 1</a></li>
        <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca Automation Engineer Level 2</a></li>
      </ul>
    </div>
  </section>
  `
})
export class CertsComponent {}
