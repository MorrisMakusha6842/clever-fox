import { Component } from '@angular/core';

@Component({
  selector: 'app-device-overview',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <h4>Device Overview</h4>
      <p>3 new devices detected</p>
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
    p {
      color: var(--white);
    }
  `]
})
export class DeviceOverviewComponent {

}