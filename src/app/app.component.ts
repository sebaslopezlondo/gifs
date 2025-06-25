import { Component } from '@angular/core';
import { SidenavComponent } from '../shared/components/sidenav/sidenav.component';

@Component({
  selector: 'app-root',
  imports: [SidenavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'gift';
}
