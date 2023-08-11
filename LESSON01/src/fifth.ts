type One = string
type Two = string | number
type Three = "hello"

//Convert to more or less specific
let d: One = 'hello';
let e = d as Two // less specific
let f = d as Three //more specific


//Can't be done in react
let g = <One>'world'
let h = <string | number>'world'

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b;
    return '' + a + b;
}

let myVal: string = addOrConcat(2, 2, 'concat') as string
//TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number


// the DOM
const img = document.querySelector('img')!
const myImg = document.getElementById('#img') as HTMLImageElement
const nextImg =<HTMLImageElement> document.getElementById('#img') //not for tsx

img.src
myImg.src