const apiKey = "c60da9cdd44386d0d5214da074354179"
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric`

const inputEl = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const cityName = document.querySelector("#cityName")
const degree = document.querySelector("#degree")
const wind = document.querySelector(".wind")
const humidity = document.querySelector(".humidity")
const weatherImg = document.querySelector(".weather-icon")

async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`)
    var data = await response.json()

    cityName.textContent = data.name
    degree.textContent = Math.round(data.main.temp) + " °C"
    wind.textContent = data.wind.speed + " km/h"
    humidity.textContent = data.main.humidity + " %"

    if (data.weather[0].main == "Clouds") {
        weatherImg.src = "images/clouds.png"
    }
    else if (data.weather[0].main == "Clear") {
        weatherImg.src = "images/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherImg.src = "images/rain.png"
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherImg.src = "images/drizzle.png"
    }
    else if (data.weather[0].main == "Mist") {
        weatherImg.src = "images/mist.png"
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(inputEl.value)
})


checkWeather()