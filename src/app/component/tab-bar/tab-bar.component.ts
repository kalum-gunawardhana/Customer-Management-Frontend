import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe, CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-tab-bar',
  imports: [MatTabsModule, AsyncPipe, CommonModule, RouterModule],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.css'
})
export class TabBarComponent {
  tabs = [
    { label: 'Add', route: 'add-cus' },
    { label: 'Search', route: 'search-cus' },
    { label: 'Update', route: 'update-cus' },
    { label: 'View/Delete', route: 'view-cus' },
  ];

  constructor(private router: Router) { }

  onTabChange(event: any) {
    const selectedTab = this.tabs[event.index];
    this.router.navigate([selectedTab.route]);
  }
}
