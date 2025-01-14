import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-home-page',
  imports: [ButtonModule, InputTextModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class HomePageComponent {}
