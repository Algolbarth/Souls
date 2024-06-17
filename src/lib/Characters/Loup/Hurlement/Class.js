import { Spell } from '../../Spell.js';
import Description from './Description.svelte';

export class Hurlement extends Spell {
    name = "Hurlement";

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
            character.get_stat('Dégâts').add += 10;
        }
        
        this.owner.get_stat('Énergie').current -= 50;

        return this.owner.name + ' utilise Hurlement sur lui et ses alliés';
    };
}