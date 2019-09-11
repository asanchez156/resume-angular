import { ILinguisticSkill } from './linguistic-skill.interface';
import { IVehicle } from './vehicle.interface';

export interface IOtherInfo {
  id?: string;
  skills: string[];
  linguisticSkills: ILinguisticSkill[];
  vehicles: IVehicle[];
}
