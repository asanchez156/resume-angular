import { ResumeService } from './services/resume.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { MatCardModule } from '@angular/material/card';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { mySiteRoutes } from './site.routes';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    // routes
    mySiteRoutes,
    // translate
    TranslateModule
  ],
  declarations: [
    SiteComponent,
    HeaderComponent,
    ProfileComponent
  ],
  providers: [
    ResumeService
  ]
})
export class SiteModule { }
