import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    const newNumber = getRandomInt(1, 10);
    this._dexterity = newNumber;
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  protected set lifePoints(damage: number) {
    this._lifePoints = damage;
  }

  get strength(): number {
    return this._strength;
  }

  protected set strength(value: number) {
    this._strength = value;
  }

  get defense(): number {
    return this._defense;
  }

  protected set defense(value: number) {
    this._defense = value;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  protected set dexterity(value: number) {
    this._dexterity = value;
  }

  get energy(): Energy {
    return {
      type_: this._energy.type_,
      amount: this._energy.amount,
    };
  }

  protected set energy(energy: Energy) {
    this._energy = {
      ...this._energy,
      amount: energy.amount,
    };
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  protected set maxLifePoints(value: number) {
    this._maxLifePoints = value;
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;

    if (damage > 0) {
      this.lifePoints = this.lifePoints - damage <= 0 ? -1 : this.lifePoints -= damage;
      return this.lifePoints;
    }
    this.lifePoints = this.lifePoints - 1 <= 0 ? -1 : this.lifePoints -= 1;
    return this.lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this.strength += getRandomInt(1, 10);
    this.dexterity += getRandomInt(1, 10);
    this.defense += getRandomInt(1, 10);
    this.energy = {
      type_: this._energy.type_,
      amount: 10,
    };
    const newMaxLife = getRandomInt(1, 10);
    this.maxLifePoints = this.maxLifePoints + newMaxLife > this._race.maxLifePoints 
      ? this.race.maxLifePoints : this.maxLifePoints += newMaxLife;

    this.lifePoints = this.maxLifePoints;
  }
}
