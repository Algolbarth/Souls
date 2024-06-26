export class Character {
    level = 1;
    stats = [];
    atb = undefined;
    spells = [];
    equipments = [];

    constructor(rank = 1) {
        this.rank = rank;

        this.add_stat("Vie", 100);
        this.add_stat("Bouclier", 0);
        this.add_stat("Armure", 50);
        this.add_stat("Énergie", 100);
        this.add_stat("Attaque", 100);
        this.add_stat("Vitesse", 100);

        for (let i = 0; i < 6; i++) {
            this.equipments.push(undefined);
        }
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

    add_spell = function (spell) {
        this.spells.push(new spell(this));
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

    equip = function (equipment) {
        if (this.equipments[equipment.slot] != undefined) {
            this.unequip(equipment.slot);
        }
        this.equipments[equipment.slot] = equipment;
        equipment.bearer = this;
    };

    unequip = function (slot) {
        this.equipments[slot].bearer = undefined;
        this.equipments[slot] = undefined;
    };

    unequip_all = function () {
        for (let i = 0; i < 6; i++) {
            if (this.equipments[i] != undefined) {
                this.unequip(i);
            }
        }
    };

    alive = function () {
        if (this.get_stat('Vie').current > 0) {
            return true;
        }
        return false;
    };

    damage = function (value) {
        value -= this.get_stat("Armure").value();
        if (this.get_stat("Bouclier").current > value) {
            this.get_stat("Bouclier").current -= value;
            value = 0;
        }
        else {
            value -= this.get_stat("Bouclier").current;
            this.get_stat("Bouclier").current = 0;
        }

        this.get_stat('Vie').current -= value;
    };

    heal = function (value) {
        this.get_stat('Vie').current += value;
        
        if (this.get_stat('Vie').current > this.get_stat('Vie').value()) {
            this.get_stat('Vie').current = this.get_stat('Vie').value();
        }
    };
}

class Stat {
    current = undefined;
    add = 0;

    constructor(name, base, owner) {
        this.name = name;
        this.base = base;
        this.owner = owner;
    };

    value = function () {
        let total = this.base + this.add;

        for (const equipment of this.owner.equipments) {
            if (equipment != undefined) {
                for (const stat of equipment.stats) {
                    if (stat.name == this.name) {
                        total += stat.value;
                    }
                }
            }
        }

        return total;
    };

    reset = function () {
        this.current = undefined;
    };
}