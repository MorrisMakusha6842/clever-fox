import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainlayoutComponent } from './mainlayout/mainlayout.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FunctionalityComponent } from './functionality/functionality.component';
import { authGuard } from '../services/auth.guard';


export const routes: Routes = [
  // Public routes (no authentication required)
  {
    path: '',
    component: LandingPageComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard]
  },
  {
    path: 'mainlayout',
    component: MainlayoutComponent,
    canActivate: [authGuard]
  },
  {
    path: 'functionality',
    component: FunctionalityComponent
  },
  
];
  

