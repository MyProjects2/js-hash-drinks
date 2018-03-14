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
drinkStorage.addValue('Молочный коктейль', {алкогольный: "нет", рецепт: 'молоко 300 гр, мороженое 100 гр, какао 5 гр, ванильный сахар 5 гр, банан 1 шт'});

document.getElementById('btn--addValue').addEventListener('click', addValue);
document.getElementById('btn--getValue').addEventListener('click', getValue);
document.getElementById('btn--deleteValue').addEventListener('click', deleteValue);
document.getElementById('btn--getKeys').addEventListener('click', getKeys);

function addValue() {
    let key = prompt('Название напитка:');
    while(!key) {
        key = prompt('Поле не должно быть пустым. Введите название напитка');
    }
    let value1 = prompt('Напиток алкогольный?');
    while(!value1) {
        value1 = prompt('Поле не должно быть пустым. Укажите является ли напиток алкогольным');
    }
    let value2 = prompt('Рецепт:');
    while(!value2) {
        value2 = prompt('Поле не должно быть пустым. Введите рецепт напитка');
    }
    drinkStorage.addValue(key, {алкогольный: value1, рецепт: value2});
}

function getValue() {
    let drink = prompt('Название напитка');
    while(!drink) {
        drink = prompt('Поле не должно быть пустым. Введите название напитка');
    }
    let drinkObj = drinkStorage.getValue(drink);
    if ( drinkObj == undefined ) {
        document.getElementById('getValue--info').innerHTML = `Напиток ${drink} не найден`;       
    } else {
        let alc = drinkObj['алкогольный'];
        let recipe = drinkObj['рецепт'];
        document.getElementById('getValue--info').innerHTML = `Напиток ${drink} </br> алкогольный: ${alc} </br> рецепт: ${recipe}`; 
    }   
}

function deleteValue() {
    let drink = prompt('Название напитка');
    while(!drink) {
        drink = prompt('Поле не должно быть пустым. Введите название напитка');
    }
    let deleteCheck = drinkStorage.deleteValue(drink);
    if (deleteCheck) {
        alert('Напиток был удален успешно');
    } else {
        alert('Этого напитка нет в базе данных');
    }   
}

function getKeys() {
    document.getElementById('getKeys-info').innerHTML = `${drinkStorage.getKeys()}`; 
}
