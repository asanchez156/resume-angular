import { TranslateLoader } from '@ngx-translate/core';
import { forkJoin } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

export const TRANSLATE_FILES = {
    SITE: 'site',
};

const i18nFolder = './assets/i18n/';

export class MultiTranslateHttpLoader implements TranslateLoader {
    constructor(
        private http: HttpClient,
        public files: string[]) { }

    public getTranslation(lang: string): any {
        return forkJoin(this.files.map(file => {
            return this.http.get(`${i18nFolder}${lang}/${file}.json`);
        })).pipe(map(response => {
            return response.reduce((a, b) => {
                return Object.assign(a, b);
            });
        }));
    }
}

export function GetMultiTranslateHttpLoader(http: HttpClient, files: string[]) {
    return new MultiTranslateHttpLoader(http, Object.values(TRANSLATE_FILES));
}

export class AppTranslateConfigService {

    static Loader () {
        return {
            loader: {
                provide: TranslateLoader,
                useFactory: GetMultiTranslateHttpLoader,
                deps: [HttpClient]
            }
        };
    }
}
