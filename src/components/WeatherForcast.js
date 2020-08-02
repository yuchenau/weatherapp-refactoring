import React from 'react';
import { format } from 'date-fns';

export default function WeatherForcast(props) {
    const limit = props.limit;
    const forecasts = props.forecasts.slice(0,limit);

    return (
        <section className="weather-forecast">
          <div className="forecast__switch">
            <button className="forecast__switch_0 switch-active"
                    onClick={() => props.changeLimit(5)}
            >
              5 items
            </button>
            <button className="forecast__switch_1"
                    onClick={() => props.changeLimit(10)}
            >
              10 items
            </button>
          </div>

          {forecasts.map((forecast) => (
            <div className="weather-forecast__row" key={forecast.time}>
              <span className="weather-forecast__day">{format(new Date(forecast.time * 1000), "EEE")}</span>
              <span className="weather-forecast__icon">
                <i className="fa fa-clock-o"></i>{format(new Date(forecast.time * 1000), "HH:MM")}
              </span>
              <span className="weather-forecast__high">{forecast.maxCelsius} °c </span>
              <span className="weather-forecast__low">{forecast.minCelsius} °c</span>
            </div>
          ))}
        </section>
    );
}
