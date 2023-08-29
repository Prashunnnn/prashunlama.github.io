const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const fillup = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector("#weather");
const databaseWeather = document.querySelector("#databaseWeather");
const showPastDataButton = document.getElementById("show-past-data");
const pastWeatherDataContainer = document.getElementById("past-weather-data");

const city = "Bury";

const weatherInfo = document.getElementById("info");
window.addEventListener("load", function () {
  getWeather(city);
});

const getWeather = async (city) => {
    const now = Date.now();
    
    // Check if the data was fetched less than 10 minutes ago
    if (now - lastFetchTime < 10 * 60 * 1000) {
      return;
    }
  
    lastFetchTime = now;
  

  weather.innerHTML = `<h2> Loading... </h2>`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data.name);
  return showWeather(data);
};

const showWeather = (data) => {
  if (data.cod == "404") {
    weather.innerHTML = `<h2> City Not Found </h2>`;
    return;
  }
  const currentDate = new Date(data.dt * 1000);
  weather.innerHTML = `
    <div>
      <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="clouds">
      <h1>${data.name}</h1>
      <h2>${data.main.temp} ℃</h2>
      <h4>${data.weather[0].main}</h4>
      <p>Wind Speed: ${data.wind.speed} m/s</p>
      <p>Pressure: ${data.main.pressure} hPa</p>
      <p>Humidity: ${data.main.humidity}%</p>
      <p>Date: ${currentDate.toLocaleDateString()} ${currentDate.toLocaleTimeString()}</p>
    </div>
  `;
};

const displayDatabaseData = async () => {
  const response = await fetch('get_weather_data.php');
  const data = await response.json();

  pastWeatherDataContainer.innerHTML = '';

  data.forEach(entry => {
    const entryDate = new Date(entry.DateTime);
    pastWeatherDataContainer.innerHTML += `
      <div>
        <h2>${entryDate.toLocaleDateString()} ${entryDate.toLocaleTimeString()}</h2>
        <p>Temperature: ${entry.Temperature} °C</p>
        <p>Humidity: ${entry.Humidity}%</p>
        <p>Pressure: ${entry.Pressure} hPa</p>
        <p>Wind Speed: ${entry.Windspeed} m/s</p>
        <p>Description: ${entry.Description}</p>
      </div>
    `;
  });
};

showPastDataButton.addEventListener("click", function () {
  displayDatabaseData();
});

fillup.addEventListener("submit", function (e) {
  getWeather(search.value);
  e.preventDefault();
});

