import { Component } from '@angular/core';

@Component({
  selector: 'app-latest-alerts',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <h4>Latest Alerts</h4>
      <p class="alert">High severity alert on device X</p>
    </div>
  `,
  styles: [`
    .card {
      background-color: #2a2a2a;
      border: 1px solid #444;
      border-radius: 0;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }
    h4 {
      margin-top: 0;
      color: var(--white);
    }
    .alert {
      color: #dc3545;
      font-weight: 600;
    }
  `]
})
export class LatestAlertsComponent {

}