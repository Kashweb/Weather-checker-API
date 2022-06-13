
// selecting all the HTML elements. 
let currentQuestion = 0;
let currentScore = 0;
let score = 0;



const startButton = document.querySelector(".startbutton");
startSection = document.querySelector(".startsection");
activeInfo = document.querySelector(".activeinfo");
quizBox = document.querySelector(".quizbox");
timeSeconds = document.querySelector(".timeseconds");
Question = document.querySelector(".question span");
// Options1 = document.querySelector(".option");
// Options2 = document.querySelector(".option");
Options = document.querySelector(".options");
submitButton = document.querySelector(".submitbutton");
prevButton = document.querySelector(".buttonprev");
nextButton = document.querySelector(".buttonnext");
resultsBox = document.querySelector(".resultshide");
restartButton = document.querySelector(".restartbutton");
score = document.querySelector(".score span");


startButton.addEventListener("click", e =>{
    startSection.classList.add("actives");
    quizBox.classList.add("active");
    showQuestions(currentQuestion);
    
});


function showQuestions(currentQuestion) {
    Question.innerHTML = questions[currentQuestion].numb + ": " + " " +questions[currentQuestion].question;

let optionstag = '<button class="option">'+ questions[currentQuestion].options[0] +'</button>'
                + '<button class="option">'+ questions[currentQuestion].options[1] +'</button>'
                + '<button class="option">'+ questions[currentQuestion].options[2] +'</button>'
                + '<button class="option">'+ questions[currentQuestion].options[3] +'</button>'
            
    Options.innerHTML = optionstag;
    nextbutton();
    prevbutton();

    const selectoption = document.querySelectorAll(".option");
    for (i = 0; i < selectoption.length; i++){
    	selectoption[i].setAttribute("onclick", "optionSelected(this)");
    };
};

function optionSelected(answer){
    let userAns = answer.textContent;
    let correctAns = questions[currentQuestion].answer;
    alert(answer.textContent);
}

    // submitButton.addEventListener("click", e =>{
    //     if(userAns == correctAns){
    //         alert("correct")
    //     }else{
    //         alert("not correct")
    //     };
    // });

let totalSeconds = 10;
const timer = setInterval(startTimer, 1000);

function startTimer(){
    if(totalSeconds < 0){
    	timeSeconds.innerHTML = "0";
        clearInterval(timer);
        showQuestions(currentQuestion++);
        nextbutton();
        showQuestions(currentQuestion);
    }else{
    	timeSeconds.innerHTML = totalSeconds;
    }
    totalSeconds--;
};




submitButton.addEventListener("click", e =>{
    if (currentQuestion < questions.length - 1){
        showQuestions(currentQuestion++);
        nextbutton();
        showQuestions(currentQuestion);
        startTimer();
    }else {
        startSection.classList.add("actives");
        quizBox.classList.remove("active");
        resultsBox.classList.add("results");
    } 
});

nextButton.addEventListener("click", e =>{
    startTimer();
    showQuestions(currentQuestion++);
    nextbutton();
    showQuestions(currentQuestion);
    
});

prevButton.addEventListener("click", e =>{
    showQuestions(currentQuestion--);
    prevbutton();
    showQuestions(currentQuestion);
    startTimer();
});

function nextbutton(){
    if(currentQuestion == questions.length - 1){
        nextButton.classList.remove("hide");
    }else{nextButton.classList.add("hide");}
}

function prevbutton(){
    if(currentQuestion >= 1){
        prevButton.classList.add("hide");
    }else{prevButton.classList.remove("hide");}
}

restartButton.addEventListener("click", e =>{
    resultsBox.classList.remove("results");
    quizBox.classList.add("active");
    currentQuestion = 0;
    showQuestions(currentQuestion);
});
