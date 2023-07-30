//Type Aliases
type stringOrNumber = string | number;

type stringOrNumberArray = (string | number)[];

type Guitarist1 = {
  name?: string;
  active: boolean;
  albums: stringOrNumberArray;
};

type UserId = stringOrNumber;

//Literal types
let naming: "Anindit";

let userName: "Anindit" | "Jeff" | "Jim";
userName = "Jim";

// Functions
const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));

let subtract = function (c: number, d: number): number {
  return c - d;
};

// type mathFunction = (a: number, b: number) => number OR
interface mathFunction {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};

logMsg(multiply(2, 2));

//optional parameters

const addAll = (a: number, b: number, c?: number): number => {
  // type-guard
    if (typeof c !== "undefined") return a + b + c;
    return a + b;
};

const sumAll = (a: number, b: number, c: number = 2): number => {
    //NO type-guard as default value is given
    return a + b + c;
};
  
//Rest parameters
const total = (a:number, ...nums: number[]): number => {
    return a + nums.reduce((prev, current) => prev + current)
}

logMsg(total(1, 2, 3, 4));


//Never
const createError = (errMsg: string): never => {
    throw new Error(errMsg);
}

//Type of infinite is never
const infinite = () => {
    let i: number = 1;
    while (true) {
        i++;

        // Use a condition and break to come out of the loop
    }
}

//custom type guard
const isNumber = (value: any): boolean => {
    return typeof value === 'number' ? true : false
}


//use of never type
const numberOrString = (value: number | string): string => {
    if (typeof value === 'string') return 'string';
    if (isNumber(value)) return 'number'
    return createError('This should never happen!')
}

