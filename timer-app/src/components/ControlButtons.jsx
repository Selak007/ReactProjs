import React from "react";

export default function ControlButtons({ isRunning, onStart, onPause, onReset }) {
    return (
        <div className="control-buttons">
            {isRunning ? (
                <button onClick={onPause} disabled={!isRunning}>Pause</button>
            ) : (
                <button onClick={onStart} disabled={isRunning}>Start</button>
            )}
            <button onClick={onReset}>Reset</button>
        </div>
    );
}