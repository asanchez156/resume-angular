import { IPersonalInfo } from '.';
import { ICourse } from './course.interface';
import { IEducationalBackground } from './educational-background.interface';
import { IOtherInfo } from './otherInfo.interface';
import { IPersonalExtraInfo } from './personal-extra-info.interface';
import { IProfessionalExperience } from './professional-experience.interface';

export interface IResumeLang {
  id: string;
  personalInfo: IPersonalInfo;
  personalExtraInfo: IPersonalExtraInfo;
  edutationalBackGround: IEducationalBackground[];
  courses: ICourse[];
  professionalExperience: IProfessionalExperience[];
  otherInformation: IOtherInfo;
}
