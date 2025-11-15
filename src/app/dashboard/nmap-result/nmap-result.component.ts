import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nmap-result',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card accordion-item">
      <div class="accordion-header" (click)="toggleAccordion()">
        <h4>Nmap Results</h4>
        <span class="accordion-icon">{{ isOpen ? '-' : '+' }}</span>
      </div>
      <div class="accordion-content" *ngIf="isOpen">
        <p>Nmap results table placeholder.</p>
        <!-- Table content will go here -->
      </div>
    </div>
  `,
  styles: [`
    .card {
      background-color: #2a2a2a;
      border: 1px solid #444;
      border-radius: 0;
      padding: 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      margin-bottom: 10px;
    }
    .accordion-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 20px;
      cursor: pointer;
      background-color: #3a3a3a;
      border-bottom: 1px solid #444;
    }
    .accordion-header h4 {
      margin: 0;
      color: var(--white);
    }
    .accordion-icon {
      font-size: 1.5rem;
      color: var(--orange);
    }
    .accordion-content {
      padding: 15px 20px;
      color: var(--white);
    }
  `]
})
export class NmapResultComponent {
  isOpen = false;

  toggleAccordion() {
    this.isOpen = !this.isOpen;
  }
}