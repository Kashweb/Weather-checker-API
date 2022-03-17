// This is just a practice File. please ignore this and look the the script1.js cheers

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
    const {speed} = data.wind.speed;
    const {city} = data.name;
    const {country} = data.sys.country;
    weatherpart.queryselector(".temp .number").innerText = Math.floor(temp);
    weatherpart.queryselector(".minnumber").innerText = Math.floor(temp_min);
    weatherpart.queryselector(".maxnumber").innerText = Math.floor(temp_max);
    weatherpart.queryselector(".weather").innerText = description;
    weatherpart.queryselector(".location span").innerText = `${city}, ${country}`;
    weatherpart.queryselector(".winddetials .windno").innerText = Math.floor(speed);
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


inputField.addEventListener("keyup", event => {
  if(event.key === 13 && inputField.value != " "){
      console.log("hello")
  }
});



https://api.openweathermap.org/data/2.5/weather?q=Darwin&appid=74ee123ab6f6950bfd34ae4827a70492


// // const searchMatchList = async searchbarText => {
// //     const res = await fetch("cities.json");
// //     const data = await res.json();

// //     let matches = data.filter(city => {
// //         const regex = new RegExp(`^${searchbarText}`, 'gi');
// //         return city.name.match(regex);
// //     });
// //     if (searchbarText.length == 0){
// //         matches = []
// //         matchList.innerHTML = "";
// //     }; 
// //     outputHTML(matches.slice(0, 6))
// // };

// // const outputHTML = matches => {
// //     if(matches.length > 0){
// //         const html = matches.map(
// //             match =>
// //             `<div>
// //                 <h4>
// //                     ${match.name}, ${match.country} 
// //                 </h4>
// //             </div>`)

// //     .join('');

// //     document.getElementById("matchList").innerHTML = html;
    
// //     matchList.addEventListener("click", e =>{
// //         searchbar.value = getElementById(html);
// //     })

// //     }
// // };

// // function searchMatchList() {
// //     fetch("citiesdata.json")
// //     .then((response) => response.json())
// //     .then(data => {
// //     let matches = data.filter(data => {
// //         const regex = new RegExp(`^${searchbarText}`, 'gi');
// //         return data.match(regex);
// //     });
// //     console.log(data);
// // }
// // };