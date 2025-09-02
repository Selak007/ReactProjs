import React from "react";

function TemperatureControl({onIncrease,onDecrease}){
    return (
        <div style={{ margin : "20px"}}>
            <button onClick={onDecrease}>Decrease (-)</button>
            <button onClick={onIncrease}>Increase (+)</button>
        </div>
    )
}

export default TemperatureControl;