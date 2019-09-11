import { Component, Input } from '@angular/core';
import { ISocialNetwork } from 'src/core/interfaces';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss'],
})
export class SocialNetworksComponent {
  @Input() socialNetworks: ISocialNetwork[];

  open(social: ISocialNetwork) {
    window.open(social.url);
  }
}
