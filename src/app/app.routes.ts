import { about } from './Models/info';
import { Routes } from '@angular/router';
import { Header } from './Components/header/header';
import { About } from './Components/about/about';
import { Homepage } from './Components/homepage/homepage';
import { Edu } from './Components/edu/edu';
import { Exp } from './Components/exp/exp';
import { Skill } from './Components/skill/skill';
import { Ser } from './Components/ser/ser';
import { Portfolio } from './Components/portfolio/portfolio';
import { Contact } from './Components/contact/contact';

export const routes: Routes = [
  {
    path: '',
    component: Homepage,
  },
  {
    path: 'header',
    component: Header,
  },
  {
    path: 'about',
    component: About,
  },
  {
    path: 'edu',
    component: Edu,
  },
  {
    path: 'exp',
    component: Exp,
  },
  {
    path: 'skill',
    component: Skill,
  },
  {
    path: 'services',
    component: Ser,
  },
  {
    path: 'portfolio',
    component: Portfolio,
  },
  {
    path: 'contact',
    component: Contact,
  },
];
