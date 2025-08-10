import { Component } from '@angular/core';

@Component({
  selector: 'app-certs',
  standalone: true,
  template: `
  <section>
    <h2>Certifications</h2>
    <ul>
      <li><a href="https://learn.microsoft.com/certifications/azure-fundamentals/" target="_blank" rel="noopener">AZ-900 Azure Fundamentals</a></li>
      <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca  AS1</a></li>
      <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca  AS2</a></li>
      <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca  TDS1</a></li>
      <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca  TDS2</a></li>
      <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca  AE1</a></li>
      <li><a href="https://university.tricentis.com/" target="_blank" rel="noopener">Tricentis Tosca  AE2</a></li>
    </ul>
  </section>
  `
})
export class CertsComponent {}
