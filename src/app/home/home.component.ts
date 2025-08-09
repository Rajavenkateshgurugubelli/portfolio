import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule, MatChipsModule],
  template: `
    <section class="route">
      <h1>Software Tester / <span style="background:linear-gradient(90deg,#7dd3fc,#60a5fa);-webkit-background-clip:text;background-clip:text;color:transparent">SDET</span></h1>
      <p>I test web & APIs with automation and exploratory practice. Smooth pipelines, reliable releases, happy users.</p>
      <div class="spacer"></div>
      <div class="card-grid">
        <mat-card>
          <mat-card-title>Automation</mat-card-title>
          <mat-card-content>Playwright, Selenium, Cypress</mat-card-content>
        </mat-card>
        <mat-card>
          <mat-card-title>API</mat-card-title>
          <mat-card-content>REST Assured, Postman, Newman</mat-card-content>
        </mat-card>
        <mat-card>
          <mat-card-title>Performance</mat-card-title>
          <mat-card-content>k6, JMeter</mat-card-content>
        </mat-card>
        <mat-card>
          <mat-card-title>CI/CD</mat-card-title>
          <mat-card-content>GitHub Actions, Jenkins, Docker</mat-card-content>
        </mat-card>
      </div>
      <div class="spacer"></div>
      <mat-chip-set aria-label="Quick skills">
        <mat-chip>Java</mat-chip>
        <mat-chip>Python</mat-chip>
        <mat-chip>C#</mat-chip>
        <mat-chip>Tosca</mat-chip>
      </mat-chip-set>
    </section>
  `
})
export class HomeComponent {}
