import { Component, inject } from '@angular/core';
import { Infoservices } from '../../Services/infoservices';

@Component({
  selector: 'app-exp',
  imports: [],
  templateUrl: './exp.html',
  styleUrl: './exp.css',
})
export class Exp {
  exp = inject(Infoservices);
}
