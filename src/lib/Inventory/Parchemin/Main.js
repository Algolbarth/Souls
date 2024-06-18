import { Item } from '../Class.js';
import Description from './Description.svelte';

export class Parchemin extends Item {
    name = "Parchemin";
    description = Description;
    
    list = ["Loup", "Guerrier", "Aigle", "Prêtre"];
}