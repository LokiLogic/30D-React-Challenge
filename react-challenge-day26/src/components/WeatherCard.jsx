import React from 'react';

const WeatherCard = ({ data }) => {
  if (!data) return null;

  return (
    <div className="weather-card">
      <h2>{data.name}, {data.country}</h2>

      <h1 style={{ fontSize: '3rem', margin: '20px 0' }}>{Math.round(data.temp)}°C</h1>

      <div className="weather-details">
        <div>
          <strong>Humidity</strong>
          <p>{data.humidity}%</p>
        </div>
        <div>
          <strong>Wind speed</strong>
          <p>{data.windSpeed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;