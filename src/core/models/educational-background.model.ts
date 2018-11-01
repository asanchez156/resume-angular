export class EducationalBackgroundModel {
  private _educationalBackground: number;
  private _name: string;
  private _startDate: string;
  private _endDate: string;
  private _center: string;
  private _description: string;

	constructor(educationalBackground: number, name: string, startDate: string, endDate: string, center: string, description: string) {
		this._educationalBackground = educationalBackground;
		this._name = name;
		this._startDate = startDate;
		this._endDate = endDate;
		this._center = center;
		this._description = description;
	}

    /**
     * Getter educationalBackground
     * @return {number}
     */
	public get educationalBackground(): number {
		return this._educationalBackground;
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
     * Getter center
     * @return {string}
     */
	public get center(): string {
		return this._center;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Setter educationalBackground
     * @param {number} value
     */
	public set educationalBackground(value: number) {
		this._educationalBackground = value;
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
     * Setter center
     * @param {string} value
     */
	public set center(value: string) {
		this._center = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

}