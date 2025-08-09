import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgFor } from '@angular/common';

interface Cert { short: string; name: string; issuer: string; link: string; }

@Component({
  selector: 'app-certs',
  standalone: true,
  imports: [NgFor, MatCardModule, MatButtonModule],
  template: `
    <section class="route">
      <h2>Certifications</h2>
      <div class="card-grid">
        <mat-card *ngFor="let c of certs">
          <mat-card-title>{{c.name}}</mat-card-title>
          <mat-card-subtitle>{{c.issuer}}</mat-card-subtitle>
          <a mat-raised-button color="accent" [href]="c.link" target="_blank" rel="noopener">Open certificate</a>
        </mat-card>
      </div>
    </section>
  `
})
export class CertsComponent {
  certs: Cert[] = [
    { short:'AZ',  name:'Microsoft Azure Fundamentals (AZ-900)', issuer:'Microsoft', link:'https://learn.microsoft.com/certifications/azure-fundamentals/' },
    { short:'AS1', name:'Tricentis Tosca Automation Specialist L1', issuer:'Tricentis', link:'https://university.tricentis.com/' },
    { short:'AS2', name:'Tricentis Tosca Automation Specialist L2', issuer:'Tricentis', link:'https://university.tricentis.com/' },
    { short:'TDS1', name:'Tricentis Test Design Specialist 1', issuer:'Tricentis', link:'https://university.tricentis.com/' },
    { short:'TDS2', name:'Tricentis Test Design Specialist 2', issuer:'Tricentis', link:'https://university.tricentis.com/' },
    { short:'AU1', name:'Tricentis Automation University 1', issuer:'Tricentis', link:'https://university.tricentis.com/' },
    { short:'AU2', name:'Tricentis Automation University 2', issuer:'Tricentis', link:'https://university.tricentis.com/' },
  ];
}
