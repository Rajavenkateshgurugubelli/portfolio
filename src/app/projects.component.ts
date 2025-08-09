import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  template: `
  <section>
    <h2>Projects</h2>
    <div class="grid">
      <div class="card"><h3>E2E Regression</h3><p>Playwright, parallel shards, flake quarantine.</p></div>
      <div class="card"><h3>API Contracts</h3><p>REST Assured + Postman schema checks.</p></div>
      <div class="card"><h3>Perf Baselines</h3><p>k6 thresholds with CI gates.</p></div>
    </div>
  </section>
  `
})
export class ProjectsComponent {}
