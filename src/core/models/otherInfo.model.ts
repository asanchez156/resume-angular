import { LinguisticSkillModel } from './linguistic-skill.model';
import { VehicleModel } from './vehicle.model';

export class OtherInfoModel {
  // private _otherInfo: number;
  private _skills: string[];
  private _linguisticSkills: LinguisticSkillModel[];
  private _vehicles: VehicleModel[];

  constructor(
    skills: string[],
    linguisticSkills: LinguisticSkillModel[],
    vehicles: VehicleModel[],
  ) {
    this._skills = skills;
    this._linguisticSkills = linguisticSkills;
    this._vehicles = vehicles;
  }

  /**
   * Getter skills
   * @return {string[]}
   */
  public get skills(): string[] {
    return this._skills;
  }

  /**
   * Getter linguisticSkills
   * @return {LinguisticSkillModel[]}
   */
  public get linguisticSkills(): LinguisticSkillModel[] {
    return this._linguisticSkills;
  }

  /**
   * Getter vehicles
   * @return {VehicleModel[]}
   */
  public get vehicles(): VehicleModel[] {
    return this._vehicles;
  }

  /**
   * Setter skills
   * @param {string[]} value
   */
  public set skills(value: string[]) {
    this._skills = value;
  }

  /**
   * Setter linguisticSkills
   * @param {LinguisticSkillModel[]} value
   */
  public set linguisticSkills(value: LinguisticSkillModel[]) {
    this._linguisticSkills = value;
  }

  /**
   * Setter vehicles
   * @param {VehicleModel[]} value
   */
  public set vehicles(value: VehicleModel[]) {
    this._vehicles = value;
  }
}
