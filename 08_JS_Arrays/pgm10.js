var rectangles = [
    { length: 5, width: 3 },
    { length: 10, width: 7 },
    { length: 8, width: 6 },
    { length: 4, width: 2 },
    { length: 12, width: 9 },
];
function assignArea(rectangle) {
    rectangle.area = rectangle.length * rectangle.width;

}
function showInfo(rectangle) {
    console.log("Length: " + rectangle.length);
    console.log("Width: " + rectangle.width);
    console.log("Area: " + rectangle.area);
}
rectangles.forEach(function(rectangle) {
    assignArea(rectangle);
    showInfo(rectangle);
    console.log("---");
});