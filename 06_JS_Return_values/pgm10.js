var getPlayerItems;

var getPlayerName = function (playerName) {
    return playerName;
};

var getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

var getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};
var getPlayerItems = function (playerName, getPlayerItems) {
    return playerName + " has the following items " + getPlayerItems;
};

var getBorder = function () {
    return "****************************";
};
var getPlayerInfo = function (playerName, playerPlace, playerHealth, PlayerItems) {


var playerInfo;

    getPlayerInfo = "\n" + getPlayerName(playerName);
    
    getPlayerInfo = "\n" + getBorder();
    getPlayerInfo = "\n" + getPlayerPlace(playerName,playerPlace);
    getPlayerInfo = "\n" + getPlayerHealth(playerName, playerHealth);
    getPlayerInfo = "\n" + getPlayerItems(playerName, playerItems);
    getPlayerInfo = "\n" + getBorder();
    getPlayerInfo = "\n";
    return playerInfo;
    };
    var player1 = {
        name: "Kandra",
        place: "The Dungeon of Doom",
        health: 50,
        items: "a rusty key, a piece of cheese"
    };
    
    var player2 = {
        name: "Dax",
        place: "The Old Library",
        health: 40,
        items: "an ancient book, a candle"

    };
    console.log(getPlayerInfo(player1.name, player1.place, player1.health, player1.items));
    console.log(getPlayerInfo(player2.name, player2.place, player2.health, player2.items));