import Character from './Character';
import Monster from './Monster';
import Battle, { PVP, PVE } from './Battle';
import Dragon from './Dragon';

const player1 = new Character('Dwarf');
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
player1.levelUp();
const player2 = new Character('Elf');
const player3 = new Character('Halfing');

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3 };

export { monster1, monster2 };

export { pvp };

export { pve };

export { runBattles };
