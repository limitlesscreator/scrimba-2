import React, {useState} from 'react';
import axios from "axios";

export const Weather = () => {
    const [weather, setWeather] = useState(null)
    const [input, setInput] = useState('London')

    const weatherInput = (e) => {
        setInput(e.currentTarget.value)
    }

    const searchWeather = () => {
        axios
            .get(`http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API}&q=${input}&aqi=no`)
            .then(data => {
                setWeather(data.data)
            })
            .catch((err) => {
                console.log(`Error ${err}`)
            })
    }
    return (
        <div className="App">
            <div className={'search'}>
                <input type="text" value={input} onChange={weatherInput}/>
                <button onClick={searchWeather}> Search</button>
            </div>
            {weather && (
                <div>
                    <h1>{weather.location.country}</h1>
                    <h2>{weather.location.region}</h2>
                    <div className={'conditon'}>
                        <h3>{weather.current.condition.text}</h3>
                        <img src={weather.current.condition.icon}></img>
                        <h3>{weather.current.temp_c} Cesius</h3>
                    </div>
                </div>
            )}
        </div>
    );
};

// 1:18