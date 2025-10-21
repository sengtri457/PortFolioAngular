import { Component, ElementRef, HostListener, inject } from '@angular/core';
import { Infoservices } from '../../Services/infoservices';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  imports: [CommonModule, FormsModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  leftSide = inject(Infoservices);

  isActive = true;
  isdark = true;
  isAc = 'My Socail';
  clickNav() {
    this.isActive = !this.isActive;
    if (!this.isActive) {
      this.isAc = 'Back';
    } else {
      this.isAc = 'My Socail';
    }
  }
  isActives = false;
  menuItems = [
    'fa-brands fa-instagram me-3  fa-3x',
    'fa-brands fa-facebook-f me-3  fa-3x',
    'fa-brands fa-linkedin-in me-3  fa-3x',
    'fa-brands fa-github me-3  fa-3x',
  ];
  link = [
    {
      name: 'instagram',
      link: 'https://www.instagram.com/extra_s4ngtr1/',
    },
    {
      name: 'Facebook',
      link: 'https://web.facebook.com/sxng.tri457/',
    },
    {
      name: 'Lininkedin',
      link: 'https://www.linkedin.com/in/me/',
    },
    {
      name: 'github',
      link: 'https://github.com/sengtri457',
    },
  ];

  toggleNav() {
    this.isActives = !this.isActives;
  }
  getItemPosition(index: number) {
    const angle = index * 310 - 200; // spread downward from left
    return this.isActives
      ? `rotate(${angle}deg) translate(130px) rotate(-${angle}deg)`
      : 'rotate(0deg) translate(0)';
  }
}
