var players;
var showArguments;
players = ["Dax", "Jahver", "Kandra", "Seraphina", "Leander"];
showArguments = function (item, index, wholeArray) {
    console.log("Items: " + wholeArray[index]);
    console.log("Index: " + index);
    console.log("Array: " + wholeArray);
};
players.forEach(showArguments);