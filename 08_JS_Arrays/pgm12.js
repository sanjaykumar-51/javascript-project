var displayQuestion = function (questionAndAnswer) {
    var options = ["A", "B", "C", "D", "E"];
    console.log(questionAndAnswer.question);
    questionAndAnswer.answers.forEach(function (answer, i) {
        console.log(options[i] + " - " + answer);
    });
};
var question1 = {
    question: "What is the capital of France?",
    answers: [
        "Bordeaux",
        "F",
        "Paris",
        "Brussels"
    ],
    correctAnswer: "Paris"
};
var question2 = {
    question: "What is the capital of France?",
    answers: [
        "Earth",
        "Mars",
        "Jupiter",
        "Venus"
    ],
    correctAnswer: "Mars"
};

var question3 = {
    question: "What is the capital of France?",
    answers: [
        "Indian Ocean",
        "Atlantic Ocean",
        "Pacific Ocean",
        "Arctic Ocean"
    ],
    correctAnswer: "Pacific Ocean"
};
var questions = [question1, question2, question3];
questions.forEach(displayQuestion);