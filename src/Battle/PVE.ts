import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private character: Fighter;
  private monster: Fighter[] | SimpleFighter[];

  constructor(character: Fighter, monster: Fighter[] | SimpleFighter[]) {
    super(character);
    this.character = character;
    this.monster = monster;
  }

  fight(): number {
    do {
      this.monster.forEach((monster) => {
        this.character.attack(monster);
        monster.attack(this.character);
      });
    } while (this.character.lifePoints !== -1 && this.monster
      .every((monster) => monster.lifePoints !== 1));
    const number = super.fight();
    
    return number;
  }
}

export default PVE;