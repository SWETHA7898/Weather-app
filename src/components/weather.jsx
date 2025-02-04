import "./weather.css"
import axios from "axios"
import rain from "../assets/images/rain.png"
import humidity from "../assets/images/humidity.png"
import wind from "../assets/images/wind.png"
import snow from "../assets/images/snow.png"
import drizzle from "../assets/images/drizzle.png"
import clear from "../assets/images/clear.png"
import cloud from "../assets/images/cloud.png"
import { useEffect, useState } from "react"

function Weather() {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(false)
    const [error, setError] = useState("")  // State for error handling

    const allicon = {
        "01d": clear,
        "01n": clear,
        "02d": cloud,
        "02n": cloud,
        "03d": cloud,
        "03n": cloud,
        "04d": drizzle,
        "04n": drizzle,
        "09d": rain,
        "09n": rain,
        "10d": rain,
        "10n": rain,
        "13d": snow,
        "13n": snow,
    }

    function set(evt) {
        setCity(evt.target.value)
    }

    function getWeather() {
        if (city === "") {
            setError("Enter city name")
            return
        }

        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=b24fa8028f2ec22df99818a59202d07f`)
            .then(function (success) {
                setError("")  // Clear any previous error
                const icon = allicon[success.data.weather[0].icon] || clear
                setWeather({
                    humidity: success.data.main.humidity,
                    windSpeed: success.data.wind.speed,
                    temperature: success.data.main.temp,
                    location: success.data.name,
                    icon: icon,
                })
            })
            .catch(function () {
                setError("City not found. Please try again.")
                setWeather(false)
            })
    }
   

    return (
        <div className="weather">
            <div className="search_bar">
                <input  value={city}type="text" placeholder="Enter the city" onChange={set}></input>
                <i className="fa-solid fa-magnifying-glass" onClick={getWeather}></i>
            </div>

            {error && <p className="error" style={{color:"#fff",fontSize:"30px",marginTop:"10px"}}>{error}</p>}  {/* Display error message */}

            {weather ? (
                <>
                    <img src={weather.icon} alt="" className="weather-icon"></img>
                    <p className="temp">{weather.temperature}&deg;c</p>
                    <p className="location">{weather.location}</p>
                    <div className="weather-data">
                        <div className="col">
                            <img src={humidity} alt=""></img>
                            <div>
                                <p>{weather.humidity}%</p>
                                <span>Humidity</span>
                            </div>
                        </div>
                        <div className="col">
                            <img src={wind} alt=""></img>
                            <div>
                                <p>{weather.windSpeed} km/h</p>
                                <span>Wind Speed</span>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <></>
            )}
        </div>
    )
}

export default Weather
