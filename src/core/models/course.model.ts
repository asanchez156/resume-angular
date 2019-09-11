export class CourseModel {
  private _course: number;
  private _name: string;
  private _startDate: string;
  private _endDate: string;
  private _centerDate: string;

  constructor(
    course: number,
    name: string,
    startDate: string,
    endDate: string,
    centerDate: string,
  ) {
    this._course = course;
    this._name = name;
    this._startDate = startDate;
    this._endDate = endDate;
    this._centerDate = centerDate;
  }

  /**
   * Getter course
   * @return {number}
   */
  public get course(): number {
    return this._course;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter startDate
   * @return {string}
   */
  public get startDate(): string {
    return this._startDate;
  }

  /**
   * Getter endDate
   * @return {string}
   */
  public get endDate(): string {
    return this._endDate;
  }

  /**
   * Getter centerDate
   * @return {string}
   */
  public get centerDate(): string {
    return this._centerDate;
  }

  /**
   * Setter course
   * @param {number} value
   */
  public set course(value: number) {
    this._course = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter startDate
   * @param {string} value
   */
  public set startDate(value: string) {
    this._startDate = value;
  }

  /**
   * Setter endDate
   * @param {string} value
   */
  public set endDate(value: string) {
    this._endDate = value;
  }

  /**
   * Setter centerDate
   * @param {string} value
   */
  public set centerDate(value: string) {
    this._centerDate = value;
  }
}
