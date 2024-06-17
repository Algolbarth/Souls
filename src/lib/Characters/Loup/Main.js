import { Character } from '../Class.js';
import { Griffe } from './Griffe/Class.js';
import { Hurlement } from './Hurlement/Class.js';

export class Loup extends Character {
    name = "Loup";

    constructor() {
        super();

        this.add_spell(Griffe);
        this.add_spell(Hurlement);
    }
}