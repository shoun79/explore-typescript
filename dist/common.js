"use strict";
//Non - Null Assertion Operator(Postfix!)
;
//let user: User | null | undefined = null;
//Assertions(As)
var user = {};
user = {
    name: 'user',
    email: 'hdad@fm.com'
};
var description = {};
//as const
var friends = ['Pavel', 'Tushar'];
var user2 = {
    name: 'user',
    email: 'hdad@fm.com'
};
friends.forEach(function (item) {
    description[item] = item + 'on fire';
});
