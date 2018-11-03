import { ViewConfig } from './../config/view.config';
import { TranslateService } from '@ngx-translate/core';
import { PersonalInfoModel } from './../../core/models/personal-info.model';
import { ResumeService } from './services/resume.service';
import { ResumeModel } from './../../core/models/resume.model';
import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { ResumeLangModel } from 'src/core/models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.scss']
})
export class SiteComponent implements OnInit {

  message: string;

  private _resume: ResumeLangModel;
  loading = true;

  get resume(): ResumeLangModel {
    return this._resume;
  }

  constructor(private resumeService: ResumeService,
    private translateService: TranslateService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const resumeName = params.get('name');
      const resumeLang = params.get('lang');
      console.log('site');
      this.resumeService.getJSON(resumeName).subscribe((response: Response) => {
        const resume = response.json().resume;
        if (resume[resumeLang]) {
          const usedLanguage = ViewConfig.SUPPORTED_LANGUAGES[resumeLang] ? resumeLang : ViewConfig.DEFAULT_LANG;
          this.translateService.use(usedLanguage);
          resume[usedLanguage].personalInfo = resume.personalInfo;
          this._resume = resume[usedLanguage];
        } else {
          resume[ViewConfig.DEFAULT_LANG].personalInfo = resume.personalInfo;
          this._resume = resume[ViewConfig.DEFAULT_LANG];
        }
        console.log(this._resume);
        this.loading = false;
      }, err => {
        this.loading = false;
        if (!resumeName) {
          this.translateService.get('error.pathUse', {resume: resumeName}).subscribe(res => this.message = res);
        } else {
          this.translateService.get('error.resumeDoNotExist', {resume: resumeName}).subscribe(res => this.message = res);
        }
      });
    });
  }

}
