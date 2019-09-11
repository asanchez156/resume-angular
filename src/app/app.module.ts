import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { AppTranslateConfigService } from './config/multi-translate-http-loader';
import { ViewConfig } from './config/view.config';
import { ResumeModule } from './site/resume.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    TranslateModule.forRoot(AppTranslateConfigService.Loader()),
    ResumeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translateService: TranslateService) {
    const userLang = translateService.getBrowserLang();

    this.translateService.setDefaultLang(ViewConfig.DEFAULT_LANG);
    // if not available use default languaje, English
    const usedLanguage = ViewConfig.SUPPORTED_LANGUAGES[userLang]
      ? userLang
      : ViewConfig.DEFAULT_LANG;
    this.translateService.use(usedLanguage);
  }
}
