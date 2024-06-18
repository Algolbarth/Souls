import { Equipment } from './Class.js';

export class Equipments {
    list = [];

    get = function (level, slot) {
        return new Equipment(level, slot);
    };

    add = function (equipment) {
        this.list.push(equipment);
    };

    new = function (level, rank, slot) {
        this.add(this.get(level, rank, slot));
    };
}