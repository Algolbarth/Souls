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

    add = function (name) {
        let result = this.get(name);
        if (result != undefined) {
            this.list.push(result);
        }
        else {
            console.log(name + " is not a valable name for character");
        }
    };

    get = function (name) {
        for (let i = 0; i < this.instances.length; i++) {
            if (this.instances[i].name == name) {
                return new this.classes[i]();
            }
        }
        return undefined;
    };
}
