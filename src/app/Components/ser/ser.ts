import { Component, inject } from '@angular/core';
import { Infoservices } from '../../Services/infoservices';

@Component({
  selector: 'app-ser',
  imports: [],
  templateUrl: './ser.html',
  styleUrl: './ser.css',
})
export class Ser {
  service = inject(Infoservices);
}
