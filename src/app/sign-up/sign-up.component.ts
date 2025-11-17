import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { DependencyCheckService } from '../services/dependency-check.service';

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
  toastService = inject(ToastService);
  dependencyCheckService = inject(DependencyCheckService);
  loading = false;

  credentials = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  async onSubmit() {
    if (this.loading) return;
    this.loading = true;
    try {
      await this.authService.registerWithEmail(this.credentials.email, this.credentials.password, this.credentials.displayName);
      this.toastService.show('Account created successfully!', 'success');
      this.checkDependencies();
    } catch (error: any) {
      this.toastService.show(error.message, 'error');
    } finally {
      this.loading = false;
    }
  }

  private checkDependencies() {
    // In a real implementation, you would get the machineId from the local agent.
    // For now, we'll use a placeholder.
    const machineId = 'local-machine'; 
    this.dependencyCheckService.checkNmapStatus(machineId).subscribe(isInstalled => {
      if (!isInstalled) {
        this.toastService.show('Nmap is not installed. Please install it to use the scanning features.', 'warning');
      }
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
