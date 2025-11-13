import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  template: `
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss'],
 
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'my-pos';
  showNavbar = true;

  // Routes where navbar should be hidden
  private hideNavbarRoutes = [
    '/get-started',
    '/landing-page',
    '/log-in',
    '/create-user-account',
    '/video-output',
    '/icd',
    '/icd-log-in',
    '/icd-sign-up',
    '/icd-dashbaord',
    '/main-layout'
  ];

  private routerSubscription: Subscription | null = null;
  private hasInitialRedirectHandled = false;

  constructor(
    public router: Router,
  ) {}

  ngOnInit() {
    // Subscribe to router events to track route changes
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.updateNavbarVisibility(event.url);
      });

    // Set initial navbar visibility based on current route
    this.updateNavbarVisibility(this.router.url);

    // FIXED: Wait for auth initialization before handling routes
   

    console.log('🚀 App component initialized, waiting for Firebase auth...');
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private updateNavbarVisibility(url: string) {
    // Extract the base path (remove query params and fragments)
    const basePath = url.split('?')[0].split('#')[0];
    
    // Check if current route should hide navbar
    this.showNavbar = !this.hideNavbarRoutes.some(route => {
      // Exact match for most routes
      if (basePath === route) {
        return true;
      }
      
      // Special handling for video-output with dynamic routes like /course/:id
      if (route === '/video-output' && (basePath.startsWith('/course/') || basePath === '/video-output')) {
        return true;
      }
      
      return false;
    });

    console.log('Current route:', basePath, 'Show navbar:', this.showNavbar);
  }

  private handleInitialRoute() {
    const currentRoute = this.router.url;
    
    
    // Define public routes that don't require authentication
    const publicRoutes = ['/log-in', '/create-user-account', '/get-started', '/landing-page'];
    const isPublicRoute = publicRoutes.some(route => currentRoute.startsWith(route));
    
    if (isPublicRoute) {
      console.log('✅ Public route access allowed:', currentRoute);
      return;
    }
    
    
  }
}