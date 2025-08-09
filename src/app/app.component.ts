import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { trigger, transition, style, animate, query } from '@angular/animations';

export const routeAnimations =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({ position: 'absolute', left: 0, right: 0, opacity: 0, transform: 'translateY(12px)' })
      ], { optional: true }),
      query(':leave', [
        style({ opacity: 1, transform: 'translateY(0)' }),
        animate('150ms ease-out', style({ opacity: 0, transform: 'translateY(-8px)' }))
      ], { optional: true }),
      query(':enter', [
        style({ opacity: 0, transform: 'translateY(12px)' }),
        animate('220ms 80ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ], { optional: true })
    ])
  ]);

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule, MatIconModule, MatDividerModule],
  template: `
    <canvas class="bg-canvas" id="bg"></canvas>
    <mat-toolbar color="primary" class="mat-elevation-z2">
      <button mat-icon-button aria-label="Home" routerLink="/"><mat-icon>bug_report</mat-icon></button>
      <span style="margin-left:8px;font-weight:800;">Raja Ven — QA / SDET</span>
      <span class="toolbar-spacer"></span>
      <a mat-button routerLink="/" routerLinkActive="mat-mdc-unelevated-button">Home</a>
      <a mat-button routerLink="/projects">Projects</a>
      <a mat-button routerLink="/certifications">Certifications</a>
      <a mat-button routerLink="/contact">Contact</a>
      <a mat-raised-button color="accent" href="https://www.linkedin.com/in/raja-ven" target="_blank" rel="noopener">LinkedIn</a>
    </mat-toolbar>

    <main class="container" [@routeAnimations]="prepareRoute(outlet)">
      <router-outlet #outlet="outlet"></router-outlet>
    </main>

    <footer>© {{year}} Raja Ven • Built with Angular</footer>
  `,
  styles: [`:host{display:block}`],
  animations: [routeAnimations]
})
export class AppComponent {
  year = new Date().getFullYear();
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}
