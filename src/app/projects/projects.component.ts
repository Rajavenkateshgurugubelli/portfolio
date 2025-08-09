import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  template: `
    <section class="route">
      <h2>Projects</h2>
      <div class="card-grid">
        <mat-card>
          <mat-card-title>E2E Regression (Playwright)</mat-card-title>
          <mat-card-content>Parallel runs, videos/traces, flaky test quarantine.</mat-card-content>
          <button mat-button color="primary"><mat-icon>open_in_new</mat-icon> View details</button>
        </mat-card>
        <mat-card>
          <mat-card-title>API Smoke & Contracts</mat-card-title>
          <mat-card-content>Postman/Newman in CI; REST Assured contracts.</mat-card-content>
          <button mat-button color="primary"><mat-icon>open_in_new</mat-icon> View details</button>
        </mat-card>
        <mat-card>
          <mat-card-title>Performance Baselines</mat-card-title>
          <mat-card-content>k6/JMeter thresholds with CI gates.</mat-card-content>
          <button mat-button color="primary"><mat-icon>open_in_new</mat-icon> View details</button>
        </mat-card>
      </div>
    </section>
  `
})
export class ProjectsComponent {}
