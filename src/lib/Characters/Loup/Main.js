import { Character } from '../Class';
import Griffe from './Griffe.svelte';
import Hurlement from './Hurlement.svelte';

export class Loup extends Character {
    name = "Loup";

    constructor () {
        super();

        this.add_spell("Griffe");
        this.get_spell("Griffe").description = Griffe;

        this.add_spell("Hurlement");
        this.get_spell("Hurlement").description = Hurlement;
    }
}