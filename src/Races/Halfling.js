"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Race_1 = require("./Race");
class Halfling extends Race_1.default {
    constructor(name, dexterity) {
        super(name, dexterity);
        this._maxLifePoints = 60;
        Halfling._createdRacesInstances += 1;
    }
    static createdRacesInstances() {
        return Halfling._createdRacesInstances;
    }
    get maxLifePoints() {
        return this._maxLifePoints;
    }
}
exports.default = Halfling;
Halfling._createdRacesInstances = 0;
