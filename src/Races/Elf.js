"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Elf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 99;
        Elf._createdRacesInstances += 1;
    }
    static createdRacesInstances() {
        return Elf._createdRacesInstances;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Elf;
Elf._createdRacesInstances = 0;
