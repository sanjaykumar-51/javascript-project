var items;
var showInfo;
items = [
    "The Pyramids",
    "The Grand Canyon",
    "Bondi Beach",
];
items.push("The Eiffel Tower", "The Great Wall of China");
items[5] = "Machu Picchu";
items[6] = "Christ the Redeemer";
showInfo = function (itemToShow) {
    console.log(itemToShow + " (" + itemToShow.length + " letters");
};
items.forEach(showInfo);
function totalNumberOfLetters(itemsArray) {
    let totalLetters = 0;
    itemsArray.forEach(function(item) {
        totalLetters += item.length;

    });
    return totalLetters;
}
console.log("Total number of letters: " + totalNumberOfLetters(items));