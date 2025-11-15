import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mainlayout',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './mainlayout.component.html',
  styleUrl: './mainlayout.component.scss'
})
export class MainlayoutComponent {
  isSidenavCollapsed = false;

  toggleSidenav() {
    this.isSidenavCollapsed = !this.isSidenavCollapsed;
  }
}
