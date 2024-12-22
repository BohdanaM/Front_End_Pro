const weather = document.getElementById("weather");
const humidity = document.getElementById("humidity");
const pressure = document.getElementById("pressure");
const wind = document.getElementById("wind");
const refreshBtn = document.getElementById("refreshBtn");

const apiKey = "03f911682613e578a44351b68190453c";

async function fetchWeather() {
  try {
    const city = "London";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    const response = await fetch(url);

    if (response.status === 200) {
      const data = await response.json();
      const { name, main, weather: weatherInfo, wind: windData } = data;
      const tempCelsius = (main.temp - 273.15).toFixed(1);
      const description = weatherInfo[0].description;

      weather.querySelector(".city-name").textContent = name;
      weather.querySelector("h1").textContent = `${tempCelsius}°C`;
      weather.querySelector(".condition").textContent = description;
      humidity.textContent = `Humidity: ${main.humidity}%`;
      pressure.textContent = `Pressure: ${main.pressure} hPa`;
      wind.textContent = `Wind: ${windData.speed} km/h`;
    } else {
      weather.querySelector(".city-name").textContent = "--";
      weather.querySelector("h1").textContent = "Error";
      weather.querySelector(".condition").textContent = "City not found";
    }
  } catch (error) {
    weather.querySelector(".city-name").textContent = "--";
    weather.querySelector("h1").textContent = "Error";
    weather.querySelector(".condition").textContent = error.message;
  }
}

refreshBtn.addEventListener("click", fetchWeather);

fetchWeather();
