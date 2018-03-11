'use strict'

class HashStorage {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    addValue(key, value) {
        this.key = key;
        this.value = value;
        HashStorage.key = value;
    }

    getValue(key) {
        return this.value;
    }

    deleteValue(key){
        if (delete this.key) {
            return true;
        }
        return false;
    }

    getKeys() {
        return this.key;
    }
}
