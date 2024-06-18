import { Spell } from '../../Spell.js';
import Description from './Description.svelte';

export class Multisoin extends Spell {
    name = "Multisoin";

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

    use = function () {
        for (const character of this.owner.owner.list) {
            character.heal(25);
        }
        
        this.owner.get_stat('Énergie').current -= 50;

        return this.owner.name + ' utilise Multisoin sur lui et ses alliées';
    };
}