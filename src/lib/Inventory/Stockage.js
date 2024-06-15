import * as I from '.';

export class Inventory {
    list = [];
    instances = [];
    classes = [];

    constructor () {
        for (const i of Object.keys(I)) {
            let item_class = I[i];
            this.classes.push(item_class);
    
            let item = new item_class();
            this.instances.push(item);
        }
    }

    get = function (name) {
        for (const item of this.list) {
            if (item.name == name) {
                return item;
            }
        }
        return undefined;
    };

    add = function (name, number) {
        if (this.get(name) != undefined) {
            this.get(name).number += number;
        }
        else {
            for (let i = 0; i < this.instances.length; i++) {
                if (this.instances[i].name == name) {
                    this.list.push(new this.classes[i](number));
                }
            }
        }
    };

    remove = function (name, number) {
        this.get(name).number -= number;
        
        if (this.get(name).number == 0) {
            for (let i = 0; i < this.list.length; i++) {
                if (this.list[i].name == name) {
                    this.list.splice(i, 1);
                }
            }
        }
    };
}