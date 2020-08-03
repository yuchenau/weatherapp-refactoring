import React, {useState, useEffect, useReducer} from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { getWeather } from './axios'

const initialState = {
  citySearch: "",
  city: "",
  current: {},
  forecasts: [],
  limit: 5,
  unit: "C"
}

function reducer(state, action) {
  switch(action.type) {
    case 'SET_CITY':
      return { city: state.city }
  }
}

function App() {
  const [citySearch, setCitySearch] = useState("");
  const [city, dispatch] = useReducer(reducer, initialState)
  const [city, setCity] = useState("");
  const [current, setCurrent] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [limit, setLimit] = useState(5);
  const [unit, setUnit] = useState("C");

  useEffect(() => {
  getWeather("Brisbane")
  .then(res => {
    const city = res.city.name;
    const current = res.current;
    const forecasts = res.forecast.slice(0,10);
    setCity(city);
    setCurrent(current);
    setForecasts(forecasts);
  })
  }, []);

  const changeLimit = (number) => {
    setLimit(number);
  }

  const handleInputChange = (e) => {
    const value = e.target.value;
    setCitySearch(value);
  }

  const handleSearch = () => {
    getWeather(citySearch)
    .then(res => {
      const city = res.city.name;
      const current = res.current;
      const forecasts = res.forecast.slice(0,10);
      setCity(city);
      setCurrent(current);
      setForecasts(forecasts);
  })
  }

  const toggleUnit = () => {
    unit != "C" ? (setUnit("C")) : (setUnit("F"));
  }

  return (
    <div className="App">
      <div className="weather-channel__container">
        <Header />
        <Navigation 
          citySearch = {citySearch}
          unit={unit}
          handleInputChange = {handleInputChange}
          handleSearch = {handleSearch}
          toggleUnit = {toggleUnit}
        />
        <Main
          city = {city}
          current = {current}
          unit = {unit}
          forecasts = {forecasts}
          limit = {limit}
          changeLimit = {changeLimit}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
