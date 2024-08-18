const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const city = document.getElementById("city");
const temprature = document.getElementById("temprature");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const icon = document.getElementById("icon");
const cityweather = document.getElementById("cityweather");
const nocityfound = document.getElementById("nocityfound");

const API_KEY = '40ea515c47857325698fbaf9aa307896'; // Replace with your actual API key

searchButton.addEventListener("click", updateWeatherData);
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent default form submission behavior
        updateWeatherData();
    }
});

async function updateWeatherData() {
    if (!searchInput.value.trim()) {
        alert("Please enter a city");
        return;
    }

    try {
        const weatherdata = await getWeatherData(searchInput.value);
        console.log("Weather Data:", weatherdata); 
        nocityfound.classList.add("hidden");
        cityweather.classList.remove("hidden");
        city.textContent = weatherdata.city || "Unknown City";
        temprature.textContent = weatherdata.temprature !== null ? `${weatherdata.temprature}°C` : "N/A";
        humidity.textContent = weatherdata.humidity !== null ? `${weatherdata.humidity}%` : "N/A";
        wind.textContent = weatherdata.wind !== null ? `${weatherdata.wind} km/h` : "N/A";
        icon.innerHTML = weatherdata.icon ? `<img src="${weatherdata.icon}" alt="Weather Icon">` : "";
    } catch (error) {
        cityweather.classList.add("hidden");
        nocityfound.classList.remove("hidden");
        console.error("Error fetching weather data:", error);
        alert("Unknown error: " + (error.message || "An error occurred"));
    }
}

async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    const apiResponse = await fetch(apiUrl);

    if (!apiResponse.ok) {
        const errorData = await apiResponse.json(); 
        console.error("API Response Error:", errorData); 
        throw { code: apiResponse.status, message: errorData.message || `HTTP Error: ${apiResponse.status}` };
    }

    const apiResponseBody = await apiResponse.json();
    console.log("API Response:", apiResponseBody); 

    if (apiResponseBody.cod === "404") {
        throw { code: "404", message: "City not found" };
    }

    return {
        city: apiResponseBody.name || "Unknown City",
        temprature: apiResponseBody.main?.temp ? Math.round(apiResponseBody.main.temp) : null,
        humidity: apiResponseBody.main?.humidity || null,
        wind: apiResponseBody.wind?.speed ? Math.round(apiResponseBody.wind.speed) : null,
        icon: apiResponseBody.weather[0]?.icon ? getIconUrl(apiResponseBody.weather[0].icon) : null
    };
}

function getIconUrl(iconCode) {
    return `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
}
