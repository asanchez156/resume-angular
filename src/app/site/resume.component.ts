import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ResumeLangModel } from 'src/core/models';

import { ViewConfig } from '../config/view.config';

import { ResumeService } from './services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  message: string;

  private _resume: ResumeLangModel;
  loading = true;

  get resume(): ResumeLangModel {
    return this._resume;
  }

  constructor(
    private resumeService: ResumeService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      const resumeName = params.get('name');
      const resumeLang = params.get('lang');
      this.resumeService.getJSON(resumeName).subscribe(
        (response: Response) => {
          const resume = response.json().resume;
          if (resume[resumeLang]) {
            const usedLanguage = ViewConfig.SUPPORTED_LANGUAGES[resumeLang]
              ? resumeLang
              : ViewConfig.DEFAULT_LANG;
            this.translateService.use(usedLanguage);
            resume[usedLanguage].personalInfo = resume.personalInfo;
            this._resume = resume[usedLanguage];
          } else {
            resume[ViewConfig.DEFAULT_LANG].personalInfo = resume.personalInfo;
            this._resume = resume[ViewConfig.DEFAULT_LANG];
          }
          this.loading = false;
        },
        (err: any) => {
          this.loading = false;
          if (!resumeName) {
            this.translateService
              .get('error.pathUse', { resume: resumeName })
              .subscribe((res: string) => (this.message = res));
          } else {
            this.translateService
              .get('error.resumeDoNotExist', { resume: resumeName })
              .subscribe((res: string) => (this.message = res));
          }
        },
      );
    });
  }
}
