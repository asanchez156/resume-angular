import { ResumeComponent } from './site/resume.component';
import { Routes } from '@angular/router';


export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'resume',
    pathMatch: 'full'
  },
  {
    path: 'resume',
    component: ResumeComponent
  }
];
