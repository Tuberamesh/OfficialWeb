const getWeatherBtn = document.getElementById("getWeather");
const cityInput = document.getElementById("city");
const weatherResult = document.getElementById("weatherResult");

getWeatherBtn.addEventListener("click", () => {
    const city = cityInput.value;
    if (city === "") {
        weatherResult.innerHTML = "Please enter a city name.";
        return;
    }

    // Fetch data from wttr.in
    const url = `https://wttr.in/${city}?format=%C+%t`;

    fetch(url)
        .then(response => response.text())
        .then(data => {
            weatherResult.innerHTML = `<p>${city} Weather: ${data}</p>`;
        })
        .catch(error => {
            weatherResult.innerHTML = "Error fetching data. Please try again.";
        });
});