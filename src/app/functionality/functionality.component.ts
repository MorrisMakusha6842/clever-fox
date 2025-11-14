import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-functionality',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './functionality.component.html',
  styleUrl: './functionality.component.scss'
})
export class FunctionalityComponent {
  features = [
    {
      title: 'Nmap',
      description: 'Discover devices and services on a computer network, building a "map" of the network.'
    },
    {
      title: 'Osquery',
      description: 'Use a SQL-like interface to query operating system information and detect threats.'
    },
    {
      title: 'Training System',
      description: 'Improve your cybersecurity skills with our interactive training modules.'
    },
    {
      title: 'Interpreted AI Report',
      description: 'Get AI-powered reports that interpret security data and provide actionable insights.'
    }
  ];

  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
