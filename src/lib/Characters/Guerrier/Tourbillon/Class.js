import { Spell } from '../../Spell.js';
import Description from './Description.svelte';

export class Tourbillon extends Spell {
    name = "Tourbillon";

    constructor(owner) {
        super(owner);
    }

    description = Description;

    condition = function () {
        if (this.owner.get_stat("Énergie").current >= 50) {
            return true;
        }
        return false;
    };

    select = function (character) {
        if (this.owner.owner != character.owner) {
            return true;
        }
        return false;
    };

    use = function (character) {
        for (let i = 0; i < 3; i++) {
            if (character.alive()) {
                character.damage(this.owner.get_stat('Attaque').value());
            }
        }

        return this.owner.name + " utilise Tourbillon sur " + character.name;
    };
}