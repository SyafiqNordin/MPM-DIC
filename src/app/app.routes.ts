import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell';

// app.routes.ts
export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'mpm-focal',
        loadComponent: () =>
          import('./pages/project-creation/mpm-focal/mpm-focal').then(
            (m) => m.MPMFocal
          ),
      },
      {
        path: 'mpm-focal/pac-info',
        loadComponent: () =>
          import('./pages/project-creation/mpm-focal/pac-info/pac-info').then(
            (m) => m.PacInfo
          ),
      },
      {
        path: 'mpm-focal/linked-project',
        loadComponent: () =>
          import(
            './pages/project-creation/mpm-focal/linked-project/linked-project'
          ).then((m) => m.LinkedProject),
      },
      // other routes here
    ],
  },
];
