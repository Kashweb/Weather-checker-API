const startButton = document.querySelector(".startbutton");
activeInfo = document.querySelector(".activeinfo");

startButton.addEventListener("click", e =>{
    hel()
});

function hel(){
    activeInfo.classList.remove("activeInfo")
    alert("hello")
}