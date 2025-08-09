import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
  <section>
    <h2>Contact</h2>
    <p>
  Email:
  <a href="mailto:your.email@example.com">
    your.email&#64;example.com
  </a>
</p>
 <p>LinkedIn: <a href="https://www.linkedin.com/in/raja-ven" target="_blank" rel="noopener">/in/raja-ven</a></p>
  </section>
  `
})
export class ContactComponent {}
