import { PersonalExtraInfoModel } from './../../../core/models/personal-extra-info.model';
import { Component, OnInit, Input } from '@angular/core';
import { PersonalInfoModel } from 'src/core/models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() personalInfo: PersonalInfoModel;
  @Input() personalExtraInfo: PersonalExtraInfoModel;

  constructor() { }

  ngOnInit() {
  }

}
