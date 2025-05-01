import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabBarComponent } from "./component/tab-bar/tab-bar.component";
import { ViewCusComponent } from "./component/view-cus/view-cus.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TabBarComponent, ViewCusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Customer-Management-Frontend';
}
