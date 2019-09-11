export class SocialNetworkModel {
  private _socialNetwork: number;
  private _name: string;
  private _username: string;
  private _img: string;
  private _url: string;

  constructor(socialNetwork: number, name: string, username: string, img: string, url: string) {
    this._socialNetwork = socialNetwork;
    this._name = name;
    this._username = username;
    this._img = img;
    this._url = url;
  }

  /**
   * Getter socialNetwork
   * @return {number}
   */
  public get socialNetwork(): number {
    return this._socialNetwork;
  }

  /**
   * Getter name
   * @return {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter username
   * @return {string}
   */
  public get username(): string {
    return this._username;
  }

  /**
   * Getter img
   * @return {string}
   */
  public get img(): string {
    return this._img;
  }

  /**
   * Getter url
   * @return {string}
   */
  public get url(): string {
    return this._url;
  }

  /**
   * Setter socialNetwork
   * @param {number} value
   */
  public set socialNetwork(value: number) {
    this._socialNetwork = value;
  }

  /**
   * Setter name
   * @param {string} value
   */
  public set name(value: string) {
    this._name = value;
  }

  /**
   * Setter username
   * @param {string} value
   */
  public set username(value: string) {
    this._username = value;
  }

  /**
   * Setter img
   * @param {string} value
   */
  public set img(value: string) {
    this._img = value;
  }

  /**
   * Setter url
   * @param {string} value
   */
  public set url(value: string) {
    this._url = value;
  }
}
