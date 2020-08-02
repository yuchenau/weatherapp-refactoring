import React, {useState, useEffect} from 'react';
import axios from 'axios';
import WeatherForcast from './WeatherForcast';
import WeatherCondition from './WeatherCondition';

export default function Main(props) {
    const [city, setCity] = useState("");
    const [current, setCurrent] = useState({});
    const [forecasts, setForecasts] = useState([]);
    const [limit, setLimit] = useState(5);

    useEffect(() => {
        axios('https://jr-weather-api.herokuapp.com/api/weather?cc=au&city=brisbane')
        .then(res => {
            const data = res.data.data;
            const city = data.city.name;
            const current = data.current;
            const forecasts = data.forecast.slice(0,10);
            setCity(city);
            setCurrent(current);
            setForecasts(forecasts);
        })
    }, []);

    const changeLimit = (number) => {
        setLimit(number);
    }

    return (
        <div>
            <WeatherCondition city={city} current={current} />
            <WeatherForcast forecasts={forecasts} limit={limit} changeLimit={changeLimit} />
        </div>
    );
}

