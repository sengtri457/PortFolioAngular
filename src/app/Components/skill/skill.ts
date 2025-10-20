import { Infoservices } from './../../Services/infoservices';
import { Component, ElementRef, inject, Input, OnInit } from '@angular/core';
import { SkillCounter } from '../skill-counter/skill-counter';

@Component({
  selector: 'app-skill',
  imports: [SkillCounter],
  templateUrl: './skill.html',
  styleUrl: './skill.css',
})
export class Skill {
  skill = inject(Infoservices);
}
