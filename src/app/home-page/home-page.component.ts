import { CardComponent } from './../shared/card/card.component';
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
import { Testemonials } from '../../interfaces/testemonials';

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
    CardComponent,
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
  avatarUrl1: string =
    'https://primefaces.org/cdn/primeng/images/demo/avatar/xuxuefeng.png';
  title1: string = 'James Bruno';
  card: string = 'card ';
  subTitle1: string = 'Digital Marketer ';
  Testimonilas: Testemonials[] = [
    {
      image: '/fashion.jpg',
      title: 'FASHION STORE',
      subTitle:
        'Shop ladies fashion at Missguided USA With hundereds of new styles hitting our shelves every week',
    },

    {
      image: '/sofa.jpg',
      title: 'HOME FURNITURE',
      subTitle:
        'Provides suprior quality furniture and mattresses at a price that customers can easily afford',
    },

    {
      image: '/music.jpg',
      title: 'SUPER GADGET STORE',
      subTitle:
        'Specialize in selling unique gifts, cool gadgets, outdoor gear and fab toys',
    },
  ];
  minimalImage: string = '/chair.png';
  minimalTitle: string = 'Minimal Chair';
  minimalSubtitle: string = '$204 ';
  minimalMoney: string = '.00';
  minimalClass: string = 'minimal';
  beatsClass: string = 'beats';
  beatsImage: string = '/beats.png';
  beatsTitle: string = 'Beats Headphone';
  beatsSubtitle: string = '$74';
  beatsMoney: string = '.00';
  TestimonialsClass: string = 'cards-bgimage';
  blueClass: string = 'blue';
  greenClass: string = 'green';
  revenueh2: string = 'TOTAL REVENUE';
  revnueTitleB: string = '$ 7,654';
  revenueSubtitleB: string = '+$232';
  revnueTitleG: string = '$ 9,978 ';
  revenueSubtitleG: string = '+$349';
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
