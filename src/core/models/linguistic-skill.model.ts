export class LinguisticSkillModel {
  private _linguisticSkill: number;
  private _motherTongue: boolean;
  private _name: string;
  private _level: string;


	constructor(linguisticSkill: number, motherTongue: boolean, name: string, level: string) {
		this._linguisticSkill = linguisticSkill;
		this._motherTongue = motherTongue;
		this._name = name;
		this._level = level;
	}

    /**
     * Getter linguisticSkill
     * @return {number}
     */
	public get linguisticSkill(): number {
		return this._linguisticSkill;
	}

    /**
     * Getter motherTongue
     * @return {boolean}
     */
	public get motherTongue(): boolean {
		return this._motherTongue;
	}

    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter level
     * @return {string}
     */
	public get level(): string {
		return this._level;
	}

    /**
     * Setter linguisticSkill
     * @param {number} value
     */
	public set linguisticSkill(value: number) {
		this._linguisticSkill = value;
	}

    /**
     * Setter motherTongue
     * @param {boolean} value
     */
	public set motherTongue(value: boolean) {
		this._motherTongue = value;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter level
     * @param {string} value
     */
	public set level(value: string) {
		this._level = value;
	}
	
}