import { ContactInfoModel } from './contact-info.model';

export class PersonalInfoModel {
  private _personalInfo: number;
  private _name: string;
  private _surname: string;
  private _birthDate: string;
  private _city: string;
  private _image: string; // path to image
  private _contactInfo: ContactInfoModel;

  constructor(
    personalInfo: number,
    name: string,
    surname: string,
    birthDate: string,
    city: string,
    image: string,
    contactInfo: ContactInfoModel,
  ) {
    this._personalInfo = personalInfo;
    this._name = name;
    this._surname = surname;
    this._birthDate = birthDate;
    this._city = city;
    this._image = image;
    this._contactInfo = contactInfo;
  }

  /**
   * Getter personalInfo
   * @return {number}
   */
  public get personalInfo(): number {
    return this._personalInfo;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter surname
   * @return {string}
   */
  public get surname(): string {
    return this._surname;
  }

  /**
   * Getter birthDate
   * @return {string}
   */
  public get birthDate(): string {
    return this._birthDate;
  }

  /**
   * Getter city
   * @return {string}
   */
  public get city(): string {
    return this._city;
  }

  /**
   * Getter image
   * @return {string}
   */
  public get image(): string {
    return this._image;
  }

  /**
   * Getter contactInfo
   * @return {ContactInfoModel}
   */
  public get contactInfo(): ContactInfoModel {
    return this._contactInfo;
  }

  /**
   * Setter personalInfo
   * @param {number} value
   */
  public set personalInfo(value: number) {
    this._personalInfo = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter surname
   * @param {string} value
   */
  public set surname(value: string) {
    this._surname = value;
  }

  /**
   * Setter birthDate
   * @param {string} value
   */
  public set birthDate(value: string) {
    this._birthDate = value;
  }

  /**
   * Setter city
   * @param {string} value
   */
  public set city(value: string) {
    this._city = value;
  }

  /**
   * Setter image
   * @param {string} value
   */
  public set image(value: string) {
    this._image = value;
  }

  /**
   * Setter contactInfo
   * @param {ContactInfoModel} value
   */
  public set contactInfo(value: ContactInfoModel) {
    this._contactInfo = value;
  }
}
