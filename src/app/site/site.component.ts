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

  resume: ResumeLangModel;
  loading = true;

  fullName = 'fullname';
  email = 'email';
  website = 'website';

  year = 'year';
  country = 'country';
  city = 'city';

  constructor(private resumeService: ResumeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const resumeName = params.get('name');
      const resumeLang = params.get('lang');
      console.log('site');
      this.resumeService.getJSON(resumeName).subscribe((response: Response) => {
        const resume = response.json().resume;
        if (resume[resumeLang]) {
          this.resume = resume[resumeLang];
          this.resume.personalInfo = resume.personalInfo;
          this.setVars();
        } else {
          this.message = resumeLang + ' language does not exist!';
        }
        console.log(this.resume);
        this.loading = false;
      }, err => {
        this.loading = false;
        if (!resumeName) {
          this.message = 'Go to: \' resume/resume-name/lang \'';
        } else {
          this.message = resumeName + ' resume does not exist!';
        }
      });
    });
  }

  private setVars() {
    this.fullName = this.resume.personalInfo.name + ' ' + this.resume.personalInfo.surname;
  }

}
