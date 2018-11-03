import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { SiteModule } from './site/site.module';
import { HttpModule } from '@angular/http';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { ViewConfig } from './config/view.config';
import { AppTranslateConfigService } from './config/multi-translate-http-loader';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    TranslateModule.forRoot(AppTranslateConfigService.Loader()),
    SiteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translateService: TranslateService) {
    const userLang = translateService.getBrowserLang();

    this.translateService.setDefaultLang(ViewConfig.DEFAULT_LANG);
    // if not available use default languaje, English
    const usedLanguage = ViewConfig.SUPPORTED_LANGUAGES[userLang] ? userLang : ViewConfig.DEFAULT_LANG;
    this.translateService.use(usedLanguage);
  }
}
