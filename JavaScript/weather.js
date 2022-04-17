const wholeBox = document.querySelector(".wholebox");
inputBox = document.querySelector(".inputbox");
loadinginformation = document.querySelector(".loadinginformation");
searchbar = document.querySelector("#searchbar");
getLocation = document.querySelector(".getlocation"); 
weatherPart = document.querySelector(".weatherpart");
image = document.querySelector("img");
headerButton = document.querySelector("header button");

// autocomplete takes 3 arguments the INPUT, ARRAY and the limit to restrict the number of autocomplete suggestions.
function autocomplete(inp, arr, limit) {
    var currentFocus;      
    limit = limit || 5;      

// executes the function as soon the input is entered in the searchbar
    inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) {
        return false;
      }
// creates a  DIV element that will contain the value
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0, numRes = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) { //if the item starts with the same letter?
          if (numRes++ >= limit) {
            break; // break the autocomplete suggestions when it reaches the limit
          }       
// creates a DIv that will contain the autocomplete suggestions
          b = document.createElement("DIV");
          b.innerHTML = arr[i].substr(0, val.length);
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
          b.addEventListener("click", function(e) {
            inp.value = this.getElementsByTagName("input")[0].value;
            closeAllLists();
          });
          a.appendChild(b);
        }
      }
    });

// arrow keys functionality when scolling through the autocomplete suggestions incase your mouse is broken(haha)
    inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) { // enter key functionality 
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
    });

    function addActive(x) {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) currentFocus = (x.length - 1);
      x[currentFocus].classList.add("autocomplete-active");
    }

    function removeActive(x) {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("autocomplete-active");
      }
    }

    function closeAllLists(elmnt) {
      var x = document.getElementsByClassName("autocomplete-items");
      for (var i = 0; i < x.length; i++) {
        if (elmnt != x[i] && elmnt != inp) {
          x[i].parentNode.removeChild(x[i]);
        }
      }
    }
    document.addEventListener("click", function(e) {
      closeAllLists(e.target);
      fetchWeather(searchbar.value)
    });

  }


  autocomplete(document.getElementById("searchbar"), cities);




//functional Enter key
searchbar.addEventListener("keyup", e => {
    if(e.key == "Enter" && searchbar.value != ""){
        fetchWeather(searchbar.value)
    }
});
// takes back to the homescreen
headerButton.addEventListener("click", e =>{
    wholeBox.classList.remove("active");
})

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
    .then((data) => displayWeather(data));
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
    loadinginformation.innerHTML = error.message;
    loadinginformation.classlist.add("error");
};

//Display weather on the HTML 
function displayWeather(data){
    if (data.Statuscode == "404"){
        loadinginformation.classlist.add("error");
        loadinginformation.innerText = "{searchbar.value} is not a valid city...";
    }
    else {
        const city = data.name;
        const country = data.sys.country;
        const {description, id} = data.weather[0];
        const {temp, temp_min, temp_max, humidity} = data.main;
        const {speed} = data.wind;

        if(id == 800){
            image.src = "Images/clear.svg";
        }
        else if(id >= 200 && id <= 232){
            image.src = "Images/storm.svg";  
        }
        else if(id >= 600 && id <= 622){
            image.src = "Images/snow.svg";
        }
        else if(id >= 701 && id <= 781){
            image.src = "Images/haze.svg";
        }
        else if(id >= 801 && id <= 804){
            image.src = "Images/cloudy.svg";
        }
        else if((id >= 500 && id <= 531) || (id >= 300 && id <= 321)){
            image.src = "Images/rainy.svg";
        }
// adding info to the HTML
        weatherPart.querySelector(".temp .number").innerText = Math.floor(temp);
        weatherPart.querySelector(".minnumber").innerText = Math.floor(temp_min);
        weatherPart.querySelector(".maxnumber").innerText = Math.floor(temp_max);
        weatherPart.querySelector(".weather").innerText = description;
        weatherPart.querySelector(".location span").innerText = `${city}, ${country}`;
        weatherPart.querySelector(".windno").innerText = `${Math.floor(speed)}`;
        weatherPart.querySelector(".humiditydetails span").innerText = humidity;
        loadinginformation.classList.remove("processing", "error");
        loadinginformation.innerText = "";
        searchbar.value = "";
        wholeBox.classList.add("active");

    }

}