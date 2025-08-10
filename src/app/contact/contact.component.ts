import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
  <section class="card">
    <h2>Contact</h2>
    <ul class="contact-list">
      <li>
        <a href="mailto:rajagurugu18@gmail.com">rajagurugu18@gmail.com</a>
      </li>
      <li>
        <a href="tel:+18068051502">806‑805‑1502</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/raja-ven" target="_blank" rel="noopener">
          linkedin.com/in/raja-ven
        </a>
      </li>
    </ul>
  </section>
  `
})
export class ContactComponent {}
