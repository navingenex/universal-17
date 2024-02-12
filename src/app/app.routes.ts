import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  // { path: 'home', component: HomeComponent, title: 'Home' },
  { path: 'contact', component: ContactComponent, title: 'Contact' },
];
