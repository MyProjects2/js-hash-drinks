'use strict'

class HashStorage {
    constructor() {
        this.hash={};
    }

    addValue(key, value) {
        this.hash[key] = value;
    }

    getValue(key) {
        return this.hash[key];
    }

    deleteValue(key){
        delete this.hash[key];
        if (key in this.hash) {
            return false;
        }
        return true;
    }

    getKeys() {
        return Object.keys(this.hash);
    }
}
// let drink = new HashStorage;
// drink.addValue('name', 'Margarita');
// console.log(drink);
// console.log(drink.getKeys());
// console.log(drink.getValue('name'));
// console.log(drink.deleteValue('name'));
// console.log(drink);
