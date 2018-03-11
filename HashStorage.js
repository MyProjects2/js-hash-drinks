'use strict'

class HashStorage {
    constructor(key, value) {
        // this.key = key;
        // this.value = value;
        this.hash={};
    }

    addValue(key, value) {
        this.hash[key] = value;
    }

    getValue(key) {
        return this.hash[key];
    }

    deleteValue(key){
        if (delete this.hash[key]) {
            return true;
        }
        return false;
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
