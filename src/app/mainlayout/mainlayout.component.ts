import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../toast/toast.component';
import { DependencyCheckService } from '../services/dependency-check.service';

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [RouterModule, CommonModule, ToastComponent],
  templateUrl: './mainlayout.component.html',
  styleUrls: ['./mainlayout.component.scss']
})
export class MainlayoutComponent implements OnInit {
  isSidenavCollapsed = true;

  constructor(private dependencyCheckService: DependencyCheckService) {}

  ngOnInit() {
    this.dependencyCheckService.checkDependencies();
  }

  toggleSidenav() {
    this.isSidenavCollapsed = !this.isSidenavCollapsed;
  }
}
