"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Archetype_1 = require("./Archetype");
class Necromancer extends Archetype_1.default {
    constructor(name) {
        super(name);
        this._energyType = 'mana';
        Necromancer._createdArchetypeInstances += 1;
    }
    static createdArchetypeInstances() {
        return Necromancer._createdArchetypeInstances;
    }
    get energyType() {
        return this._energyType;
    }
}
exports.default = Necromancer;
Necromancer._createdArchetypeInstances = 0;
