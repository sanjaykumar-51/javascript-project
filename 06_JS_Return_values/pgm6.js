var getMessage;
var getHelloTo;
var sum;
var totalCost;

getMessage = function () {
    return "I'm going on an adventure!";
};

getHelloTo = function (name) {
    return "Hello to " + name;
};

sum = function (number1, number2) {
    return number1 + number2;
};
totalCost = function (callOutCharge, costPerHour, numberofHours) {
    return callOutCharge + costPerHour * numberofHours;
};