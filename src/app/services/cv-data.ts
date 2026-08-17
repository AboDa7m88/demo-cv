import { Injectable } from '@angular/core';
import { Skill } from '../models/skill.model';
import { Experience } from '../models/experience.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class CvDataService {
  private skills: Skill[] = [
    { name: 'Angular', level: 'Beginner' },
    { name: 'TypeScript', level: 'Beginner' },
    { name: 'HTML/CSS', level: 'Advanced' },
    { name: 'Bootstrap', level: 'Advanced' }
  ];

  private experience: Experience[] = [
    {
      role: 'Frontend Developer (Practice Projects)',
      company: 'Self-directed',
      period: '2026 - Present',
      description: 'Building small Angular apps to practice components, routing, forms, and services.'
    }
  ];

  private projects: Project[] = [
    {
      title: 'Student Management System',
      description: 'CRUD app with reactive forms, validation, and a shared service for state.'
    },
    {
      title: 'Blog Application',
      description: 'Routing, HttpClient, and Signals with the JSONPlaceholder API.'
    }
  ];

  getSkills(): Skill[] {
    return this.skills;
  }

  getExperience(): Experience[] {
    return this.experience;
  }

  getProjects(): Project[] {
    return this.projects;
  }
}

