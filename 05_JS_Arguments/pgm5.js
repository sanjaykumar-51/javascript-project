var square;
var cube;
var squareRoot;

square = function (numberToSquare) {
    var result;
    result = numberToSquare * numberToSquare;
    console.log(numberToSquare + " * " + numberToSquare + " = " + result);
};
square(10);
square(-2);
square(1111);
square(0.5);

cube = function (numberToCube) {
    var result;
    result = numberToCube * numberToCube;
    console.log(numberToCube + " * " + numberToCube + " = " + result);
};

cube(2);
cube(-3);
cube(1.5);
cube(0);

squareRoot = function (numberToSqrt) {
    var result;
    result = Math.sqrt(numberToSqrt);
    console.log("The square root of " + numberToSqrt + " is " + result);
};

squareRoot(9);
squareRoot(16);
squareRoot(2);
squareRoot(0.25);