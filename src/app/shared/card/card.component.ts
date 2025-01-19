import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-card',
  imports: [
    CardModule,
    AvatarModule,
    AvatarGroupModule,
    ButtonModule,
    CommonModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() hasAvatar!: boolean;
  @Input() avatarUrl!: string;
  @Input() hasImage!: boolean;
  @Input() image!: string;
  @Input() minimalTitle!: string;
  @Input() hasWavy!: boolean;
  @Input() cardClass!: string;
  @Input() hasOverlay!: boolean;
  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() revenuetitle!: string;
  @Input() revenuesubTitle!: string;
  @Input() money!: string;
  @Input() moneyP!: string;
  @Input() revenueh2!: string;
  @Input() minimal!: boolean;
  @Input() beats!: boolean;
  @Input() revenue!: boolean;
  @Input() green!: boolean;
  @Input() blue!: boolean;
}
