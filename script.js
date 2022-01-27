let weather ={
    "api" = "74ee123ab6f6950bfd34ae4827a70492",
    fetchweather: function(location) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid="\
        +this.api
        .then(responce => {
            return responce,json();
        }) .then(function(responce) {
            console.log(responce.coord);

        })

        



https://api.openweathermap.org/data/2.5/weather?q=Darwin&appid=74ee123ab6f6950bfd34ae4827a70492


https://api.openweathermap.org/data/2.5/weather?q=Darwin&units=metric&appid=74ee123ab6f6950bfd34ae4827a70492

https://api.openweathermap.org/data/2.5/onecall?lat=-12.462827&lon=130.841782&exclude=current,minutely,hourly,alerts&appid=74ee123ab6f6950bfd34ae4827a70492