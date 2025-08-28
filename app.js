const weatherContainer = document.querySelector("#weather-container");
// Current Weather API Endpoint
const url =
  "http://www.7timer.info/bin/api.pl?lon=5.73&lat=58.97&product=civil&output=json";
async function fetchWeather() {
  const response = await fetch(url);
  const data = await response.json();
  renderForecast(data.dataseries);
  console.log(data);
}
// optional parameters:
fetchWeather().then((data) => {
  data.dataseries.forEach((entry) => {
    const time = entry.timepoint;
    const temp = entry.temp2m;
    const weather = entry.weather;
    // Render your own HTML/CSS based on these values
  });
});
function renderForecast(series) {
  const container = document.getElementById("weather-container");
  container.innerHTML = ""; // Clear previous content
  series.forEach((entry) => {
    const time = entry.timepoint;
    const temp = entry.temp2m;
    const weather = entry.weather;
    const weatherCard = document.createElement("div");
    weatherCard.classList.add("weather-card");
    weatherCard.innerHTML = `
            <h3>${time}</h3>
            <p>Temperature: ${temp}°C</p>
            <p>Weather: ${weather}</p>
        `;
    container.appendChild(weatherCard);
  });
}
function formatTime(hoursAhead) {
    const now = new Date();
    now.setHours(now.getHours() + hoursAhead);
    return now.toLocaleString("en-GB", { weekday: "short", hour: "2-digit", minute: "2-digit" });
}