"use strict";
//let players;
//let players: string[];
//let players: (string | boolean | number)[];
//let players: string[] | boolean[] | number[];
//***********Tuples */
var players;
players = ['Messi', 'Ronaldo', true, 44];
players[3] = 10;
// players[0] = {};
players.push('Neymar');
players.push(true);
var newPlayers = players.map(function (player, i) { return i + 1 + ' .' + player; });
console.log(players, newPlayers);
