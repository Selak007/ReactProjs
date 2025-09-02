import React from "react";

function UnitToggle({ isCelcius, onToggle }) {
    return (
        <button onClick={onToggle}>
            Switch to {isCelcius ? "Fahrenheit" : "Celsius"}
        </button>
    );
}

export default UnitToggle;