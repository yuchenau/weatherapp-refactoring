import React, {useEffect, useReducer} from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { getWeather } from './axios'
import { initialState } from './useReducer/index';
import { reducer } from './useReducer/reducer';
import { StateContext } from './useContext/StateContext';

function App() {
  // const [citySearch, setCitySearch] = useState("");
  // const [city, setCity] = useState("");
  // const [current, setCurrent] = useState({});
  // const [forecasts, setForecasts] = useState([]);
  // const [limit, setLimit] = useState(5);
  // const [unit, setUnit] = useState("C");

  const [state, dispatch] = useReducer(reducer, initialState);
  const { citySearch } = state;

  useEffect(() => {
  getWeather("Brisbane")
  .then(res => {
    const city = res.city.name;
    const current = res.current;
    const forecasts = res.forecast.slice(0,10);
    // setCity(city);
    // setCurrent(current);
    // setForecasts(forecasts);
    dispatch({ type: "SET_CITY", city });
    dispatch({ type: "SET_CURRENT", current });
    dispatch({ type: "SET_FORECASTS", forecasts });
  })
  }, []);

  const changeLimit = (number) => {
    // setLimit(number);
    dispatch({ type: "CHANGE_LIMIT", number})
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    // setCitySearch(value);
    dispatch({ type: "SET_CITYSEARCH", value })
  }

  const handleSearch = () => {
    getWeather(citySearch)
    .then(res => {
      const city = res.city.name;
      const current = res.current;
      const forecasts = res.forecast.slice(0,10);
      // setCity(city);
      // setCurrent(current);
      // setForecasts(forecasts);
      dispatch({ type: "SET_CITY", city});
      dispatch({ type: "SET_CURRENT", current});
      dispatch({ type: "SET_FORECASTS", forecasts});
  })
  }

  const toggleUnit = () => {
    // unit != "C" ? 
    //   (
    //     // setUnit("C")
    //     dispatch({ type="SET_UNIT", "C" })
    //   ) : 
    //   (
    //     // setUnit("F")
    //     dispatch({ type="SET_UNIT", "F" })
    //   );
  }

  return (
    <StateContext.Provider value={state}>
    <div className="App">
      <div className="weather-channel__container">
        <Header />
        <Navigation 
          // citySearch = {citySearch}
          // unit={unit}
          handleInputChange = {handleInputChange}
          handleSearch = {handleSearch}
          toggleUnit = {toggleUnit}
        />
        <Main
          // city = {city}
          // current = {current}
          // unit = {unit}
          // forecasts = {forecasts}
          // limit = {limit}
          changeLimit = {changeLimit}
        />
        <Footer />
      </div>
    </div>
    </StateContext.Provider>
  );
}

export default App;
