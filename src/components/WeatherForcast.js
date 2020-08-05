import React, { useContext } from 'react';
import { format } from 'date-fns';
import { StateContext } from '../useContext/StateContext';
import { DispatchContext } from '../useContext/DispatchContext';
import { setLimit } from '../useReducer/action';

export default function WeatherForcast(props) {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const limit = state.limit;
    const forecasts = state.forecasts.slice(0,limit);

    const changeLimit = (number) => {
      dispatch(setLimit(number));
    }

    return (
        <section className="weather-forecast">
          <div className="forecast__switch">
            <button 
                    className={`forecast__switch_0 ${limit === 5? 'switch-active' : ''}`}
                    onClick={() => changeLimit(5)}
            >
              5 items
            </button>
            <button 
                    className={`forecast__switch_1 ${limit === 10? 'switch-active' : ''}`}
                    onClick={() => changeLimit(10)}
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
              <span className="weather-forecast__high">{ state.unit === "C" ? (forecast.minCelsius) : (forecast.minFahrenheit)} °{state.unit} </span>
              <span className="weather-forecast__low">{ state.unit === "C" ? (forecast.maxCelsius) : (forecast.maxFahrenheit)} °{state.unit} </span>
            </div>
          ))}
        </section>
    );
}
