import { Component, inject, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CommonModule } from '@angular/common';
import { FloatLabel } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  EmailValidator,
} from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    CommonModule,
    FloatLabel,
    TextareaModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  encapsulation: ViewEncapsulation.None,
  providers: [ContactService],
})
export class HomePageComponent {
  contact: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required]),
  });
  constructor(
    private contactService: ContactService,
    private messageService: MessageService
  ) {}
  onSubmit() {
    const formData = this.contact.value;
    this.contactService.sendMessage(formData).subscribe({
      next: (res) => {
        console.log('success', res);
        this.contact.reset();
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Message Sent Successfully',
        });
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }
}
