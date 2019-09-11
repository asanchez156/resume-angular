import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { ResumeComponent } from './resume.component';
import { myResumeRoutes } from './resume.routes';
import { ResumeService } from './services/resume.service';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    // routes
    myResumeRoutes,
    // translate
    TranslateModule,
  ],
  declarations: [ResumeComponent, HeaderComponent, ProfileComponent],
  providers: [ResumeService],
})
export class ResumeModule {}
