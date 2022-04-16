const startButton = document.querySelector(".startbutton");
activeInfo = document.querySelector(".activeinfo");
quizBox = document.querySelector(".quizbox");

startButton.addEventListener("click", e =>{
    hel()
});

function hel(){
    quizBox.classList.add("active");
};