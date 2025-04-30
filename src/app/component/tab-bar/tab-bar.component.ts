import { Component } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';

export interface TabBar {
  label: string;
  content: string;
}

@Component({
  selector: 'app-tab-bar',
  imports: [MatTabsModule, AsyncPipe],
  templateUrl: './tab-bar.component.html',
  styleUrl: './tab-bar.component.css'
})
export class TabBarComponent {
  asyncTabs: Observable<TabBar[]>;

  constructor() {
    this.asyncTabs = new Observable((observer: Observer<TabBar[]>) => {
      setTimeout(() => {
        observer.next([
          { label: 'First', content: 'Content 1' },
          { label: 'Second', content: 'Content 2' },
          { label: 'Third', content: 'Content 3' },
        ]);
      }, 1000);
    });
  }
}
