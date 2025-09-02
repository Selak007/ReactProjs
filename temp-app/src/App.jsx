// src/App.js
import React, { useState } from "react";
import TemperatureDisplay from "./components/TemperatureDisplay.jsx";
import TemperatureControls from "./components/TemperatureControls.jsx";
import UnitToggle from "./components/UnitToggle.jsx";
import "./App.css"; // Import CSS


function App() {
  const [temperature, setTemperature] = useState(0);
  const [isCelsius, setIsCelsius] = useState(true);

  const handleIncrease = () => setTemperature(temperature + 1);
  const handleDecrease = () => setTemperature(temperature - 1);
  const handleToggle = () => {
    setIsCelsius(!isCelsius);
    setTemperature(
      isCelsius
        ? (temperature * 9) / 5 + 32 // C → F
        : ((temperature - 32) * 5) / 9 // F → C
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🌡 Temperature Converter</h1>
      <TemperatureDisplay temperature={temperature} isCelsius={isCelsius} />
      <TemperatureControls
        onIncrease={handleIncrease}
        onDecrease={handleDecrease}
      />
      <UnitToggle isCelsius={isCelsius} onToggle={handleToggle} />
    </div>
  );
}

export default App;
