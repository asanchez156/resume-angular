export class ProfessionalExperienceModel {
  private _professionalExperience: number
  private _type: string;
  private _startDate: string;
  private _endDate: string;
  private _company: string;
  private _ocupation: string;
  private _description: string;

	constructor(type: string, startDate: string, endDate: string, company: string, ocupation: string, description: string) {
		this._type = type;
		this._startDate = startDate;
		this._endDate = endDate;
		this._company = company;
		this._ocupation = ocupation;
		this._description = description;
	}

    /**
     * Getter type
     * @return {string}
     */
	public get type(): string {
		return this._type;
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
     * Getter company
     * @return {string}
     */
	public get company(): string {
		return this._company;
	}

    /**
     * Getter ocupation
     * @return {string}
     */
	public get ocupation(): string {
		return this._ocupation;
	}

    /**
     * Getter description
     * @return {string}
     */
	public get description(): string {
		return this._description;
	}

    /**
     * Setter type
     * @param {string} value
     */
	public set type(value: string) {
		this._type = value;
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
     * Setter company
     * @param {string} value
     */
	public set company(value: string) {
		this._company = value;
	}

    /**
     * Setter ocupation
     * @param {string} value
     */
	public set ocupation(value: string) {
		this._ocupation = value;
	}

    /**
     * Setter description
     * @param {string} value
     */
	public set description(value: string) {
		this._description = value;
	}

}