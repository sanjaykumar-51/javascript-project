var spacer = {
    blank: function () {
      return "";
    },
  
    newLine: function () {
      return "\n";
    },
  
    line: function (length, character) {
      var longString = "";
      longString += "----------------------------------------";
      longString += "========================================";
      longString += "++++++++++++++++++++++++++++++++++++++++";
      longString += "                                        ";
  
      length = Math.max(0, length);
      length = Math.min(40, length);
      return longString.substr(longString.indexOf(character), length);
    },
  
    wrap: function (text, length, character) {
      var padLength = length - text.length - 3;
      var wrapText = character + " " + text;
      wrapText += spacer.line(padLength, " ");
      wrapText += character;
      return wrapText;
    },
  
    box: function (text, length, character) {
      var boxText = spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      boxText += spacer.wrap(text, length, character) + spacer.newLine();
      boxText += spacer.line(length, character) + spacer.newLine();
      return boxText;
    }
  };
  
  // Player display code
  
  var getPlayerName = function (player) {
    return player.name;
  };
  
  var getPlayerHealth = function (player) {
    return player.name + " has health " + player.health;
  };
  
  var getPlayerPlace = function (player) {
    return player.name + " is in " + player.place;
  };
  
  var getPlayerItems = function (player) {
    var itemsString = "Items:" + spacer.newLine();
  
    player.items.forEach(function (item, index) {
      itemsString += "   " + (index + 1) + ". " + item + spacer.newLine();
    });
  
    return itemsString;
  };
  
  var getPlayerInfo = function (player, character) {
    var place = getPlayerPlace(player);
    var health = getPlayerHealth(player);
    var longest = Math.max(place.length, health.length) + 4;
  
    var info = spacer.box(getPlayerName(player), longest, character);
    info += spacer.wrap(place, longest, character);
    info += spacer.newLine() + spacer.wrap(health, longest, character);
    info += spacer.newLine() + spacer.line(longest, character);
  
    info += spacer.newLine();
    info += "  " + getPlayerItems(player);
    info += spacer.newLine();
    info += spacer.line(longest, character);
  
    info += spacer.newLine();
  
    return info;
  };
  
  var showPlayerInfo = function (player, character) {
    console.log(getPlayerInfo(player, character));
  };
  
  // Create a player
  
  var player1 = {
    name: "Kandra",
    place: "The Dungeon of Doom",
    health: 50,
    items: ["a trusty lamp"]
  };
  
  showPlayerInfo(player1, "=");
  
  player1.items.push("a rusty key");
  
  showPlayerInfo(player1, "*");
  
  // New functions for tasks
  
  // Show a specific item
  var showItem = function (player, itemNumber) {
    if (itemNumber >= 1 && itemNumber <= player.items.length) {
      console.log("Item " + itemNumber + ": " + player.items[itemNumber - 1]);
    } else {
      console.log("Invalid item number.");
    }
  };
  
  // Add a new item
  var addItem = function (player, itemTitle) {
    player.items.push(itemTitle);
    console.log('Added item: "' + itemTitle + '"');
  };
  
  // Example interactions
  addItem(player1, "a magic potion");
  showItem(player1, 2); // Displays the second item
  console.log(player1.items); // Show all items