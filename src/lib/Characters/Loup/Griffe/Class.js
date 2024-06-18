import { Spell } from '../../Spell.js';
import Description from './Description.svelte';

export class Griffe extends Spell {
    name = "Griffe";

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
        character.damage(this.owner.get_stat('Attaque').value());
        
        return this.owner.name + ' utilise Griffe sur ' + character.name;
    };
}