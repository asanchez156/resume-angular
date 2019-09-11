import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent {
  @Input() languages: string[];

  constructor(private resumeService: ResumeService,
              private router: Router) {
    console.log('LANG', this.activeLanguage);
  }

  get activeLanguage(): string {
    return this.resumeService.activeLanguage;
  }

  changeLanguage(lang: string) {
    this.router.navigate(['/resume', this.resumeService.activeResume, lang]);
  }
}
