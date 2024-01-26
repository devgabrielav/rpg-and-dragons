import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor(lifePoints = 85, strength = 63) {
    this._lifePoints = lifePoints;
    this._strength = strength;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  protected set lifePoints(value: number) {
    this._lifePoints = value;
  }

  get strength(): number {
    return this._strength;
  }

  protected set strength(value: number) {
    this._strength = value;
  }

  receiveDamage(attackPoints: number): number {
    this.lifePoints = this.lifePoints - attackPoints <= 0 ? -1 : this.lifePoints -= attackPoints;
    return this.lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}

export default Monster;