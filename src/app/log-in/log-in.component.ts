import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  authService = inject(AuthService);
  router = inject(Router);
  toastService = inject(ToastService);

  credentials = {
    email: '',
    password: ''
  };

  loading = false;

  async onSubmit() {
    if (this.loading) return;
    this.loading = true;
    try {
      await this.authService.loginWithEmail(this.credentials.email, this.credentials.password);
    } catch (error: any) {
      this.toastService.show(error.message, 'error');
    } finally {
      this.loading = false;
    }
  }

  async loginWithGoogle() {
    if (this.loading) return;
    this.loading = true;
    try {
      await this.authService.loginWithGoogle();
    } catch (error: any) {
      this.toastService.show(error.message, 'error');
    } finally {
      this.loading = false;
    }
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
