import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ViewConfig } from 'src/app/config/view.config';
import { IResume, IResumeLang } from 'src/core/interfaces';

import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  message: string;

  private _resume: IResumeLang;
  loading = true;
  languages = [];
  get activeLanguage(): string {
    return this.resumeService.activeLanguage;
  }

  get resume(): IResumeLang {
    return this._resume;
  }

  constructor(
    private resumeService: ResumeService,
    private translateService: TranslateService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: any) => {
      const resumeName = params.get('name');
      this.resumeService.activeResume = resumeName;
      const resumeLang = params.get('lang');
      this.resumeService.getJSON(resumeName).subscribe(
        (response: Response) => {
          try {
            const resume = response.json().resume as IResume;
            let resumeLanguage = this.getLanguageById(resume.languages, resumeLang);
            // check if the language is in the resume
            if (resumeLanguage) {
              this.resumeService.activeLanguage = ViewConfig.SUPPORTED_LANGUAGES[resumeLang]
                ? resumeLang
                : ViewConfig.DEFAULT_LANG;
            }
            this.translateService.use(this.activeLanguage);
            // get resume language and add personal info;
            resumeLanguage = this.getLanguageById(
              resume.languages,
              this.resumeService.activeLanguage,
            );
            this._resume = resumeLanguage;
            this._resume.personalInfo = resume.personalInfo;

            this.languages = resume.languages.reduce(
              (languages: string[], currentValue: IResumeLang) =>
                languages.concat([currentValue.id]),
              [],
            );

            this.loading = false;
          } catch (error) {
            this.router.navigate(['/resume', ViewConfig.DEFAULT_RESUME]);
          }
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

  private getLanguageById(languages: IResumeLang[], id: string): IResumeLang {
    const resumeLanguages = languages.filter((lang: IResumeLang) => lang.id === id);
    return resumeLanguages[0];
  }
}
