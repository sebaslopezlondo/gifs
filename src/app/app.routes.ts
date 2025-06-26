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
    path: 'history/:query',
    loadComponent: () => import('./gifs/pages/gif-history/gif-history.component'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
