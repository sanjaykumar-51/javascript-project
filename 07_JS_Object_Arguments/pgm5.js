var showSmaller = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);
    console.log(smaller + " is smaller than " + larger);
};

var showLarger = function (num1, num2) {
    var smaller = Math.min(num1, num2);
    var larger = Math.max(num1, num2);
    console.log(smaller + " is larger than " + smaller);
};

var showSmallest = function (num1, num2, num3) {
    var smallest = Math.min(num1, num2, num3);
 
    console.log(smallest + " is smallest than " + num1 + ", " + num2 + ", and" + num3);
};

showSmaller(12, 3);
showSmaller(-10, 3);

showLarger(12, 3);
showLarger(-10, 3);

showSmallest(12, 3, -5);
showSmallest(-10, 3, 7);
