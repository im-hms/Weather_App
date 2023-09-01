const apiKey = "1dae2ac18bebcb26925d05e88449b87e"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkweather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".city").innerHTML = ""
        document.querySelector(".temp").innerHTML = ""
        document.querySelector(".humidity").innerHTML = ""
        document.querySelector(".wind").innerHTML = ""
    } else {
        document.querySelector(".error").style.display = "none"
        var data = await response.json();
       

        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C"
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h"

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/clouds.png"
        }
        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/clear.png"
        }
        if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/rain.png"
        }
        if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/drizzle.png"
        }
        if (data.weather[0].main == "Mist") {
            weatherIcon.src = "img/mist.png"
        }
        if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/snow.png"
        }
    }

}

checkweather("new York")


searchBtn.addEventListener("click", () => {
    checkweather(searchBox.value)
})

var input = document.getElementById("myInput");

// Execute a function when the user presses a key on the keyboard
input.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    document.getElementById("myBtn").click();
  }
});

