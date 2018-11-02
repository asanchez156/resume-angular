import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { SiteModule } from './site/site.module';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    SiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
