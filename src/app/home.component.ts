import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  template: `<h1>Welcome to My Portfolio</h1><p>This is my homepage.</p>`,
  styles: [`h1 { color: darkblue; }`]
})
export class HomeComponent {}
