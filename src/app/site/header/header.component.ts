import { Component, Input } from '@angular/core';

import { PersonalInfoModel } from './../../../core/models/personal-info.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() personalInfo: PersonalInfoModel;

  get website() {
    return this.personalInfo.contactInfo.socialNetworks[
      this.personalInfo.contactInfo.socialNetworks.length - 1
    ];
  }

  mailTo() {
    window.location.href = `mailto:${this.personalInfo.contactInfo.email.address}`;
  }
  openPage() {
    window.open(this.website.url);
  }
}
