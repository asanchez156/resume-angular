import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslateModule } from '@ngx-translate/core';

import { SharedModule } from '../shared/shared.module';

import { HeaderComponent } from './header/header.component';
import { LanguagesComponent } from './languages/languages.component';
import { ResumeComponent } from './layout/resume.component';
import { ProfileComponent } from './profile/profile.component';
import { myResumeRoutes } from './resume.routes';
import { ResumeService } from './services/resume.service';
import { SocialNetworksComponent } from './social-networks/social-networks.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,

    // Angular Components
    MatCardModule,
    MatButtonModule,
    MatTabsModule,

    // routes
    myResumeRoutes,
    // translate
    TranslateModule,
  ],
  declarations: [
    ResumeComponent,
    HeaderComponent,
    ProfileComponent,
    SocialNetworksComponent,
    LanguagesComponent,
  ],
  providers: [ResumeService],
})
export class ResumeModule {}
