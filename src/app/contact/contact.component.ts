import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
  <section>
    <h2>Contact</h2>
    <p>Email:
      <a href="mailto:rajagurugu18@gmail.com">rajagurugu18@gmail.com</a>
    </p>
    <p>Phone:
      <a href="tel:8068051502">8068051502</a>
    </p>
    <p>LinkedIn:
      <a href="https://www.linkedin.com/in/raja-ven" target="_blank" rel="noopener">
        linkedin.com/in/raja-ven
      </a>
    </p>
  </section>
  `
})
export class ContactComponent {}
