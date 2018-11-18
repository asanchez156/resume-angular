import { Routes, RouterModule } from '@angular/router';
import { ResumeComponent } from './resume.component';

export const ROUTES: Routes = [
  {
    path: 'resume',
    component: ResumeComponent
  },
  {
    path: 'resume/:name/:lang',
    component: ResumeComponent
  },
  {
    path: 'resume/:name',
    component: ResumeComponent
  }
];


export const myResumeRoutes = RouterModule.forChild(ROUTES);
