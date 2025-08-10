import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  styleUrls: ['./contact.component.css'],
  template: `
  <section class="card contact-card">
    <h2>Contact</h2>
    <div class="contact-container">
      <a class="contact-item" href="mailto:rajagurugu18@gmail.com">
        <span class="icon">📧</span>
        <span>rajagurugu18@gmail.com</span>
      </a>
      <a class="contact-item" href="tel:+18068051502">
        <span class="icon">📞</span>
        <span>806‑805‑1502</span>
      </a>
      <a
        class="contact-item"
        href="https://www.linkedin.com/in/raja-ven"
        target="_blank"
        rel="noopener"
      >
        <span class="icon">💼</span>
        <span>linkedin.com/in/raja-ven</span>
      </a>
    </div>
  </section>
  `,
})
export class ContactComponent {}

