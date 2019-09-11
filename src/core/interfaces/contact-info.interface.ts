import { ISocialNetwork } from './social-network.interface';

export interface IContactInfo {
  id?: string;
  email: string;
  socialNetworks: ISocialNetwork[];
}
