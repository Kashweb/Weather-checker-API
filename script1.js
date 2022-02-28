const wholeBox = document.querySelector(".wholebox");
inputBox = document.querySelector(".inputbox");
loadinginformation = document.querySelector(".loadinginformation");
searchbar = document.querySelector(".searchbar");
getLocation = document.querySelector(".getlocation"); 
weatherPart = document.querySelector(".weatherpart");
image = document.querySelector("img");
headerButton = document.querySelector("header button");


//functional Enter key
searchbar.addEventListener("keyup", e => {
    if(e.key == "Enter" && searchbar.value != ""){
        console.log("hel")
    }
});

//functional Getlocation/Geolocation button
getLocation.addEventListener("click", () => {
    if(!navigator.geolocation) {
        alert("The Browswer does not support Geolocation...")
    }
    else{
        navigator.geolocation.getCurrentPosition(getGeoLocation, error);
    }
})

//fetchweather using city name function
function fetchWeather(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=city&units=metric&appid=74ee123ab6f6950bfd34ae4827a70492")
    .then((response) => response.json())
    .then((data) => console.log(data));
    };

//fetchweather using Geolocation function
function getGeoLocation(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch("https://api.openweathermap.org/data/2.5/weather?latitude=latitude&longitude=longitude&units=metric&appid=74ee123ab6f6950bfd34ae4827a70492")
    .then((response) => response.json())
    .then((data) => console.log(data));
};

//error when the Geolocation does not work
function error(error){
    console.log("hello")
};

//Display weather on the HTML
function displayWeather(data){

}



    


