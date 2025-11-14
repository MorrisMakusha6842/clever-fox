import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit() {
    // Handle form submission logic here
    console.log('Form submitted');
    this.authService.login();
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
