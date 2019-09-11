import { PersonalInfoModel } from '.';
import { CourseModel } from './course.model';
import { EducationalBackgroundModel } from './educational-background.model';
import { OtherInfoModel } from './otherInfo.model';
import { PersonalExtraInfoModel } from './personal-extra-info.model';
import { ProfessionalExperienceModel } from './professional-experience.model';

export class ResumeLangModel {
  private _resumeLang: number;
  private _personalInfo: PersonalInfoModel;
  private _personalExtraInfo: PersonalExtraInfoModel;
  private _edutationalBackGround: EducationalBackgroundModel[];
  private _courses: CourseModel[];
  private _professionalExperience: ProfessionalExperienceModel[];
  private _otherInformation: OtherInfoModel;

  constructor(
    resumeLang: number,
    personalInfo: PersonalInfoModel,
    personalExtraInfo: PersonalExtraInfoModel,
    edutationalBackGround: EducationalBackgroundModel[],
    courses: CourseModel[],
    professionalExperience: ProfessionalExperienceModel[],
    otherInformation: OtherInfoModel,
  ) {
    this._resumeLang = resumeLang;
    this._personalInfo = personalInfo;
    this._personalExtraInfo = personalExtraInfo;
    this._edutationalBackGround = edutationalBackGround;
    this._courses = courses;
    this._professionalExperience = professionalExperience;
    this._otherInformation = otherInformation;
  }

  /**
   * Getter resumeLang
   * @return {number}
   */
  public get resumeLang(): number {
    return this._resumeLang;
  }

  /**
   * Getter personalInfo
   * @return {PersonalInfoModel}
   */
  public get personalInfo(): PersonalInfoModel {
    return this._personalInfo;
  }

  /**
   * Getter personalExtraInfo
   * @return {PersonalExtraInfoModel}
   */
  public get personalExtraInfo(): PersonalExtraInfoModel {
    return this._personalExtraInfo;
  }

  /**
   * Getter edutationalBackGround
   * @return {EducationalBackgroundModel[]}
   */
  public get edutationalBackGround(): EducationalBackgroundModel[] {
    return this._edutationalBackGround;
  }

  /**
   * Getter courses
   * @return {CourseModel[]}
   */
  public get courses(): CourseModel[] {
    return this._courses;
  }

  /**
   * Getter professionalExperience
   * @return {ProfessionalExperienceModel[]}
   */
  public get professionalExperience(): ProfessionalExperienceModel[] {
    return this._professionalExperience;
  }

  /**
   * Getter otherInformation
   * @return {OtherInfoModel}
   */
  public get otherInformation(): OtherInfoModel {
    return this._otherInformation;
  }

  /**
   * Setter resumeLang
   * @param {number} value
   */
  public set resumeLang(value: number) {
    this._resumeLang = value;
  }

  /**
   * Setter personalInfo
   * @param {PersonalInfoModel} value
   */
  public set personalInfo(value: PersonalInfoModel) {
    this._personalInfo = value;
  }

  /**
   * Setter personalExtraInfo
   * @param {PersonalExtraInfoModel} value
   */
  public set personalExtraInfo(value: PersonalExtraInfoModel) {
    this._personalExtraInfo = value;
  }

  /**
   * Setter edutationalBackGround
   * @param {EducationalBackgroundModel[]} value
   */
  public set edutationalBackGround(value: EducationalBackgroundModel[]) {
    this._edutationalBackGround = value;
  }

  /**
   * Setter courses
   * @param {CourseModel[]} value
   */
  public set courses(value: CourseModel[]) {
    this._courses = value;
  }

  /**
   * Setter professionalExperience
   * @param {ProfessionalExperienceModel[]} value
   */
  public set professionalExperience(value: ProfessionalExperienceModel[]) {
    this._professionalExperience = value;
  }

  /**
   * Setter otherInformation
   * @param {OtherInfoModel} value
   */
  public set otherInformation(value: OtherInfoModel) {
    this._otherInformation = value;
  }
}
