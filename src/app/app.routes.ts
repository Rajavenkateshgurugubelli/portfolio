import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectsComponent } from './projects/projects.component';
import { CertsComponent } from './certs/certs.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'projects', component: ProjectsComponent, data: { animation: 'Projects' } },
  { path: 'certifications', component: CertsComponent, data: { animation: 'Certs' } },
  { path: 'contact', component: ContactComponent, data: { animation: 'Contact' } },
  { path: '**', redirectTo: '' }
];
