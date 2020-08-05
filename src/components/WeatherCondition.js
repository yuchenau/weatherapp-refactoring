import React, { useContext } from 'react';
import umbrella from '../icons/icon-umbrella.png';
import wind from '../icons/icon-wind.png';
import compass from '../icons/icon-compass.png';
import { StateContext } from '../useContext/StateContext';

export default function WeatherCondition(props) {
    const state = useContext(StateContext);

    return (
        <section className="weather-condition">
          <div className="weather-condition__location"
          >
            {state.city}
          </div>
          <div style={{textAlign: "center", fontSize:14}}>Clear</div>
          <div className="weather-condition__temp" style={{ fontSize:40 }}>
            {state.unit === "C" ? (
              `${state.current.minCelsius}°${state.unit} - ${state.current.maxCelsius}°${state.unit}`
            ) : (
              `${state.current.minFahrenheit}°${state.unit} - ${state.current.maxFahrenheit}°${state.unit}`
            )}
          </div>
          <div className="weather-condition__desc">
            <div>
              <img src={umbrella} alt="umbrella" />
              <span className="citem">{state.current.humidity}%</span>
            </div>
            <div>
              <img src={wind} alt="wind" /> <span className="citem">{state.current.windSpeed} km/h</span>
            </div>
            <div>
            <img src={compass} alt="compass" /> <span className="citem">{state.current.windDirection}</span>
            </div>
          </div>
        </section>
    );
}
