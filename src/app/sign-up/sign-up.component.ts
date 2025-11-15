import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
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
  authService = inject(AuthService);
  router = inject(Router);
  loading = false;

  credentials = {
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  async onSubmit() {
    if (this.loading) return;
    this.loading = true;
    try {
      await this.authService.registerWithEmail(this.credentials.email, this.credentials.password, this.credentials.username);
    } catch (error) {
      console.error('Registration failed', error);
      // Optionally, show an error message to the user
    } finally {
      this.loading = false;
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
