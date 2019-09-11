import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class ResumeService {
  private _userName: string;

  get userName(): string {
    return this._userName;
  }

  constructor(private http: Http) {}

  getJSON(name: string): Observable<any> {
    this._userName = name || 'carla';
    return this.http.get(`./assets/${name}/resume.json`);
  }
}
