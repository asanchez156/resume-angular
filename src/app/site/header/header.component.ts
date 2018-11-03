import { PersonalInfoModel } from './../../../core/models/personal-info.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() personalInfo: PersonalInfoModel;

  constructor() { }

  ngOnInit() {
  }

  mailTo() {
    window.location.href = `mailto:${this.personalInfo.contactInfo.email.address}`;
  }
  openPage() {
    window.open(this.personalInfo.contactInfo.webSite.url);
  }

}
