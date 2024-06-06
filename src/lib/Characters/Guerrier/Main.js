import { Character } from '../Class';
import CoupDEpee from './CoupDEpee.svelte';
import Garde from './Garde.svelte';

export class Guerrier extends Character {
    name = "Guerrier";

    constructor () {
        super();

        this.add_spell("Coup d'épée");
        this.get_spell("Coup d'épée").description = CoupDEpee;
        this.get_spell("Coup d'épée").select = function (character) {
            if (this.owner.owner != character.owner) {
                return true;
            }
            return false;
        };
        this.get_spell("Coup d'épée").use = function (character) {
            character.damage(this.owner.get_stat('Dégâts').value());
            return this.owner.name + " utilise Coup d'épée sur " + character.name;
        };

        this.add_spell("Garde");
        this.get_spell("Garde").description = Garde;
        this.get_spell("Garde").select = function (character) {
            if (this.owner == character) {
                return true;
            }
            return false;
        };
        this.get_spell("Garde").use = function () {
            this.owner.get_stat('Bouclier').current += 50;
            return this.owner.name + ' utilise Garde !';
        };
    }
}