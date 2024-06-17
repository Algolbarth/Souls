import { Character } from '../Class.js';
import { Griffe } from './Griffe/Class.js';
import { Soin } from './Soin/Class.js';

export class Pretre extends Character {
    name = "Prêtre";

    constructor() {
        super();

        this.add_spell(Griffe);
        this.add_spell(Soin);
    }
}