import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { CertsComponent } from '../certs/certs.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    CertsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent {
  @ViewChild(ContactComponent) contactComp?: ContactComponent;

  scrollToContact() {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    this.contactComp?.openForm();
  }
}