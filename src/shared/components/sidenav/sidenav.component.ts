import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    RouterModule,
    MatToolbarModule,
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
})
export class SidenavComponent {
  public userAccess = [
    {
      name: 'Inicio',
      icon: 'home',
      route: '/dashboard',
    },
    {
      name: 'Gifs Search',
      icon: 'search',
      route: '/search',
    },
    {
      name: 'Gifs Trending',
      icon: 'gifs',
      route: '/trending',
    },
  ];
}
