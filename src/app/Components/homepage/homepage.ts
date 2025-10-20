import { Component } from '@angular/core';
import { Header } from '../header/header';
import { About } from '../about/about';
import { Edu } from '../edu/edu';
import { Exp } from '../exp/exp';
import { Skill } from '../skill/skill';
import { Ser } from '../ser/ser';

@Component({
  selector: 'app-homepage',
  imports: [Header, About, Edu, Exp, Skill, Ser],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {}
