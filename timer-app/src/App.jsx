import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ControlButtons from './components/ControlButtons'
import TimeDisplay from './components/TimeDisplay'
import TimeSetter from './components/TimeSetter'

function App() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
}, [isRunning, time]);
    
  const handleStart = () => {
    setIsRunning(true);
  };
  const handlePause = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  };


  // In App.js

return (
  <div className={`App ${isRunning ? 'timer-active' : ''}`}>
    <h1>Timer App</h1>
    <TimeDisplay time={time} />
    <ControlButtons 
      isRunning={isRunning}
      onStart={handleStart}
      onPause={handlePause}
      onReset={handleReset}
    />
    <TimeSetter setTime={setTime} />
  </div>
)
}

export default App;
