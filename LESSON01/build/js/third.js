"use strict";
let stringArr = ['one', 'hey', 'Anindit'];
let guitars = ['Strat', 'Lessons', 5150];
let mixedData = ['EVH', 1984, true];
stringArr[0] = 'Jatt';
stringArr.push('Hello');
guitars[0] = 1984;
let test = [];
let bands = [];
bands.push('Rocky');
// Tuple :
let myTuple = ['Dave', 42, true];
let mixed = ['John', 1, false];
mixed = myTuple; // No problem
//myTuple = mixed //Problem as there is no fixed length for mixed
// Objects
let myObj;
myObj = []; // No problem as an array is an object in JS
console.log(typeof myObj);
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: 'Anindit',
    prop2: true,
};
exampleObj.prop1 = 'Ashu';
let evh = {
    name: 'Eddie',
    active: false,
    albums: [1984, 5150, 'OU812']
};
let jp = {
    name: 'Pappu',
    active: false,
    albums: ['I', 'II', 'IV']
};
const greetGuitarist = (guitarist) => {
    if (guitarist.name)
        return `hello ${guitarist.name.toUpperCase()}!`;
    return 'hello!';
};
console.log(greetGuitarist(jp));
// Enums
//Something added to the language and runtime. Not a type-level addition
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U); // By default Grade.U = 0
