export class Character {
    level = 1;
    stats = [];
    atb = undefined;
    spells = [];

    constructor () {
        this.add_stat("Vie", 100);
        this.add_stat("Bouclier", 100);
        this.add_stat("Armure", 50);
        this.add_stat("Énergie", 100);
        this.add_stat("Dégâts", 100);
        this.add_stat("Vitesse", 100);
    };

    get_stat = function (name) {
        let value = undefined;
        for (const stat of this.stats) {
            if (stat.name == name) {
                value = stat;
            }
        }
        
        if (value != undefined) {
            return value;
        }
        else {
            console.log(name + " stat doesnt exist");
            return undefined;
        }
    };

    set_stat = function (name, base) {
        let stat = this.get_stat(name);
        if (stat != undefined) {
            stat.base = base;
        }
    };

    add_stat = function (name, base) {
        this.stats.push(new Stat(name, base, this));
    };

    add_spell = function (name) {
        this.spells.push(new Spell(name, this));
    };

    get_spell = function (name) {
        let value = undefined;
        for (const spell of this.spells) {
            if (spell.name == name) {
                value = spell;
            }
        }
        
        if (value != undefined) {
            return value;
        }
        else {
            console.log(name + " spell doesnt exist");
            return undefined;
        }
    };
}

class Stat {
    current = undefined;
    
    constructor (name, base, owner) {
        this.name = name;
        this.base = base;
        this.owner = owner;
    };

    value = function () {
        return this.base;
    };

    reset = function () {
        this.current = undefined;
    };
}

class Spell {
    constructor (name, owner) {
        this.name = name;
        this.owner = owner;
    }

    description = undefined;


}