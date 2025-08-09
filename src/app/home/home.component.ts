import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `
  <section>
    <h1>Software Tester / SDET</h1>
    <p>I test web & APIs with automation and exploratory practice. Fast pipelines, reliable releases.</p>
    <div>
      <span class="pill">Playwright</span>
      <span class="pill">Selenium</span>
      <span class="pill">Cypress</span>
      <span class="pill">REST Assured</span>
      <span class="pill">Postman</span>
      <span class="pill">k6</span>
    </div>
    <div class="grid" style="margin-top:16px">
      <div class="card"><h3>Automation</h3><p>Stable E2E suites with parallel runs & traces.</p></div>
      <div class="card"><h3>API</h3><p>Smoke, contract testing, and regression packs in CI.</p></div>
      <div class="card"><h3>Performance</h3><p>k6/JMeter thresholds and trend dashboards.</p></div>
      <div class="card"><h3>CI/CD</h3><p>GitHub Actions/Jenkins pipelines with quality gates.</p></div>
    </div>
  </section>
  `
})
export class HomeComponent {}
