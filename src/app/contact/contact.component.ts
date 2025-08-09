import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  template: `
    <section class="route">
      <h2>Contact</h2>
      <mat-card>
        <p>Email: <a href="mailto:your.email@example.com">your.email@example.com</a></p>
        <a mat-raised-button color="primary" href="https://www.linkedin.com/in/raja-ven" target="_blank" rel="noopener">LinkedIn</a>
      </mat-card>
    </section>
  `
})
export class ContactComponent {}
