var question1;
var question2;
var question3;
var currentQuestion;
var showQuestionInfo;

//first quiz
question1 = {
    question: "What is the capital of France?",
    options: ["Paris", "London", "Berlin", "Madrid"],
    correctAnswer: "Paris"
};

question2 = {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: "4"
};

question3 = {
    question: "Who wrote 'To Kill a Mockingbird'?",
    options: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "F. Scott Fitzgerald"],
    correctAnswer: "Harper Lee"
};
//Function to show the question
showQuestionInfo = function() {
    console.log("Question: " + currentQuestion.question);
    console.log("Options:");
    currentQuestion.options.forEach(function(option, index) {
        console.log((index + 1) + ". " + option);
    });
        console.log("-----------------------------------");
    };
    //display all three
    currentQuestion = question1;
    showQuestionInfo();
    currentQuestion = question2;
    showQuestionInfo();
    currentQuestion = question3;
    showQuestionInfo();
