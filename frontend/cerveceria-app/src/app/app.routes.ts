// src/app/app.routes.ts
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'catalog',
    loadComponent: () =>
      import('./components/beer-catalog/beer-catalog.component').then(m => m.BeerCatalogComponent)
  },
  {
    path: 'add-beer',
    loadComponent: () =>
      import('./components/add-beer/add-beer.component').then(m => m.AddBeerComponent)
    // Este componente lo creará el Miembro 4
  }
];
