import { Component, inject } from '@angular/core';
import { Infoservices } from '../../Services/infoservices';

@Component({
  selector: 'app-header',
  imports: [],
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
}
