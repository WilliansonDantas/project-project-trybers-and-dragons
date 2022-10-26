"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Battle_1 = require("./Battle");
class PVP extends Battle_1.default {
    constructor(playerOne, playerTwo) {
        super(playerOne);
        this.playerOne = playerOne;
        this.playerTwo = playerTwo;
    }
    fight() {
        while (this.playerOne.lifePoints > 0 && this.playerTwo.lifePoints > 0) {
            this.playerOne.attack(this.playerTwo);
            this.playerTwo.attack(this.playerOne);
        }
        return super.fight();
    }
}
exports.default = PVP;
