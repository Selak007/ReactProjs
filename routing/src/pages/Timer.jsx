// src/pages/Timer.js
import React, { useState, useEffect } from 'react';

const INITIAL_TIME = 60; // 60 seconds

const Timer = () => {
  const [seconds, setSeconds] = useState(INITIAL_TIME);
  const [isActive, setIsActive] = useState(false);

  // The core logic for the timer interval
  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      // If timer is active and not finished, set an interval
      interval = setInterval(() => {
        setSeconds(prevSeconds => prevSeconds - 1);
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      // If paused, do nothing
      clearInterval(interval);
    } else if (seconds === 0) {
      // If time is up, stop the timer
      setIsActive(false);
      clearInterval(interval);
    }

    // Cleanup function: This is crucial!
    // It runs when the component unmounts or before the effect runs again.
    return () => clearInterval(interval);

  }, [isActive, seconds]); // Re-run effect if isActive or seconds change

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setSeconds(INITIAL_TIME);
  };

  return (
    <div className="page-content">
      <h1>Lab 6: Countdown Timer</h1>
      <div className="timer-display">
        <h2>{seconds}s</h2>
      </div>
      <div className="timer-controls">
        <button onClick={toggleTimer}>
          {isActive ? 'Pause' : 'Start'}
        </button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;