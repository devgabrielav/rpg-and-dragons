import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static instancesCount = 0;

  constructor(name: string) {
    super(name);
    Warrior.instancesCount += 1;
  }

  get name(): string {
    return this.name;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior.instancesCount;
  }
}

export default Warrior;