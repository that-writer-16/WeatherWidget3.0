import './App.css';
import { useState } from 'react';
import Forecast from './components/Forecast';

function App() {
  const key = `7d9d8fc7914409bf971dcd054cef7b09`;

  const [city, setCity] = useState("Salt Lake City");
  const [forecast, setForecast] = useState(null);
  let currentCity = document.getElementById("currentCity");

  const getData = () => {
    const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=imperial`;

    fetch(url)
      .then(resp => resp.json())
      .then(data => {
        console.log(data);
        setForecast(data.list);
      });
  }

  const search = (searchCity) => {
    setCity(searchCity);
    console.log(`${city} searched,`)
    getData();
    console.log({city});
    currentCity.dangerouslySetInnerHTML(`Current City ${city}`)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Widget 3.0</h1>
      </header>
      <div id='search'>
        <h3 id='currentCity'>Current City: {city}</h3>
        <input id='searchTB' type='search' placeholder='Enter City' value={city}  onChange={e => setCity(e.target.value)}/>
        <button onClick={() => search()}>Search</button>
      </div>
      <div id='weather'>
        {
          forecast ? <Forecast forecast = {forecast}/> : <div>Loading...</div>
        }
      </div>
    </div>
  );
}

export default App;