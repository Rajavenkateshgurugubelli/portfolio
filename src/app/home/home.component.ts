import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from '../skills/skills.component';
import { ExperienceComponent } from '../experience/experience.component';
import { EducationComponent } from '../education/education.component';
import { CertsComponent } from '../certs/certs.component';
import { ContactComponent } from '../contact/contact.component';
import { ProjectsComponent } from '../projects/projects.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SkillsComponent,
    ExperienceComponent,
    ProjectsComponent,
    EducationComponent,
    CertsComponent,
    ContactComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  phrases: string[] = ['Distributed Systems', 'Cloud Solutions', 'Modern Web Apps', 'Scalable APIs'];
  currentPhraseIndex = 0;
  currentText = '';
  isDeleting = false;
  typingSpeed = 100;
  deletingSpeed = 50;
  pauseTime = 2000;
  timeoutId: any;

  ngOnInit() {
    this.type();
  }

  ngOnDestroy() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  type() {
    const currentPhrase = this.phrases[this.currentPhraseIndex];

    if (this.isDeleting) {
      this.currentText = currentPhrase.substring(0, this.currentText.length - 1);
    } else {
      this.currentText = currentPhrase.substring(0, this.currentText.length + 1);
    }

    // Update DOM directly for performance if needed, or bind variable (variable bound in template)
    // Here we need to update the DOM element since we removed the binding in the previous step? 
    // Wait, I didn't verify if I added binding in HTML. I added <span class="dynamic-text"></span>.
    // I need to update the template to bind {{ currentText }} or update element manually.
    // Let's bind it.

    // Actually, I need to update the template FIRST to bind {{ currentText }} to the span.
    // But I can do DOM manipulation for now to be safe/fast or update the template in next step.
    const dynamicTextElement = document.querySelector('.dynamic-text');
    if (dynamicTextElement) {
      dynamicTextElement.textContent = this.currentText;
    }

    let typeSpeed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;

    if (!this.isDeleting && this.currentText === currentPhrase) {
      typeSpeed = this.pauseTime;
      this.isDeleting = true;
    } else if (this.isDeleting && this.currentText === '') {
      this.isDeleting = false;
      this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
      typeSpeed = 500;
    }

    this.timeoutId = setTimeout(() => this.type(), typeSpeed);
  }
}