import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

// app.routes.ts
export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'mpm-focal',
        loadComponent: () =>
          import('./modules/mpm-focal/mpm-focal').then((m) => m.MPMFocal),
      },
      {
        path: 'mpm-focal/pac-info',
        loadComponent: () =>
          import('./modules/mpm-focal/project-creation/pac-info/pac-info').then(
            (m) => m.PacInfo
          ),
      },
      {
        path: 'mpm-focal/linked-project',
        loadComponent: () =>
          import(
            './modules/mpm-focal/project-creation/linked-project/linked-project'
          ).then((m) => m.LinkedProject),
      },
      // other routes here
    ],
  },
];
