import { Spell } from '../../Spell.js';
import Description from './Description.svelte';

export class Ventilation extends Spell {
    name = "Ventilation";

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
        if (this.owner.owner == character.owner && this.owner != character) {
            return true;
        }
        return false;
    };

    use = function (character) {
        character.atb = 100;
        
        this.owner.get_stat('Énergie').current -= 50;

        return this.owner.name + ' utilise Ventilation sur ' + character.name;
    };
}