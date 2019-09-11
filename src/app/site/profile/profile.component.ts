import { Component, Input, OnInit } from '@angular/core';
import { PersonalInfoModel } from 'src/core/models';

import { ResumeService } from '../services/resume.service';

import { PersonalExtraInfoModel } from './../../../core/models/personal-extra-info.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  @Input() personalInfo: PersonalInfoModel;
  @Input() personalExtraInfo: PersonalExtraInfoModel;

  userName: string;

  constructor(private resumeService: ResumeService) {}

  ngOnInit() {
    this.userName = this.resumeService.userName;
  }
}
