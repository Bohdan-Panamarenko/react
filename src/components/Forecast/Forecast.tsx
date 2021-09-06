import { SyntheticEvent, useState } from 'react';
import './Forecast.css';
import ForecastTable from './ForecastTable/ForecastTable';

export default function Forecast() {
  const [city, setCity] = useState('London');
  const [forecast, setForecast] = useState({ cod: 200 });
  
  function getForecast(city: string) {
    let key = '9eaf1cb25963c5f59244fa7e03c68cc8';
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=' + key;
    fetch(url)
      .then(response => response.json())
      .then(response => setForecast(response))
      .catch(() => { setForecast({ cod: 404 }); });
  }

  const updateCity = (event: SyntheticEvent) => {
    setCity((event.target as HTMLInputElement).value);
  }


  return (
    <div id="forecast-container">
      <form id="choose-city">

        <label htmlFor="city">Print your city</label>
        <input type="text" id="city" name="city" placeholder={city} onChange={updateCity} />
        <button id="show-forecast-button" onClick={(event: SyntheticEvent) => {

          event.preventDefault();
          getForecast(city);

        }}>Show forecast</button>

      </form>

      <div id="forecast-table-container">
        <ForecastTable forecast={forecast} />
      </div>
    </div>
  );
}