import { Component, Input } from '@angular/core';
import { WindowRef } from 'src/app/shared/services/window-ref.service';
import { ISocialNetwork } from 'src/core/interfaces';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss'],
})
export class SocialNetworksComponent {
  @Input() socialNetworks: ISocialNetwork[];

  constructor(public windowRef: WindowRef) {}
}
