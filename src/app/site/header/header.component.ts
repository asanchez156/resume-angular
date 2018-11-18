import { PersonalInfoModel } from './../../../core/models/personal-info.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() personalInfo: PersonalInfoModel;

  get website() {
    return this.personalInfo.contactInfo.socialNetworks[this.personalInfo.contactInfo.socialNetworks.length - 1];
  }

  constructor() { }

  ngOnInit() {
  }

  mailTo() {
    window.location.href = `mailto:${this.personalInfo.contactInfo.email.address}`;
  }
  openPage() {
    window.open(this.website.url);
  }

}
