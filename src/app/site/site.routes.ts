import { Routes, RouterModule } from '@angular/router';
import { SiteComponent } from './site.component';

export const ROUTES: Routes = [
  {
    path: 'resume',
    component: SiteComponent
  },
  {
    path: 'resume/:name/:lang',
    component: SiteComponent
  }
];


export const mySiteRoutes = RouterModule.forChild(ROUTES);
