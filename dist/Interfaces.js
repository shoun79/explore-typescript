"use strict";
// interface AboutMe {
//     name: string,
//     email: string,
var add3 = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
var result3 = add3(11, 7 + 1);
console.log(result3);
var person2 = {
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
};
