export class PersonalExtraInfoModel {
  private _personalExtraInfo: number;
  private _country: string;
  private _aboutMe: string;

  constructor(personalExtraInfo: number, country: string, aboutMe: string) {
    this._personalExtraInfo = personalExtraInfo;
    this._country = country;
    this._aboutMe = aboutMe;
  }

  /**
   * Getter personalExtraInfo
   * @return {number}
   */
  public get personalExtraInfo(): number {
    return this._personalExtraInfo;
  }

  /**
   * Getter country
   * @return {string}
   */
  public get country(): string {
    return this._country;
  }

  /**
   * Getter aboutMe
   * @return {string}
   */
  public get aboutMe(): string {
    return this._aboutMe;
  }

  /**
   * Setter personalExtraInfo
   * @param {number} value
   */
  public set personalExtraInfo(value: number) {
    this._personalExtraInfo = value;
  }

  /**
   * Setter country
   * @param {string} value
   */
  public set country(value: string) {
    this._country = value;
  }

  /**
   * Setter aboutMe
   * @param {string} value
   */
  public set aboutMe(value: string) {
    this._aboutMe = value;
  }
}
