import { Character } from '../Class';
import Griffe from './Griffe.svelte';
import Hurlement from './Hurlement.svelte';

export class Loup extends Character {
    name = "Loup";

    constructor () {
        super();

        this.add_spell("Griffe");
        this.get_spell("Griffe").description = Griffe;
        this.get_spell("Griffe").select = function (character) {
            if (this.owner.owner != character.owner) {
                return true;
            }
            return false;
        };
        this.get_spell("Griffe").use = function (character) {
            character.damage(this.owner.get_stat('Dégâts').value());
            return this.owner.name + ' utilise Griffe sur ' + character.name;
        };

        this.add_spell("Hurlement");
        this.get_spell("Hurlement").description = Hurlement;
        this.get_spell("Hurlement").select = function (character) {
            if (this.owner.owner == character.owner) {
                return true;
            }
            return false;
        };
        this.get_spell("Hurlement").use = function () {
            for (const character of this.owner.owner.list) {
                character.get_stat('Dégâts').add += 10;
            }
            return this.owner.name + ' utilise Hurlement !';
        };
    }
}