import React, {useEffect, useReducer} from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { getWeather } from './axios';
import { initialState } from './useReducer/index';
import { reducer } from './useReducer/reducer';
import { StateContext } from './useContext/StateContext';
import { DispatchContext } from './useContext/DispatchContext';
import { setCity, setCurrent, setForecasts } from './useReducer/action';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
  getWeather("Brisbane")
  .then(res => {
    const city = res.city.name;
    const current = res.current;
    const forecasts = res.forecast.slice(0,10);
    dispatch(setCity(city));
    dispatch(setCurrent(current));
    dispatch(setForecasts(forecasts));
  })
  }, []);

  return (
    <StateContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
    <div className="App">
      <div className="weather-channel__container">
        <Header />
        <Navigation />
        <Main />
        <Footer />
      </div>
    </div>
    </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
