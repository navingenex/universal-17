import { Component } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  constructor(private meta: Meta) {
    this.meta.updateTag({
      property: 'og:image',
      content:
        'https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/car_4.png',
    });
  }
}
