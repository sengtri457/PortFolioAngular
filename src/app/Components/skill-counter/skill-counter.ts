import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-skill-counter',
  imports: [CommonModule, FormsModule],
  templateUrl: './skill-counter.html',
  styleUrl: './skill-counter.css',
})
export class SkillCounter implements OnInit {
  @Input() value = 0;
  @Input() duration = 1500;
  @Input() label = '';

  displayValue = 0;
  private counted = false;
  constructor(private el: ElementRef) {}
  ngOnInit(): void {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !this.counted) {
        this.counted = true;
        this.startCount();
      }
    });
    observer.observe(this.el.nativeElement);
  }
  startCount() {
    const steps = 60;
    const increment = this.value / steps;
    const interval = this.duration / steps;

    let current = 0;
    const counter = setInterval(() => {
      current += increment;
      if (current >= this.value) {
        current = this.value;
        clearInterval(counter);
      }
      this.displayValue = Math.round(current);
    }, interval);
  }
}
