import { Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly FAKE_USER = { name: 'John Doe', email: 'john.doe@example.com' };
  private readonly AUTH_STORAGE_KEY = 'my-pos-auth';

  currentUser = signal<any | null>(null);

  constructor(private router: Router) {
    const storedUser = localStorage.getItem(this.AUTH_STORAGE_KEY);
    if (storedUser) {
      this.currentUser.set(JSON.parse(storedUser));
    }
  }

  login() {
    // In a real app, you'd have actual authentication logic here.
    // For this example, we'll just set a fake user.
    localStorage.setItem(this.AUTH_STORAGE_KEY, JSON.stringify(this.FAKE_USER));
    this.currentUser.set(this.FAKE_USER);
    this.router.navigate(['/dashboard']);
  }

  logout() {
    localStorage.removeItem(this.AUTH_STORAGE_KEY);
    this.currentUser.set(null);
    this.router.navigate(['/log-in']);
  }

  isAuthenticated(): boolean {
    return !!this.currentUser();
  }
}
