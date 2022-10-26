"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Dwarf extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 80;
        Dwarf._createdRacesInstances += 1;
    }
    static createdRacesInstances() {
        return Dwarf._createdRacesInstances;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Dwarf;
Dwarf._createdRacesInstances = 0;
