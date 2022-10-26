import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private Character: Fighter;
  private Monsters: Fighter[] | SimpleFighter[] = [];

  constructor(Character: Fighter, Monsters: Fighter[] | SimpleFighter[]) {
    super(Character);
    this.Character = Character;
    this.Monsters = Monsters;
  }
  
  fight(): number {
    let boolCharacter = this.Character.lifePoints;
    let boolMonster = true;
    while (boolCharacter > 0 
      && boolMonster) {
      this.Monsters.forEach((monster) => {
        monster.attack(this.Character); 
        this.Character.attack(monster);
      });
      boolCharacter = this.Character.lifePoints;
      boolMonster = this.Monsters.some((monster) => monster.lifePoints > 0);
    }
    return super.fight();
  }
}