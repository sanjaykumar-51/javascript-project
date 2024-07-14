var add;

add = function (number1, number2) {
    var total = number1 + number2;
    return total;
};

var addThreeNumbers;
addThreeNumbers = function (number1, number2,number3) {
    var total = number1 + number2 + number3;
    return total;
};

var sum1 = add(50, 23);
var sum2 = add(15, 10);
var sum3 = add(add(10, 20),30);
var sum4 = addThreeNumbers(10, 20, 30);

console.log('The sum of 50 and 23 is ' + sum1);
console.log('The sum of 15 and 10 is ' + sum2);
console.log('The sum of 10, 20, and 30 is ' + sum3);
console.log('The sum of 10, 20, and 30 is ' + sum4);