var getPlayerHealth;
var getPlayerPlace;
var showPlayerInfo;

getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

showPlayerInfo = function (playerName, playerHealth) {
    console.log(getPlayerHealth(playerName, playerHealth));
    console.log(getPlayerHealth(playerName, playerPlace));
};
console.log(getPlayerHealth("Kandra", 50));
console.log(getPlayerPlace("Kandra", "The Dungeon of Doom"));

showPlayerInfo("Dax", 50, "The Bath");
showPlayerInfo("Kandra", 50, "The Dungeon of Doom");