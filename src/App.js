import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import { getWeather } from './axios'

function App() {
  const [citySearch, setCitySearch] = useState("");
  const [city, setCity] = useState("");
  const [current, setCurrent] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [limit, setLimit] = useState(5);

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

  return (
    <div className="App">
      <div className="weather-channel__container">
        <Header />
        <Navigation 
          citySearch = {citySearch}
          handleInputChange = {handleInputChange}
          handleSearch = {handleSearch}
        />
        <Main
          city = {city}
          current = {current}
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
