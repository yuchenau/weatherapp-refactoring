import React from 'react';
import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <div className="weather-channel__container">
        <Header />
        <Navigation />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
