var showPlayerName = function (playerName) {
    console.log(playerName);
};

var showPlayerHealth = function (playerHealth) {
    console.log(playerName);
};

var showPlayerPlace = function (playerName, playerPlace) {
    console.log(playerName);
};
var showLine = function (length) {
    var line = "************************";
    console.log(line.substring(0,length));
};

var showPlayerInfo = function (playerName, playerPlace, playerHealth) {
    var nameLength = playerName.length + 4;
    showLine(nameLength);
    console.log("* " + playerName + " *");
    showLine(nameLength);
    console.log("");
};
var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50
};

var player2 = {
    name: "Dax",
    place: "The Old Library",
    health: 40
};

showPlayerInfo(player1.name, player1.place, player1.health);
showPlayerInfo(player2.name, player2.place, player2.health);