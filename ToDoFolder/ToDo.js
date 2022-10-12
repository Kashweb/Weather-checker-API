document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/get')
    .then((response) => response.json())
    .then((data) => loadHTML([]));
});



const noData = document.querySelector("#nodata");

function loadHTML(data){

    if (data.length === 0){
        noData.style.display = "block";
    }
};









