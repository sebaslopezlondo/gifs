import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./gifs/pages/dashboard/dashboard.component'),
  },
  {
    path: 'search',
    loadComponent: () => import('./gifs/pages/search/search.component'),
  },
  {
    path: 'trending',
    loadComponent: () => import('./gifs/pages/trending/trending.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
