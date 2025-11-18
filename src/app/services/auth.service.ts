import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './toast.service';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  authState,
  signInWithPopup,
  sendEmailVerification,
  updateProfile,
} from '@angular/fire/auth';
import { User, GoogleAuthProvider } from 'firebase/auth';
import { Observable, map } from 'rxjs';
import { AgentsService, Agent } from './agents.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth: Auth = inject(Auth);
  private router: Router = inject(Router);
  private agentsService: AgentsService = inject(AgentsService);
  private toastService: ToastService = inject(ToastService);

  currentUser: Observable<User | null> = authState(this.auth);

  isAuthenticated(): Observable<boolean> {
    return this.currentUser.pipe(map((user) => !!user));
  }

  async loginWithEmail(email: string,password: string): Promise<void> {
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth, email, password);
      if (userCredential.user) {
        this.toastService.show('Logged in successfully!', 'success');
        this.router.navigate(['/mainlayout']);
      }
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }

  async registerWithEmail(email: string, password: string, displayName: string): Promise<void> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);
      const user = userCredential.user;
      if (user) {
        await updateProfile(user, { displayName });
        await sendEmailVerification(user);
        const agent: Agent = {
          uid: user.uid,
          email: user.email!,
          displayName: displayName,
          role: 'agent',
        };
        this.agentsService.addAgent(agent).subscribe({
          next: () => this.router.navigate(['/mainlayout']),
          error: (err) => console.error('Failed to add agent:', err),
        });
      }
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  }

  async loginWithGoogle(): Promise<void> {
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(this.auth, provider);
      const user = userCredential.user;
      if (user) {
        const agent: Agent = {
          uid: user.uid,
          email: user.email!,
          displayName: user.displayName || '',
        };
        this.agentsService.addAgent(agent).subscribe({
          next: () => this.router.navigate(['/mainlayout']),
          error: (err) => console.error('Failed to add agent:', err),
        });
      }
    } catch (error) {
      console.error('Google login failed:', error);
      throw error;
    }
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
    this.router.navigate(['/log-in']);
  }

}
