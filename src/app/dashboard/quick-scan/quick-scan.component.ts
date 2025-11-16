import { Component } from '@angular/core';
import { ScanModalComponent } from './scan-modal.component';

@Component({
  selector: 'app-quick-scan',
  standalone: true,
  imports: [ScanModalComponent],
  template: `
    <div class="card">
      <div class="card-header">
        <h4>Quick Scan</h4>
        <button class="icon-button" (click)="openScanModal()">
          <img src="assets/icons/modal-list-svgrepo-com.svg" alt="Open Scan Panel" class="icon">
        </button>
      </div>
      <button class="scan-btn">Initiate Scan</button>
    </div>

    <app-scan-modal [isOpen]="isScanModalOpen" (close)="closeScanModal()"></app-scan-modal>
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
    .scan-btn {
      background-color: var(--orange);
      color: var(--dark-gray);
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
      margin-top: auto;
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
      filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(180deg) brightness(120%) contrast(100%); /* Adjust color to white */
    }
  `]
})
export class QuickScanComponent {
  isScanModalOpen = false;

  openScanModal() {
    this.isScanModalOpen = true;
  }

  closeScanModal() {
    this.isScanModalOpen = false;
  }
}