"use strict";
var _a;
var player;
player = {
    name: 'messi',
    age: 35,
    country: 'arg',
    married: true,
    clubs: ['Br']
};
player = {
    name: 'Neymar',
    //age: 30,
    country: 'Brazil',
    married: false,
    clubs: ['Br']
};
player.married = true;
player.age = player.age + 5;
player.clubs = (_a = player.clubs) === null || _a === void 0 ? void 0 : _a.map(function (club) { return club.toUpperCase(); });
console.log(player);
var Friends;
(function (Friends) {
    Friends[Friends["Arif"] = 10] = "Arif";
    Friends[Friends["Sarif"] = 11] = "Sarif";
    Friends[Friends["Pavel"] = 12] = "Pavel";
    Friends[Friends["Tushar"] = 13] = "Tushar";
})(Friends || (Friends = {}));
console.log(Friends.Pavel);
