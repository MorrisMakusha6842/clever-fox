import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScanModalComponent } from '../quick-scan/scan-modal.component';

@Component({
  selector: 'app-latest-alerts',
  standalone: true,
  imports: [CommonModule, ScanModalComponent],
  template: `
    <div class="card">
      <div class="card-header">
        <h4>Latest Alerts</h4>
        <button class="icon-button" (click)="openModal()">
          <img src="assets/icons/modal-list-svgrepo-com.svg" alt="Open Panel" class="icon">
        </button>
      </div>
      <p class="alert">High severity alert on device X</p>
    </div>
    <app-scan-modal [isOpen]="isModalOpen" (close)="closeModal()"></app-scan-modal>
  `,
  styles: [`
    .card {
      background-color: #2a2a2a;
      border: 1px solid #444;
      border-radius: 0;
      padding: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      height: 100%;
      display: flex;
      flex-direction: column;
    }
    .card-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    h4 {
      margin-top: 0;
      color: var(--white);
    }
    .alert {
      color: #dc3545;
      font-weight: 600;
    }
    .icon-button {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0;
    }
    .icon {
      width: 24px;
      height: 24px;
      filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(180deg) brightness(120%) contrast(100%);
    }
  `]
})
export class LatestAlertsComponent {
  isModalOpen = false;

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}