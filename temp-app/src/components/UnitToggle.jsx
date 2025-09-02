// src/components/UnitToggle.js
import React from "react";

function UnitToggle({ isCelsius, onToggle }) {
  return (
    <button onClick={onToggle}>
      Switch to {isCelsius ? "Fahrenheit" : "Celsius"}
    </button>
  );
}

export default UnitToggle;

