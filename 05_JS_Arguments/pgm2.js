var msg;
var newMsg;
var showMessage;
msg = "It's full of stars!";

showMessage = function () {
console.log(msg);


};
showMessage();

var newMsg = "And beyond the Horizon.";

showMessage = function () {
    console.log(msg);
    console.log(newMsg);
    console.log(msg + " " + newMsg);
};
showMessage();