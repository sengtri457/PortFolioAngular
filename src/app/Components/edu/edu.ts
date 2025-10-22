import { Component, inject } from '@angular/core';
import { Infoservices } from '../../Services/infoservices';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edu',
  imports: [CommonModule],
  templateUrl: './edu.html',
  styleUrl: './edu.css',
})
export class Edu {
  edu = inject(Infoservices);
}
