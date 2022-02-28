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
        fetchWeather(searchbar.value)
    }
});

//functional Getlocation/Geolocation button
getLocation.addEventListener("click", () => {
    if(!navigator.geolocation) {
        alert("The Browswer does not support Geolocation...")
    }
    else{
        navigator.geolocation.getCurrentPosition(fetchGeoLocation, error);
    }
})

//fetchweather using city name function
function fetchWeather(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q=city&units=metric&appid=74ee123ab6f6950bfd34ae4827a70492")
    .then((response) => response.json())
    .then((data) => console.log(data));
    };

//fetchweather using Geolocation function
function fetchGeoLocation(position){
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
    if (data.Statuscode == "404"){
        loadinginformation.classlist.replace();
        loadinginformation.innerText = "{searchbar.value} is not a valid city...";
    }
    else {
        const {name} = data.name;
        const {country} = data.sys.country;
        const {description, id} = data.weather[0];
        const {temp, temp_min, temp_max, humidity} = data.main;
        const {speed} = data.wind;

        if(id == 800){
            wIcon.src = "icons/clear.svg";
        }
        else if(id >= 200 && id <= 232){
            wIcon.src = "icons/storm.svg";  
        }
        else if(id >= 600 && id <= 622){
            wIcon.src = "icons/snow.svg";
        }
        else if(id >= 701 && id <= 781){
            wIcon.src = "icons/haze.svg";
        }
        else if(id >= 801 && id <= 804){
            wIcon.src = "icons/cloud.svg";
        }
        else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            wIcon.src = "icons/rain.svg";
        }

        weatherPart.querySelector("")

    }
}


    


