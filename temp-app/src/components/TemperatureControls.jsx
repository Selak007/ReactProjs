// src/components/TemperatureControls.js
import React from "react";

function TemperatureControls({ onIncrease, onDecrease }) {
  return (
    <div style={{ margin: "20px" }}>
      <button onClick={onDecrease}>- Decrease</button>
      <button onClick={onIncrease}>+ Increase</button>
    </div>
  );
}

export default TemperatureControls;
