import { application, response } from "express";

document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/get')
    .then((response) => response.json())
    .then((data) => loadHTML(data['data']));
});

const savebutton = document.querySelector("#Savebutton");

savebutton.onclick = function(){
    const cityInput = document.querySelector("#cityname");
    const cityname = cityInput.value;
    cityInput.value = "";

    fetch('http://localhost:3000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({cityname : cityname})
    })
    .then(response => response.json())
    .then(data => insertData(data['data']));
}

function insertData(data){

}



const noData = document.querySelector("#nodata");

function loadHTML(data){

    console.log(data);

    if (data.length === 0){
        noData.style.display = "block";
    }
    else{
        noData.style.display = "none";
    }
};









