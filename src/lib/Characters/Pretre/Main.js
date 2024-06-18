import { Character } from '../Class.js';
import { Baguette } from './Baguette/Class.js';
import { Soin } from './Soin/Class.js';
import { Multisoin } from './Multisoin/Class.js';

export class Pretre extends Character {
    name = "Prêtre";

    constructor() {
        super();

        this.get_stat("Vitesse").base = 80;

        this.add_spell(Baguette);
        this.add_spell(Soin);
        this.add_spell(Multisoin);
    }
}