
//type MyName = string | number;
type MyName = 'shoun' | 'kaosar';

let nameMy: MyName = 'kaosar';

type arr = MyName[];
const arr: arr = ['kaosar'];

//***********type Aliases with Tuples */
type Players = [string, string, boolean, number];

let playersAll: Players = ['Messi', 'Ronaldo', true, 44];


//***********type Aliases with function signature  */
type Add = (num1: number, num2: number, num3?: number) => number;

const add2: Add = (num1, num2, num3 = 0) => {
    return num1 + num2 + num3
}

const result2 = add2(11, 7 + 1);

console.log(result2);

//***********type Aliases with Object  */

type Address = {
    present: string,
    permanent: string
}
type Favorite = {
    type: 'food' | 'player' | 'singer' | 'actor',
    value: string
}
type Auth = {
    isLoggedIn: boolean
}
type Person = {
    name: string,
    email: string,
    age: number,
    number: string | string[],
    address: Address,
    favorites: Favorite[]
} & Auth;



const person: Person = {
    name: 'shoun',
    email: 'shoun@gm.com',
    age: 33,
    number: ['8687687687'],
    address: {
        present: 'thana road',
        permanent: 'mehar'
    },
    favorites: [
        {
            type: 'food',
            value: 'mango'
        },
        {
            type: 'player',
            value: 'tamim'
        }
    ],
    isLoggedIn: false
}


if (Array.isArray(person.number)) {

    person.number.map(num => num.toLowerCase())
}
else {
    person.number.toLowerCase()
}
