import { Character } from '../Class.js';
import { CoupDEpee } from './CoupDEpee/Class.js';
import { Garde } from './Garde/Class.js';
import { Tourbillon } from './Tourbillon/Class.js';

export class Guerrier extends Character {
    name = "Guerrier";

    constructor() {
        super();

        this.get_stat("Vitesse").base = 80;
        
        this.add_spell(CoupDEpee);
        this.add_spell(Garde);
        this.add_spell(Tourbillon);
    }
}