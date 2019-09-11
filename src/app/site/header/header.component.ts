import { Component, Input } from '@angular/core';
import { WindowRef } from 'src/app/shared/services/window-ref.service';
import { IPersonalInfo } from 'src/core/interfaces';

import { ResumeService } from '../services/resume.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() personalInfo: IPersonalInfo;

  constructor(private resumeService: ResumeService, public windowRef: WindowRef) {}

  get currentResume(): string {
    return this.resumeService.activeResume;
  }

  get website() {
    return this.personalInfo.contactInfo.socialNetworks[
      this.personalInfo.contactInfo.socialNetworks.length - 1
    ];
  }

  mailTo() {
    this.windowRef.nativeWindow.location.href = `mailto:${this.personalInfo.contactInfo.email}`;
  }
}
