import { Routes } from '@angular/router';

import { ResumeComponent } from './site/resume.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'resume',
    pathMatch: 'full',
  },
  {
    path: 'resume',
    component: ResumeComponent,
  },
];
