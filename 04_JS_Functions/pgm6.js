var sayHello;
var printLetters;
var sayHello;
sayHello = function () {
   console.log("Hello\nEveryone");
};

sayHello();

printLetters = function (str) {
    for (var i = 0; i < str.length; i++) {
        console.log(str[i]);
    }
};
//call the function
printLetters("Hello Everyone");