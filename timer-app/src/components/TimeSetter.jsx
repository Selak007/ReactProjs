import React, {useState} from "react";

export default function TimeSetter({ setTime }) {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const handleSet = () => {
        setTime(minutes * 60 + seconds);
    };

    return(
        <div className="time-setter">
            <input type = "number" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} />
            <span>:</span>
            <input type = "number" value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} />
            <button onClick={handleSet}>Set Time</button>
        </div>
    );
}
