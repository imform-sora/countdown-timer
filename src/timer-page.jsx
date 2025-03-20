import { useRef, useState, useEffect } from "react";
import "./App.css";

function TimerPage() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(90);
  const intervalRef = useRef(null);

  const handleStart = () => {
    if (intervalRef.current) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    setMinutes(Math.floor(seconds / 60));
    setSeconds(seconds % 60);
  };

  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setMinutes(0);
    setSeconds(90);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    };
  }, []);

  return (
    <>
      <h1>Timer</h1>
      <p>
        {minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default TimerPage;
