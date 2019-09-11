import { Component, Input } from '@angular/core';
import { WindowRef } from 'src/app/shared/services/window-ref.service';
import { IPersonalInfo } from 'src/core/interfaces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  @Input() personalInfo: IPersonalInfo;
  constructor(public windowRef: WindowRef) {}
}
