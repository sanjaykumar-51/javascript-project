
var showProduct;
var showDifference;
var showSum;
showProduct = function (number1, number2) {
    var product = number1 * number2;
    console.log("The product is " + product);
};
showDifference = function (number1, number2) {
    var difference = number1 - number2;
    console.log("The difference is " + difference);
};
var showQuotient;
showQuotient =function (number1, number2) {
    if (number2 === 0) {
        console.log("Division by zero is not allowed.");
        return;
    }
    var quotient = number1 / number2;
    console.log("The quotient is " + quotient);
};
showDifference(10,4);
showDifference(100,50);

showDifference(20,4);
showDifference(100,25);

showProduct(5,4);
showProduct(7,3);
showProduct(12,8);
