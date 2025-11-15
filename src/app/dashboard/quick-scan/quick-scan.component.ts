import { Component } from '@angular/core';

@Component({
  selector: 'app-quick-scan',
  standalone: true,
  imports: [],
  template: `
    <div class="card">
      <h4>Quick Scan</h4>
      <button class="scan-btn">Initiate Scan</button>
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
    .scan-btn {
      background-color: var(--orange);
      color: var(--dark-gray);
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
    }
  `]
})
export class QuickScanComponent {

}