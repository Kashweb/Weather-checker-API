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
      const {temp, temp_min, temp_max, humidity} = data.main;
      const {id, description} = data.weather[0];
      const {speed} = data.wind;
      const {city} = data.name;
      const {country} = data.sys.country;
      weatherpart.queryselector(".temp .number").innerText = Math.floor(temp);
      weatherpart.queryselector(".mintemp .minnumber").innerText = Math.floor(temp_min);
      weatherpart.queryselector(".maxtemp .maxnumber").innerText = Math.floor(temp_max);
      weatherpart.queryselector(".weather").innerText = description;
      weatherpart.queryselector(".location span").innerText = ${city}, ${country};
      weatherpart.queryselector(".winddetials span").innerText = Math.floor(speed);
      weatherpart.queryselector(".humiditydetails span").innerText = Math.floor(humidity);
    } 
  };