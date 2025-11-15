import { Component } from '@angular/core';

@Component({
  selector: 'app-system-health',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <h4>System Health</h4>
      <p class="status-ok">All systems operational</p>
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
    .status-ok {
      color: #28a745;
      font-weight: 600;
    }
  `]
})
export class SystemHealthComponent {

}