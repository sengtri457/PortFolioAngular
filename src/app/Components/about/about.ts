import { Component, inject } from '@angular/core';
import { Infoservices } from '../../Services/infoservices';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  about = inject(Infoservices);
}
