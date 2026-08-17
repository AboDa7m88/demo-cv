import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Experience } from './components/experience/experience';
import { Projects } from './components/projects/projects';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, About, Skills, Experience, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
