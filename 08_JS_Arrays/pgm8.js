var items = ["The Pyramids", "The Grand Canyon", "Bondi Beach"];
var showItems = function() {
    console.log("Number of places to visit: " + items.length);
    console.log("Dream destinations:");
    items.forEach(function (item) {
        console.log(" - " + item);
    });
};
showItems();