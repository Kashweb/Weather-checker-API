
// selecting all the HTML elements. 
const startButton = document.querySelector(".startbutton");
activeInfo = document.querySelector(".activeinfo");
quizBox = document.querySelector(".quizbox");
timeSeconds = document.querySelector(".timeseconds");
Question = document.querySelector(".question span");
Options1 = document.querySelector(".option");
Options2 = document.querySelector(".option");



startButton.addEventListener("click", e =>{
    quizBox.classList.add("active");
    showQuestions();
});

function showQuestions() {
    Question.innerHTML = questions[0].question;
}


