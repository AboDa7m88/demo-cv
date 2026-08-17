import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './experience.html',
  styleUrl: './experience.css'
})
export class Experience {

  experiences = [
    {
      id: 1,
      role: 'Frontend Developer Intern',
      company: 'Tech Company',
      period: '2025 - 2026',
      description: 'Worked on responsive web interfaces using HTML, CSS, JavaScript and Bootstrap.'
    },
    {
      id: 2,
      role: 'Junior Web Developer',
      company: 'Web Solutions',
      period: '2024 - 2025',
      description: 'Developed and maintained web applications while collaborating with a development team.'
    },
    {
      id: 3,
      role: 'Freelance Developer',
      company: 'Self-employed',
      period: '2023 - 2024',
      description: 'Built small websites and frontend projects for different clients.'
    }
  ];

}
