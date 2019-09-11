import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import { ViewConfig } from 'src/app/config/view.config';

@Injectable()
export class ResumeService {
  private _userName: string;

  activeLanguage = ViewConfig.DEFAULT_LANG;
  activeResume = ViewConfig.DEFAULT_RESUME;

  get userName(): string {
    return this._userName;
  }

  constructor(private http: Http) {}

  getJSON(name: string): Observable<any> {
    this._userName = name || this.activeResume;
    return this.http.get(`./assets/${name}/resume.json?_cache_buster=${new Date().getTime()}`);
  }
}
