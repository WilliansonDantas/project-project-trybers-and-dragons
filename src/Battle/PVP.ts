import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private playerOne: Fighter;
  private playerTwo: Fighter;

  constructor(playerOne: Fighter, playerTwo: Fighter) {
    super(playerOne);
    this.playerOne = playerOne;
    this.playerTwo = playerTwo;
  }
  
  fight(): number {
    while (this.playerOne.lifePoints > 0 && this.playerTwo.lifePoints > 0) {
      this.playerOne.attack(this.playerTwo);
      this.playerTwo.attack(this.playerOne);
    }
    return super.fight();
  }
}