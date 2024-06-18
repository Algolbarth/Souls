export class Equipment {
    bearer = undefined;
    stats = [];

    constructor(level = 1, rank = 1, slot = parseInt(Math.random() * 6)) {
        this.level = level;
        this.rank = rank;
        this.slot = slot;

        this.name = ["Arme", "Bouclier", "Casque", "Plastron", "Gants", "Bottes"][this.slot];
        this.stats.push(new Stat(["Attaque", "Armure", "Bouclier", "Vie", "Énergie", "Vitesse"][this.slot], 10 * this.level));

        for (let i = 0; i < this.rank; i++) {
            let name = this.random_stat();
            while (this.check_stat(name)) {
                name = this.random_stat();
            }
            this.stats.push(new Stat(name, this.level));
        }
    };

    random_stat = function () {
        let name = ["Attaque", "Armure", "Bouclier", "Vie", "Énergie", "Vitesse"];
        return name[parseInt(Math.random() * name.length)];
    };

    check_stat = function (name) {
        for (const stat of this.stats) {
            if (stat.name == name) {
                return true;
            }
        }
        return false;
    };
}

class Stat {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}