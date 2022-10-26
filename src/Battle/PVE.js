"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVE extends Battle_1.default {
    constructor(Character, Monsters) {
        super(Character);
        this.Monsters = [];
        this.Character = Character;
        this.Monsters = Monsters;
    }
    fight() {
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
exports.default = PVE;
