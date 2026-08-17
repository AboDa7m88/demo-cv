import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation';

@Component({
  selector: 'app-skills',
  standalone:true,
  imports: [ScrollAnimationDirective],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class Skills {
  skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Bootstrap',
    'React',
    'Angular',
    'Git',
    'GitHub'
  ];
}
