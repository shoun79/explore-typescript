

// interface AboutMe {
//     name: string,
//     email: string,

// }

// const aboutMe: AboutMe = {
//     name: 'shoun',
//     email: 'shoun@gm.com',

// }


//***********Interface with function signature  */

interface Add2 {
    (num1: number, num2: number, num3?: number): number;
}

const add3: Add2 = (num1, num2, num3 = 0) => {
    return num1 + num2 + num3
}

const result3 = add3(11, 7 + 1);

console.log(result3);

//***********Interface with Object  */

interface Address2 {
    present: string,
    permanent: string
}
interface Favorite2 {
    type: 'food' | 'player' | 'singer' | 'actor',
    value: string
}

interface Auth2 {
    isLoggedIn: boolean
}
interface Person2 extends Auth2 {
    name: string,
    email: string,
    age: number,
    number: string | string[],
    address: Address2,
    favorites: Favorite2[]
}



const person2: Person2 = {
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