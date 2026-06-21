import React, { useState, useEffect } from 'react';

// Mock Weather Dataset (Phase A: Offline-first)
const MOCK_WEATHER_DB = {
  "london": { temp: "15°C", desc: "light rain and mist", humidity: "82%" },
  "paris": { temp: "18°C", desc: "partly cloudy", humidity: "65%" },
  "new york": { temp: "22°C", desc: "sunny intervals", humidity: "45%" },
  "tokyo": { temp: "26°C", desc: "humid and warm", humidity: "72%" }
};

function WeatherApp() {
  const [city, setCity] = useState("london");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  // Optional: Phase B OpenWeather API key configuration details
  const API_KEY = ""; // Enter your OpenWeather API key here to enable live queries

  const fetchWeather = (cityName) => {
    setError("");
    const query = cityName.toLowerCase().trim();

    if (!API_KEY) {
      // Phase A: Offline mock lookup
      if (MOCK_WEATHER_DB[query]) {
        setWeatherData({
          city: query.toUpperCase(),
          temp: MOCK_WEATHER_DB[query].temp,
          desc: MOCK_WEATHER_DB[query].desc,
          humidity: MOCK_WEATHER_DB[query].humidity,
          mode: "Offline Mock Data"
        });
      } else {
        setError("City not found in offline DB! Try: London, Paris, New York, Tokyo.");
        setWeatherData(null);
      }
    } else {
      // Phase B: Live API query
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}&units=metric`)
        .then(res => {
          if (!res.ok) throw new Error("City not found in online database");
          return res.json();
        })
        .then(data => {
          setWeatherData({
            city: data.name,
            temp: `${Math.round(data.main.temp)}°C`,
            desc: data.weather[0].description,
            humidity: `${data.main.humidity}%`,
            mode: "Live API Data"
          });
        })
        .catch(err => {
          setError(err.message);
          setWeatherData(null);
        });
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchWeather(city);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '25px', border: '1px solid #ccc', borderRadius: '12px', textAlign: 'center' }}>
      <h3>Weather Search</h3>
      <form onSubmit={handleSearch}>
        <input value={city} onChange={e => setCity(e.target.value)} placeholder="Search City..." />
        <button type="submit">Search</button>
      </form>

      {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}

      {weatherData && (
        <div style={{ marginTop: '25px', background: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
          <h4>{weatherData.city}</h4>
          <h2 style={{ color: '#f59e0b', fontSize: '36px', margin: '10px 0' }}>{weatherData.temp}</h2>
          <p style={{ textTransform: 'capitalize' }}>{weatherData.desc}</p>
          <p>Humidity: {weatherData.humidity}</p>
          <small style={{ color: 'green' }}>Mode: {weatherData.mode}</small>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;