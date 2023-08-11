"use strict";
//Convert to more or less specific
let d = 'hello';
let e = d; // less specific
let f = d; //more specific
//Can't be done in react
let g = 'world';
let h = 'world';
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    return '' + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
//TS sees no problem - but a string is returned
let nextVal = addOrConcat(2, 2, 'concat');
// the DOM
const img = document.querySelector('img');
const myImg = document.getElementById('#img');
const nextImg = document.getElementById('#img'); //not for tsx
img.src;
myImg.src;
