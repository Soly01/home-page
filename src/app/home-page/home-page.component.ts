import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
@Component({
  selector: 'app-home-page',
  imports: [
    ButtonModule,
    InputTextModule,
    CardModule,
    AvatarModule,
    AvatarGroupModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {}
