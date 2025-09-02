import React, { useState } from "react";
import TemperatureDisplay from "./components/TemperatureDisplay";
import TemperatureControl from "./components/TemperatureControl";
import UnitToggle from "./components/UnitToggle";
import "./App.css";

function App() {
  const [temp,setTemp] = useState(0);
  const [isCelsius, setIsCelsius] = useState(true);

  const handleIncrease = () => setTemp(temp + 1);
  const handleDecrease = () => setTemp(temp - 1);
  const handleToggle = () => {
    setIsCelsius(!isCelsius);
    setTemp(
      isCelsius ? (temp * 9) / 5 + 32 : ((temp - 32) * 5) / 9
    )
  }

  return (
    <div style= {{ textAlign : "center", marginTop: "50px" }}>
    <h1>Temperature Converter</h1>
    <TemperatureDisplay temperature={temp} isCelsius={isCelsius} />
    <TemperatureControl onIncrease={handleIncrease} onDecrease={handleDecrease} />
    <UnitToggle isCelcius={isCelsius} onToggle={handleToggle} />
    </div>
  )
}

export default App;