export class VehicleModel {
  private _vehicle: number;
  private _license: string;
  private _text: string;

  constructor(vehicle: number, license: string, text: string) {
    this._vehicle = vehicle;
    this._license = license;
    this._text = text;
  }

  /**
   * Getter vehicle
   * @return {number}
   */
  public get vehicle(): number {
    return this._vehicle;
  }

  /**
   * Getter license
   * @return {string}
   */
  public get license(): string {
    return this._license;
  }

  /**
   * Getter text
   * @return {string}
   */
  public get text(): string {
    return this._text;
  }

  /**
   * Setter vehicle
   * @param {number} value
   */
  public set vehicle(value: number) {
    this._vehicle = value;
  }

  /**
   * Setter license
   * @param {string} value
   */
  public set license(value: string) {
    this._license = value;
  }

  /**
   * Setter text
   * @param {string} value
   */
  public set text(value: string) {
    this._text = value;
  }
}
