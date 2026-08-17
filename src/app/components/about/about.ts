import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {}
