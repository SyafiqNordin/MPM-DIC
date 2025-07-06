import { Routes } from '@angular/router';
import { ShellComponent } from './layout/shell/shell';

// app.routes.ts
export const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'dashboard',
        loadComponent: () =>
          import('./pages/project-creation/mpm-focal/mpm-focal').then(
            (m) => m.MPMFocal
          ),
      },
      // other routes here
    ],
  },
];
