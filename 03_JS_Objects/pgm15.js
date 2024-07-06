var player1;
var player2;
var player1 = {
    name: "Kandra",
    health: 50,
    place: "The Dungeon of doom",
    items: ["a rusty key", "The Sword of Destiny", "a piece of cheese"]
};

console.log(player1.name);
console.log(player1.name + " is in " + player1.place);
console.log(player1.name + " has health " + player1.health);
console.log("Items: " +player1.items.join(","));

var player2 = {
    name: "Grom",
    health: 75,
    place: "The Canverns of Despair",
    items: ["a torch", "a healing potion", "a map"]
};

console.log("\n" + player2.name);
console.log(player2.name + " is in " + player2.place);
console.log(player2.name + " has health " + player2.health);
console.log("Items: " +player2.items.join(","));