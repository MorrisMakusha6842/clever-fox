import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NmapService, NmapCommand } from '../../services/nmap.service';

@Component({
  selector: 'app-scan-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './scan-modal.component.html',
  styleUrl: './scan-modal.component.scss'
})
export class ScanModalComponent implements OnInit {
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();

  commands: NmapCommand[] = [];
  selectedCommand: string = '';
  target: string = '';
  scanResults: string = '';
  isLoading: boolean = false;

  constructor(private nmapService: NmapService) {}

  ngOnInit(): void {
    this.nmapService.getCommands().subscribe(commands => {
      this.commands = commands;
      if (this.commands.length > 0) {
        this.selectedCommand = this.commands[0].id;
      }
    });
  }

  onClose() {
    this.close.emit();
  }

  runScan() {
    if (!this.target) {
      this.scanResults = 'Please enter a target IP address or hostname.';
      return;
    }
    if (!this.selectedCommand) {
      this.scanResults = 'Please select a scan type.';
      return;
    }
    this.isLoading = true;
    this.scanResults = '';
    this.nmapService.runScan(this.selectedCommand, this.target).subscribe({
      next: (results) => {
        this.scanResults = results;
        this.isLoading = false;
      },
      error: (err) => {
        this.scanResults = `An error occurred: ${err.message}`;
        this.isLoading = false;
      }
    });
  }
}
