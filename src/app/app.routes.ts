import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { CertsComponent } from './certs/certs.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperienceComponent } from './experience/experience.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'certifications', component: CertsComponent },
  { path: 'contact', component: ContactComponent },
  {path: 'education', component: EducationComponent},
  {path: 'experience', component: ExperienceComponent},

  { path: '**', redirectTo: '' }
];
