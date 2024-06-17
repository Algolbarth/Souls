import { Spell } from '../../Spell.js';
import Description from './Description.svelte';

export class Garde extends Spell {
    name = "Garde";

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
        if (this.owner == character) {
            return true;
        }
        return false;
    };

    use = function () {
        this.owner.get_stat('Bouclier').current += 50;

        this.owner.get_stat('Énergie').current -= 50;
        
        return this.owner.name + ' utilise Garde sur lui-même';
    };
}