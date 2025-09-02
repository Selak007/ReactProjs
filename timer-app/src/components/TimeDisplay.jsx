import React from "react";

export default function TimeDisplay({ time }) {
    const minutes = String(Math.floor(time / 60)).padStart(2,"0");
    const Seconds = String(time % 60).padStart(2,"0");

    return (
        <div className="time-display">
            {minutes}:{Seconds}
        </div>
    );
}