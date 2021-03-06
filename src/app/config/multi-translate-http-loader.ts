import { HttpClient } from '@angular/common/http';
import { TranslateLoader } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

export const TRANSLATE_FILES = {
  RESUME: 'resume',
};

const i18nFolder = './assets/i18n/';

export class MultiTranslateHttpLoader implements TranslateLoader {
  constructor(private http: HttpClient, public files: string[]) {}

  public getTranslation(lang: string): any {
    return forkJoin(
      this.files.map((file: string) => {
        return this.http.get(`${i18nFolder}${lang}/${file}.json`);
      }),
    ).pipe(
      map((response: any[]) => {
        return response.reduce((a: any[], b: any[]) => {
          return {...a, ...b};
        });
      }),
    );
  }
}

export function GetMultiTranslateHttpLoader(http: HttpClient, files: string[]) {
  return new MultiTranslateHttpLoader(http, Object.values(TRANSLATE_FILES));
}

export class AppTranslateConfigService {
  static Loader() {
    return {
      loader: {
        provide: TranslateLoader,
        useFactory: GetMultiTranslateHttpLoader,
        deps: [HttpClient],
      },
    };
  }
}
