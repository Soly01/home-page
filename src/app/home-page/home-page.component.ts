import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CommonModule } from '@angular/common';
import { FloatLabel } from 'primeng/floatlabel';
import { TextareaModule } from 'primeng/textarea';

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
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {}
