import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {

  constructor(private router: Router) {}

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted');
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
