import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

import { Infoservices } from './Services/infoservices';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'portfolio';

  app = inject(Infoservices);

  navItems = [
    { icon: 'bi bi-house-door-fill', label: 'Home', link: '/' },
    { icon: 'bi bi-person-lines-fill', label: 'About', link: '/about' },
    { icon: 'bi bi-envelope-fill', label: 'Contact', link: '/contact' },
    { icon: 'bi bi-briefcase-fill', label: 'Projects', link: '/portfolio' },
    {
      icon: 'fa-solid fa-graduation-cap',
      label: 'Edus',
      link: '/edu',
    },
    {
      icon: 'fa-solid fa-circle-half-stroke',
      label: 'Dark',
      link: '/',
    },
  ];
}
