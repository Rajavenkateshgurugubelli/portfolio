import { Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { ProjectsComponent } from './projects.component';
import { CertificationsComponent } from './certifications.component';
import { ContactComponent } from './contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
