let myName: string = 'Anindit';
let isLoading: boolean;
let album: any;
let age: string | number; //age can be a string or a number

myName = 'Avalin';
isLoading = true;
album = true;
age = 10;

const sum = (a: number, b: string) => {
    return a + b;
}

//Union Types
let postId: string | number;
let isActive: number | boolean;
// RegExp type
let re: RegExp = /\w+/g;

