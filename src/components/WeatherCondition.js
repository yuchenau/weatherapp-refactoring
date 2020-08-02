import React from 'react';
import umbrella from '../icons/icon-umbrella.png';
import wind from '../icons/icon-wind.png';
import compass from '../icons/icon-compass.png';

export default function WeatherCondition(props) {
    return (
        <section className="weather-condition">
          <div className="weather-condition__location">
            {props.city}
          </div>
          <div style={{textAlign: "center", fontSize:14}}>Clear</div>
          <div className="weather-condition__temp">19 c</div>
          <div className="weather-condition__desc">
            <div>
              <img src={umbrella} alt="umbrella" />
              <span className="citem">20%</span>
            </div>
            <div>
              <img src={wind} alt="wind" /> <span className="citem">3 km/h</span>
            </div>
            <div>
              <img src={compass} alt="compass" /> <span className="citem">NE</span>
            </div>
          </div>
        </section>
    );
}
