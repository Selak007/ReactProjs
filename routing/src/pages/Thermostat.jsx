// src/pages/Thermostat.js
import React, { useState } from 'react';
import './Thermostat.css'; // For temperature-based colors

const Thermostat = () => {
  const [temperature, setTemperature] = useState(20); // Initial temp in Celsius

  const increaseTemp = () => setTemperature(prevTemp => prevTemp + 1);
  const decreaseTemp = () => setTemperature(prevTemp => prevTemp - 1);

  const getTempColor = () => {
    if (temperature < 10) return 'blue';
    if (temperature >= 10 && temperature < 25) return 'green';
    return 'red';
  };

  return (
    <div className="page-content">
      <h1>Lab 5: Thermostat</h1>
      <div className="thermostat-display" style={{ borderColor: getTempColor() }}>
        <h2 style={{ color: getTempColor() }}>
          {temperature}°C
        </h2>
      </div>
      <div className="thermostat-controls">
        <button onClick={decreaseTemp}>-</button>
        <button onClick={increaseTemp}>+</button>
      </div>
    </div>
  );
};

export default Thermostat;