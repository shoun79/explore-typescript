
let player: {
    name: string;
    age?: number;
    country: string;
    married: boolean;
    clubs?: string[];
}

player = {
    name: 'messi',
    age: 35,
    country: 'arg',
    married: true,
    clubs: ['Br']
}
player = {
    name: 'Neymar',
    //age: 30,
    country: 'Brazil',
    married: false,
    clubs: ['Br']
}
player.married = true;
player.age = player.age! + 5;
player.clubs = player.clubs?.map(club => club.toUpperCase())
console.log(player);



enum Friends {
    Arif = 10,
    Sarif = 11,
    Pavel,
    Tushar
}

console.log(Friends.Pavel);