import React, { useContext } from 'react';
import { StateContext } from '../useContext/StateContext';
import { DispatchContext } from '../useContext/DispatchContext';
import { setUnit } from '../useReducer/action';
import { getWeather } from '../axios';
import { setCitySearch, setCity, setCurrent, setForecasts } from '../useReducer/action';

export default function Navigation(props) {
    const state = useContext(StateContext);
    const dispatch = useContext(DispatchContext);

    const handleInputChange = (e) => {
      const value = e.target.value;
      dispatch(setCitySearch(value));
    }

    const handleSearch = () => {
        getWeather(state.citySearch)
        .then(res => {
          const city = res.city.name;
          const current = res.current;
          const forecasts = res.forecast.slice(0,10);
          dispatch(setCity(city));
          dispatch(setCurrent(current));
          dispatch(setForecasts(forecasts));
      })
    }

    const toggleUnit = () => {
      state.unit !== "C" ? (dispatch(setUnit("C"))) : (dispatch(setUnit("F")));
    }

    return (
      <nav>
        <div style={{flex:1}}>
          <input className="search-input" value={state.citySearch} onChange={handleInputChange} />
          <button className="search-btn" onClick={handleSearch}><i className="fa fa-search"></i></button>
          <button className="temp-switch" onClick={toggleUnit}>
            <i
              className="fa fa-thermometer-empty"
              aria-hidden="true"
              style={{paddingRight:5}}
            ></i>
            <sup>&deg;</sup>{state.unit}
          </button>
        </div>
      </nav>
    );
}
