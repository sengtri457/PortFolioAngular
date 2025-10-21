import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { About } from './Components/about/about';
import { Skill } from './Components/skill/skill';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'portfolio';
  navItems = [
    { icon: 'bi bi-house-door-fill', label: 'Home', link: '/home' },
    { icon: 'bi bi-person-lines-fill', label: 'About', link: '/about' },
    { icon: 'bi bi-envelope-fill', label: 'Contact', link: '/contact' },
    { icon: 'bi bi-briefcase-fill', label: 'Projects', link: '/portfolio' },
    {
      icon: 'fa-solid fa-graduation-cap',
      label: 'Edus',
      link: '/edu',
    },
  ];
}
