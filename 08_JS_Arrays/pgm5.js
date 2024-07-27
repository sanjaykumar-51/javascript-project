
var reportForFriday = getVisitorReport (visitors, 5);
console.log(reportForFriday);
var getVisitorReport = function (visitorArray, dayInWeek) {
    var days = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];
    var index = dayInWeek - 1;
    var visitorReport;
    if (index >= 0 && index < days.length) {
        visitorReport = "There were ";
        visitorReport += visitorArray[index];
        visitorReport += " visitors ";
        visitorReport += " on " + days[index];
    } else {
        visitorReport = "Invalid day";
    }
    return visitorReport;
};
var getMonthReport = function (monthArray, weekIndex, dayInWeek) {
    var week = monthArray[weekIndex - 1];
    return getVisitorReport(week, dayInWeek);
};
var week1 = [120, 150, 200, 180, 210, 170, 160];
var week2 = [130, 140, 210, 190, 220, 180, 170];
var week3 = [140, 160, 220, 200, 230, 190, 180];
var week4 = [150, 170, 230, 210, 240, 200, 190];
var month = [week1, week2, week3, week4];
console.log(getMonthlyReport(month, 1, 6));
console.log(getMonthlyReport(month, 4, 7));
console.log(getMonthlyReport(month, 2, 3));
