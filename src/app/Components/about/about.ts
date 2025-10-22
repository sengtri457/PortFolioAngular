import { Component, inject } from '@angular/core';
import { Infoservices } from '../../Services/infoservices';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [FormsModule, CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  about = inject(Infoservices);
}
