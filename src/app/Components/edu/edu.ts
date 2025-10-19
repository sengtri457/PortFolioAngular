import { Component, inject } from '@angular/core';
import { Infoservices } from '../../Services/infoservices';

@Component({
  selector: 'app-edu',
  imports: [],
  templateUrl: './edu.html',
  styleUrl: './edu.css',
})
export class Edu {
  edu = inject(Infoservices);
}
