import React, { useState } from 'react';
export default function Weather(props) {
    const [city, setCity] = useState(" ")
    const [temp, setTemp] = useState(" ")
    const [humidity, setHumidity] = useState(" ")
    const [wind, setWind] = useState(" ")
    const [img, setImg] = useState("images/rain.png")
    let url = props.url
    const weather = async () => {
        console.log('hi')
        var city1 = document.getElementById("search").value;
        const response = await fetch(url + city1);
        var data = await response.json();
        setCity(city1)
        console.log(data)
        setTemp(Math.round(data.main.temp));
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
        setImg("images/" + data.weather[0].main + ".png")

    }
    return (
            <div className="container">
                <div className="search">
                    <input type="text" id="search" placeholder="search" />
                    <button onClick={weather}><img src="images/search.png" alt="" /></button>
                </div>

                <div className="weather">
                    <img src={img} className="weather-img" id="im" alt="" />

                    <h1 className="temp">{temp}°C</h1>
                    <h3 className="city">{city}</h3>
                    <div className="info">
                        <div className="details">
                            <img src="images/humidity.png" className="weather-img" alt="" />
                            <div>
                                <p className="humidity">{humidity}%</p>
                                <p>humidity</p>
                            </div>
                        </div>
                        <div className="details">
                            <img src="images/wind.png" alt="" />
                            <div>
                                <p className="wind">{wind}km/h</p>
                                <p>wind</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    )
}
