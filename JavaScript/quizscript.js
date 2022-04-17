
// selecting all the HTML elements. 
const startButton = document.querySelector(".startbutton");
activeInfo = document.querySelector(".activeinfo");
quizBox = document.querySelector(".quizbox");
timeSeconds = document.querySelector(".timeseconds");
Question = document.querySelector(".question span");
// Options1 = document.querySelector(".option");
// Options2 = document.querySelector(".option");
Options = document.querySelector(".options");



startButton.addEventListener("click", e =>{
    quizBox.classList.add("active");
    showQuestions(0);
});

let currentQuestion = 0;

function showQuestions() {
    Question.innerHTML = questions[currentQuestion].question;

let OptionList = '<button class="option">'+ questions[currentQuestion].options[0] +'</button>'
                + '<button class="option">'+ questions[currentQuestion].options[1] +'</button>'
                + '<button class="option">'+ questions[currentQuestion].options[2] +'</button>'
                + '<button class="option">'+ questions[currentQuestion].options[3] +'</button>'
            
    Options.innerHTML = OptionList; 
}


