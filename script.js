let weather = {
  apiKey: "74ee123ab6f6950bfd34ae4827a70492",
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

    }
  };