import { Component } from '@angular/core';

@Component({
  selector: 'app-system-health-chart',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <h4>System Health Chart</h4>
      <div class="chart-placeholder">[Chart Placeholder]</div>
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
    .chart-placeholder {
      background-color: #3a3a3a;
      height: 300px; /* Increased height */
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ccc;
    }
  `]
})
export class SystemHealthChartComponent {

}