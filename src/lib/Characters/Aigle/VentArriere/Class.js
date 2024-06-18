import { Spell } from '../../Spell.js';
import Description from './Description.svelte';

export class VentArriere extends Spell {
    name = "Vent arrière";

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
            character.atb += 25;
        }
        
        this.owner.get_stat('Énergie').current -= 50;

        return this.owner.name + ' utilise Vent arrière sur lui et ses alliées';
    };
}