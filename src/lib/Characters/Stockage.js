import * as C from '.';

export class Characters {
    list = [];
    instances = [];
    classes = [];

    constructor() {
        for (const c of Object.keys(C)) {
            let character_class = C[c];
            this.classes.push(character_class);

            let character = new character_class();
            this.instances.push(character);
        }
    }

    add = function (name, rank) {
        let result = this.get(name, rank);
        if (result != undefined) {
            this.list.push(result);
        }
        else {
            console.log(name + " is not a valable name for character");
        }
    };

    get = function (name, rank) {
        for (let i = 0; i < this.instances.length; i++) {
            if (this.instances[i].name == name) {
                return new this.classes[i](rank);
            }
        }
        return undefined;
    };

    remove = function (character) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] == character) {
                this.list.splice(i, 1);
                break;
            }
        }
    };
}
