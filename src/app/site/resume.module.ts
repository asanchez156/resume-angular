import { ResumeService } from './services/resume.service';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumeComponent } from './resume.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { myResumeRoutes } from './resume.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    // routes
    myResumeRoutes,
    // translate
    TranslateModule
  ],
  declarations: [
    ResumeComponent,
    HeaderComponent,
    ProfileComponent
  ],
  providers: [
    ResumeService
  ]
})
export class ResumeModule { }
