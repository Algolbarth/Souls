import { Spell } from '../../Spell.js';
import Description from './Description.svelte';

export class Soin extends Spell {
    name = "Soin";

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
        if (this.owner.owner == character.owner) {
            return true;
        }
        return false;
    };

    use = function (character) {
        character.heal(50);
        
        this.owner.get_stat('Énergie').current -= 50;

        return this.owner.name + ' utilise Soin sur ' + character.name;
    };
}