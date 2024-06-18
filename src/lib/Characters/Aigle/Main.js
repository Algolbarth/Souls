import { Character } from '../Class.js';
import { Griffe } from './Griffe/Class.js';
import { Ventilation } from './Ventilation/Class.js';
import { VentArriere } from './VentArriere/Class.js';

export class Aigle extends Character {
    name = "Aigle";

    constructor() {
        super();

        this.add_spell(Griffe);
        this.add_spell(Ventilation);
        this.add_spell(VentArriere);
    }
}