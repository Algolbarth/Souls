export class Spell {
    name = undefined;

    constructor(owner) {
        this.owner = owner;
    }

    description = undefined;

    condition = function () {
        return true;
    };

    select = function () {
        return false;
    };

    use = function () {
        console.log(this.name);
    };
}