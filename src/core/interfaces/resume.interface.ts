import { IPersonalInfo } from './personal-info.interface';
import { IResumeLang } from './resume-lang.interface';

export interface IResume {
  id?: string;
  personalInfo: IPersonalInfo;
  languages: IResumeLang[];
}
