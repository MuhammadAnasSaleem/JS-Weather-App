const apiKey = "16770878a278dd6e1f8863b614518326";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector(".search input")
const searchButton = document.querySelector(".search button")
const icon = document.querySelector(".weather-icon")

async function checkWeather(city){

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data)



    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = data.main.temp + "°C"
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h"


    if(data.weather[0].main == "Clouds"){
        icon.src = "images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
        icon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Drizzle"){
        icon.src = "images/drizzle.png"
    }else if(data.weather[0].main == "Mist"){
        icon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Rain"){
        icon.src = "images/rain.png"
    }



    document.querySelector(".weather").classList.remove("hidden");
document.querySelector(".weather").classList.add("visible");






} 

searchButton.addEventListener("click" , () => {
    checkWeather(searchBox.value)
})



