import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';

@Injectable()
export class ResumeService {

  constructor(private http: Http) {
  }

  getJSON(name): Observable<any> {
      return this.http.get(`./assets/${name}/resume.json`);

  }
}
