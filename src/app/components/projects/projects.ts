import { Component } from '@angular/core';
import { ScrollAnimationDirective } from '../../directives/scroll-animation';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ScrollAnimationDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {

  projects = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A responsive personal portfolio website built to showcase my skills, experience and projects.',
      technologies: ['HTML', 'CSS','JavaScript'],
      link: '#'
    },
    {
      id: 2,
      title: 'Student Dashboard',
      description: 'A responsive dashboard for students to manage their courses and view academic information.',
      technologies: ['HTML', 'Bootstrap'],
      link: '#'
    },
    {
      id: 3,
      title: 'Tic-Tac-Toe Game',
      description: 'A simple interactive Tic-Tac-Toe game built with JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      link: '#'
    }
  ];

}
