let weather = {
  apiKey: "//Add API Key here",
  fetchWeather: function (city) {
    // Replace the OpenWeatherMap API URL with the API Gateway endpoint URL(API gateway endpoints from AWS(HTTP-API)
    fetch(`https://"API gateway"?city=${city}&apiKey=${this.apiKey}`)
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      
      .then((data) => this.displayWeather(data));
  },

  //data
  displayWeather: function (response) {
    console.log(response);
    const data = response.body;
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://picsum.photos/1600/900?" + name + "')";
    //https://source.unsplash.com/1600x900/? because source.unsplash is deprecated
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

//weather.fetchWeather("Tampa");
