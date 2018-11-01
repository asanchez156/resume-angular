import { SiteComponent } from './site/site.component';
import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'resume',
    pathMatch: 'full'
  },
  {
    path: 'resume',
    component: SiteComponent
  }
];
