import React from 'react';
import WeatherForcast from './WeatherForcast';
import WeatherCondition from './WeatherCondition';

export default function Main(props) {
    return (
        <div>
            {/* <WeatherCondition current={props.current} unit={props.unit} />
            <WeatherForcast forecasts={props.forecasts} limit={props.limit} changeLimit={props.changeLimit} unit={props.unit} /> */}
            <WeatherCondition />
            <WeatherForcast changeLimit={props.changeLimit} />
        </div>
    );
}

