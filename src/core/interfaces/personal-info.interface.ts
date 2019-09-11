import { IContactInfo } from './contact-info.interface';

export interface IPersonalInfo {
  id?: string;
  firstName: string;
  lastName: string;
  role: string;
  birthDate: string;
  city: string;
  image: string; // path to image
  contactInfo: IContactInfo;
}
