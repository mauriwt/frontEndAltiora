import { Route } from '@angular/router';

export const RucRoutes: Route[] = [
  {
    path: '',
    loadChildren: () =>
      import('./pestanias/pestania.module').then(m => m.PestaniaModule)
  },
];
