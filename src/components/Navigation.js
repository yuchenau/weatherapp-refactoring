import React, { useContext } from 'react';
import { StateContext } from '../useContext/StateContext';

export default function Navigation(props) {
    const state = useContext(StateContext);
    return (
      <nav>
        <div style={{flex:1}}>
          <input className="search-input" value={state.citySearch} onChange={props.handleInputChange} />
          <button className="search-btn" onClick={props.handleSearch}><i className="fa fa-search"></i></button>
          <button className="temp-switch" onClick={props.toggleUnit}>
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
