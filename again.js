const cityName = document.querySelector(".weather-input")
const form = document.querySelector("form")
const wet_data = document.querySelector(".data")
const loading = document.querySelector(".loading")

const Api = "7f670d343ceafdeec801cb2606535bf4"

const allpics = document.querySelectorAll(".weather-img")

const clear_weather = document.querySelector(".clear")
const cloudy = document.querySelector(".cloudy")
const rainy = document.querySelector(".rainy")
const thunder = document.querySelector(".thunder")
const snow = document.querySelector(".snow")
const foggy = document.querySelector(".foggy")

function All() {
    allpics.forEach(weather => {
        weather.style.opacity = 0
    })
}



form.addEventListener("submit", e => {
    e.preventDefault()
    console.log(cityName.value)
    wet_data.innerHTML = ""

    async function weatherforcast() {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName.value}&appid=${Api}`)
        if (!response.ok) {
            throw new Error("City not Found");
            
            
        }
        let forecast = await response.json()
        return forecast
        
    }
    const fore = weatherforcast()
    fore.then(data=>{

        const dayContainer = document.getElementById("forcast")
        dayContainer.innerHTML =""
        for (let i = 0; i < data.list.length; i+=8) {
            const forecast = data.list[i]
            const date =  new Date(forecast.dt_txt)
            const day = date.toLocaleDateString("en-US",{
                weekday:"long"
            })
            const month = date.toLocaleDateString("en-US",{
                day : "numeric",
                month :"short"
            })
            const temperature = forecast.main.temp
            const weather = forecast.weather[0].main
            const image = forecast.weather[0].icon
            let html = 
            `<div class="day1">
                    <h3>${day}</h3>
                    <p>${month}</p>
                    <img src="https://openweathermap.org/payload/api/media/file/${image}%402x.png" alt="">
                    <p>${weather}</p>
                    <h2>${(temperature-273).toFixed(2)}°C</h2>
                </div>`
                dayContainer.innerHTML += html
            }
            
            
            
    })
    


    const fetchWeather = async function () {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${Api}`)
        if (!response.ok) {
            throw new Error("City Not Found");

        }
        let Jsondata = await response.json()
        return Jsondata
    }

    const weatherData = fetchWeather()

    weatherData.then(data => {
        loading.style.display = "none"

        let html = `
        <div class="weather-city">
                <h1 class="city-name">${data.name}, ${data.sys.country}</h1>
                <h2 class="city-weather">${data.weather[0].main}</h2>
            </div>
            <div class="weather-condition">
                <div class="weather-icon">
                    <img src="https://openweathermap.org/payload/api/media/file/${data.weather[0].icon}%402x.png" alt="">
                </div>
                <div class="temperature">${(data.main.temp - 273.15).toFixed(2)}°C</div>
                <div class="maxtemp">
                    <div class="min">Min: ${(data.main.temp_min - 273.15).toFixed(2)}°C</div>
                    <div class="max">Max: ${(data.main.temp_max - 273.15).toFixed(2)}°C</div>
                </div>
            </div>
        `
        wet_data.innerHTML = html

        switch (data.weather[0].icon) {
            case "01d":
            case "01n":
                All()
                clear_weather.style.opacity = 1
                break;
            case "02d":
            case "02n":
            case "03d":
            case "03n":
            case "04d":
            case "04n":
                All()
                cloudy.style.opacity = 1
                break;
            case "09d":
            case "09n":
            case "10d":
            case "10n":
                All()
                rainy.style.opacity = 1
                break;

            case "11d":
            case "11n":
                All()
                thunder.style.opacity = 1
                break;
            case "13d":
            case "13n":
                All()
                snow.style.opacity = 1
                break;

            case "50d":
            case "50n":
                All()
                foggy.style.opacity = 1
                break;

            default:
                break;
        }
    }).catch(error => {
        loading.style.display = "none"
        console.log(error)
        wet_data.innerHTML = `<p>${error}</p>`
    })
    loading.style.display = "block"
    cityName.value = ""




})