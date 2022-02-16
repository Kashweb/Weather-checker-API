let weather = {
apiKey: "74ee123ab6f6950bfd34ae4827a70492",

document.queryselector("searchbar").addEventListener("keyup", e => {
  if (e.key =="Enter" && serachbar.value != ""){
    console.log("hello");
  } 
});

document.queryselector(".getlocation").addEventListener("click", () => {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }else{
    alert("The Browser does not support geolocation");
  };
} 

success: function(position){
  const {latitude, longitude} = position.coords;
  api = "https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=74ee123ab6f6950bfd34ae4827a70492";
  fetchWeather();
}

error: function


fetchWeather: function (city) {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" 
    + city 
    + "&units=metric&appid=" 
    + this.apiKey
  )
    .then((response) => response.json())
    .then((data) => console.log(data));
  },

  displayWeather: function(data){
    const {temp, temp_min, temp_max, humidity} = data.main;
    const {id, description} = data.weather[0];
    const {speed} = data.wind;
    const {city} = data.name;
    const {country} = data.sys.country;
    weatherpart.queryselector(".temp .number").innerText = Math.floor(temp);
    weatherpart.queryselector(".mintemp .minnumber").innerText = Math.floor(temp_min);
    weatherpart.queryselector(".maxtemp .maxnumber").innerText = Math.floor(temp_max);
    weatherpart.queryselector(".weather").innerText = description;
    weatherpart.queryselector(".location span").innerText = "${city}, ${country}";
    weatherpart.queryselector(".winddetials span").innerText = Math.floor(speed);
    weatherpart.queryselector(".humiditydetails span").innerText = "{humidity}%";
  } 
};



 



const wrapper = document.querySelector(".wholebox"),
inputPart = document.querySelector(".inputbox"),
infoTxt = inputPart.querySelector(".loading-information"),
inputField = inputPart.querySelector("input"),
locationBtn = inputPart.querySelector(".getlocation"),
weatherPart = wrapper.querySelector(".weatherpart"),
wIcon = weatherPart.querySelector("img"),
arrowBack = wrapper.querySelector("header button");

inputField.addEventListener("keyup", event => {
    // if user pressed enter btn and input value is not empty
    if(event.key === 13 && inputField.value != ""){
        console.log("hello");
    }
});



  
if(coffee empty())



const wrapper = document.querySelector(".wholebox");
inputPart = document.querySelector(".inputbox");
loadinginformation = document.querySelector(".loadinginformation");
inputField = document.querySelector(".searchbar").style.backgroundColor = "yellow";
locationBtn = document.querySelector(".getlocation"); 
weatherPart = document.querySelector(".weatherpart");
wIcon = document.querySelector("img");
arrowBack = document.querySelector("header button");

inputField.addEventListener("keyup", event => {
    // if user pressed enter btn and input value is not empty
    if(event.key === 13 && inputField.value != " "){
        alert("hello");
    }
});

locationBtn.addEventListener("click")
