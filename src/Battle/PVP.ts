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

  // fight(): number {
    
  // }

  //   if (super.fight() === 1) {
  //     this.playerOne;
  //   }
  //   this.playerTwo
}