"use strict";
var nameMy = 'kaosar';
var arr = ['kaosar'];
var playersAll = ['Messi', 'Ronaldo', true, 44];
var add2 = function (num1, num2, num3) {
    if (num3 === void 0) { num3 = 0; }
    return num1 + num2 + num3;
};
var result2 = add2(11, 7 + 1);
console.log(result2);
var person = {
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
if (Array.isArray(person.number)) {
    person.number.map(function (num) { return num.toLowerCase(); });
}
else {
    person.number.toLowerCase();
}
