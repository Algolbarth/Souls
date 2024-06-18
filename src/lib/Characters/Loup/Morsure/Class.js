import { Spell } from '../../Spell.js';
import Description from './Description.svelte';

export class Morsure extends Spell {
    name = "Morsure";

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
        character.damage(this.owner.get_stat('Attaque').value());
        character.get_stat("Armure").add -= 10;

        return this.owner.name + ' utilise Morsure sur ' + character.name;
    };
}