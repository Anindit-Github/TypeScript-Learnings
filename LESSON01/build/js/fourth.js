"use strict";
//Literal types
let naming;
let userName;
userName = "Jim";
// Functions
const add = (a, b) => {
    return a + b;
};
const logMsg = (message) => {
    console.log(message);
};
logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
//optional parameters
const addAll = (a, b, c) => {
    // type-guard
    if (typeof c !== "undefined")
        return a + b + c;
    return a + b;
};
const sumAll = (a, b, c = 2) => {
    //NO type-guard as default value is given
    return a + b + c;
};
//Rest parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, current) => prev + current);
};
logMsg(total(1, 2, 3, 4));
//Never
const createError = (errMsg) => {
    throw new Error(errMsg);
};
//Type of infinite is never
const infinite = () => {
    let i = 1;
    while (true) {
        i++;
        // Use a condition and break to come out of the loop
    }
};
//custom type guard
const isNumber = (value) => {
    return typeof value === 'number' ? true : false;
};
//use of never type
const numberOrString = (value) => {
    if (typeof value === 'string')
        return 'string';
    if (isNumber(value))
        return 'number';
    return createError('This should never happen!');
};
