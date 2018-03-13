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
        if (key in this.hash){
            delete this.hash[key];
            return true;
        }
        return false;
    }

    getKeys() {
        return Object.keys(this.hash);
    }
}
let drinkStorage = new HashStorage;
drinkStorage.addValue('Молочный коктейль', {алкогольный: "нет", рецепт: {молоко: 300, мороженое: 100, какао: 5, ванильныйСахар:5, банан: 150}});
//console.log(drinkStorage.deleteValue('Молочный коктейль'));
console.log(drinkStorage);
