var number1,number2,result;
//assign values to num1 and num2
number1 = 5;
number2 = 10;

//define findtotal function
findTotal = function () {
    result = number1 + number2;

};
//run findTotal function

findTotal();
//display the result
console.log("The total is: " + result);
//define the displaymenu
displayMenu = function () {
    console.log("Please choose an option:");
    console.log("(1) Print log");
    console.log("(2) Upload file");
    console.log("(9) Quit");

};
//run the displaymenu
displayMenu();