import React from "react";

function TemperatureDisplay({ temperature, isCelsius}){
    return (
        <h2>{temperature.toFixed(2)} {isCelsius ? "C" : "F"}</h2>
    );
}

export default TemperatureDisplay;