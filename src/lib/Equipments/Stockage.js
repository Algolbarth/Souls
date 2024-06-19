import { Equipment } from './Class.js';

export class Equipments {
    list = [];

    get = function (level, rank, slot) {
        return new Equipment(level, rank, slot);
    };

    add = function (equipment) {
        this.list.push(equipment);
    };

    new = function (level, rank, slot) {
        this.add(this.get(level, rank, slot));
    };

    remove = function (equipment) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == equipment) {
                this.list.splice(i, 1);
                break;
            }
        }
    };
}