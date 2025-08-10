import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  styleUrls: ['./contact.component.css'],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  showForm = false;

  formData = {
    name: '',
    email: '',
    message: ''
  };

  openForm() {
    this.showForm = true;
  }

  sendEmail() {
    const { name, email, message } = this.formData;
    const body = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    window.location.href = `mailto:rajaguru18@gmail.com?subject=Portfolio%20Contact&body=${body}`;
  }
}

