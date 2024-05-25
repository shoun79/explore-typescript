

//let players;
//let players: string[];
//let players: (string | boolean | number)[];
//let players: string[] | boolean[] | number[];
//***********Tuples */
let players: [string, string, boolean, number];
players = ['Messi', 'Ronaldo', true, 44];
players[3] = 10;
// players[0] = {};
players.push('Neymar')
players.push(true)

const newPlayers = players.map((player, i) => i + 1 + ' .' + player)

console.log(players, newPlayers);