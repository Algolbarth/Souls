import { Spell } from '../../Spell.js';
import Description from './Description.svelte';

export class CoupDEpee extends Spell {
    name = "Coup d'épée";

    constructor(owner) {
        super(owner);
    }

    description = Description;

    select = function (character) {
        if (this.owner.owner != character.owner) {
            return true;
        }
        return false;
    };

    use = function (character) {
        character.damage(this.owner.get_stat('Dégâts').value());
        
        return this.owner.name + " utilise Coup d'épée sur " + character.name;
    };
}