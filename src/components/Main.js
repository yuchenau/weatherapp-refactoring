import React from 'react';
import WeatherForcast from './WeatherForcast';
import WeatherCondition from './WeatherCondition';

export default function Main(props) {
    return (
        <div>
            <WeatherCondition city={props.city} current={props.current} unit={props.unit} />
            <WeatherForcast forecasts={props.forecasts} limit={props.limit} changeLimit={props.changeLimit} unit={props.unit} />
        </div>
    );
}

