var getPlayerName;
var getPlayerHealth;
var getPlayerPlace;
var getPlayerInfo;
var getBorder;

getPlayerName = function (playerName) {
    return playerName;
};
getPlayerHealth = function (playerName, playerHealth) {
    return playerName + " has health " + playerHealth;
};

getPlayerPlace = function (playerName, playerPlace) {
    return playerName + " is in " + playerPlace;
};

getBorder = function () {
    return "****************************";
};
getPlayerInfo;{

getPlayerInfo = "\n" + getPlayerName(playerName);

getPlayerInfo = "\n" + getBorder();
getPlayerInfo = "\n" + getPlayerPlace(playerName,playerPlace);
getPlayerInfo = "\n" + getPlayerHealth(playerName, playerHealth);
getPlayerInfo = "\n" + getBorder();
getPlayerInfo = "\n";
return PlayerInfo;
};
 console.log(getPlayerInfo("Kandra", "The Dungeon of Doom", 50));
 console.log(getPlayerInfo("Dax", "The Old Library", 40));