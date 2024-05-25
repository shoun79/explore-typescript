
// function add(num1: number, num2: number): void {
//     console.log(num1 + num2);
// }

// add(11, 5)
// function add(num1: number, num2: number): number {

//     return num1 + num2
// }

// add(11, 5)
// const add = function (num1: number, num2: number): number {
//     return num1 + num2
// }

// const result = add(11, 7);

//************Array */

// const add = (num1: number, num2: number): number => {
//     return num1 + num2
// }

// const result = add(11, 7);


// const add = (num1: number[], num2: number): number => {
//     return num1[0] + num2
// }

// const result = add([11], 8);


// const add = (num1: number, num2: number, num3: number = 0): number => {
//     return num1 + num2 + num3
// }

// const result = add(11, 7);

// const add = (...numbers: number[]): number => {
//     const fun = (pre: number, cur: number) => pre + cur;
//     return numbers.reduce(fun, 0)
// }

// const result = add(11, 33, 4, 8, 2);

//***********function signature*******
// let add: (num1: number, num2: number, num3?: number) => number;

// add = (num1, num2, num3 = 0) => {
//     return num1 + num2 + num3
// }

// const result = add(11, 7 + 1);


//***********Function type*******

let add: Function;

add = (num1: number, num2: number, num3 = 0) => {
    return num1 + num2 + num3
}

const result = add(11, 7);


console.log(result);