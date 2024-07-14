var totalCost;
totalCost = function (callOutCharge, costPerHour, numberofHours, discount) {
    return callOutCharge + costPerHour * numberofHours - discount;
};
console.log("$" + totalCost(30, 40, 12, 0));
console.log("$" + totalCost(30, 40, 3, 20));