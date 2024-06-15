export class Equipment {
    bearer = undefined;
    
    constructor (level = 1, slot = parseInt(Math.random()*6)) {
        this.level = level;
        this.slot = slot;

        this.name = ["Arme", "Bouclier", "Casque", "Plastron", "Gants", "Bottes"][this.slot];
        this.stat = new Stat(["Dégâts", "Armure", "Bouclier", "Vie", "Énergie", "Vitesse"][this.slot], 10*this.level);
    };
}

class Stat {
    constructor (name, value) {
        this.name = name;
        this.value = value;
    }
}