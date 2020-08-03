import React from 'react';
import umbrella from '../icons/icon-umbrella.png';
import wind from '../icons/icon-wind.png';
import compass from '../icons/icon-compass.png';

export default function WeatherCondition(props) {
    return (
        <section className="weather-condition">
          <div className="weather-condition__location"
          >
            {props.city}
          </div>
          <div style={{textAlign: "center", fontSize:14}}>Clear</div>
          <div className="weather-condition__temp" style={{ fontSize:40 }}>{props.current.minCelsius}°c - {props.current.maxCelsius}°c</div>
          <div className="weather-condition__desc">
            <div>
              <img src={umbrella} alt="umbrella" />
              <span className="citem">{props.current.humidity}%</span>
            </div>
            <div>
              <img src={wind} alt="wind" /> <span className="citem">{props.current.windSpeed} km/h</span>
            </div>
            <div>
            <img src={compass} alt="compass" /> <span className="citem">{props.current.windDirection}</span>
            </div>
          </div>
        </section>
    );
}
