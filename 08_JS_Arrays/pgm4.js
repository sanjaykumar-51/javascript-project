var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
var dayInWeek = 4;
console.log(days[dayInWeek]);
console.log(days[dayInWeek - 1]);
function getDay(dayNumber) {
    return days[dayNumber];
}
console.log(getDay(4));