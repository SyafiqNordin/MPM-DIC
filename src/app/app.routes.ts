import { Routes } from '@angular/router';

// app.routes.ts
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/project-creation',
    pathMatch: 'full',
  },
  {
    path: 'project-creation',
    children: [
      {
        path: '',
        redirectTo: 'general-information',
        pathMatch: 'full',
      },
      {
        path: 'general-information',
        loadComponent: () =>
          import(
            './modules/sanctioning-and-execution/project-creation/general-information/general-information.component'
          ).then((m) => m.GeneralInformation),
      },
      {
        path: 'pac-information',
        loadComponent: () =>
          import(
            './modules/sanctioning-and-execution/project-creation/pac-information/pac-information.component'
          ).then((m) => m.PacInfo),
      },
      {
        path: 'linked-project',
        loadComponent: () =>
          import(
            './modules/sanctioning-and-execution/project-creation/linked-project/linked-project.component'
          ).then((m) => m.LinkedProject),
      },
    ],
  },
  {
    path: 'asset-hierarchy',
    loadComponent: () =>
      import(
        './modules/system-configuration/asset-hierarchy/asset-hierarchy.component'
      ).then((m) => m.AssetHierarchyComponent),
  }
];
