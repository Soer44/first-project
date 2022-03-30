'use strict';

// let obj = {
//     '1':1, 
//      1:2, 
//      1:4,
//      0:3}
// console.log(obj['0']);


// Filter 

const names = ['Egor', 'Ivan', 'Nastya', 'Masha', 'Marina'];

const shortNames = names.filter(function(name) {
    return name.length < 5;
});

console.log(shortNames);


// map 

let answers = ['Egor', 'IvAn', 'NastYa', 'MASha', 'MARINA'];

answers = answers.map(item => item.toLowerCase());

console.log(answers);


// every / some 

const som = [4, 8, 15, 16, 'Egor', 'Ivan', 'Nastya', 'Masha', 'Marina'];

console.log(som.some(item => typeof(item) === 'number'));


// reduce 

const arr = [4, 8, 15, 16];

const res = arr.reduce((sum, current) => sum + current);

console.log(res);

// razbor na konkretnom primere

const obj = {
    Egor: 'person',
    Nastya: 'person',
    Tor: 'animal',
    Bim: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);