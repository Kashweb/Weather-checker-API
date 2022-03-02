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
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=74ee123ab6f6950bfd34ae4827a70492`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

//fetchweather using Geolocation function
function fetchGeoLocation(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=74ee123ab6f6950bfd34ae4827a70492`)
    .then((response) => response.json())
    .then((data) => displayWeather(data));
}



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
        const city = data.name;
        const country = data.sys.country;
        const {description, id} = data.weather[0];
        const {temp, temp_min, temp_max, humidity} = data.main;
        const speed = data.wind.speed;

        if(id == 800){
            image.src = "icons/clear.svg";
        }
        else if(id >= 200 && id <= 232){
            image.src = "icons/storm.svg";  
        }
        else if(id >= 600 && id <= 622){
            image.src = "icons/snow.svg";
        }
        else if(id >= 701 && id <= 781){
            image.src = "icons/haze.svg";
        }
        else if(id >= 801 && id <= 804){
            image.src = "icons/cloud.svg";
        }
        else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            image.src = "icons/rain.svg";
        }

        weatherPart.querySelector(".temp .number").innerText = Math.floor(temp);
        weatherPart.querySelector(".minnumber").innerText = Math.floor(temp_min);
        weatherPart.querySelector(".maxnumber").innerText = Math.floor(temp_max);
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
        weatherPart.querySelector(".windno").innerText = Math.floor(speed);
        weatherPart.querySelector(".humiditydetails span").innerText = (humidity);
        weatherPart.querySelector(".").innerText = Math.floor(); 

    }
}


    


