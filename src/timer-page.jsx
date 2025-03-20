import { useRef, useState, useEffect } from "react";
import "./App.css";

const TIMER_VALUE = 10000;

function TimerPage() {
  const [timer, setTimer] = useState(TIMER_VALUE);
  const intervalRef = useRef(null);

  const hours = String(Math.floor(timer / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timer % 3600) / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  const handleStart = () => {
    if (intervalRef.current) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);
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
    setTimer(TIMER_VALUE);
  };

  useEffect(() => {
    if (timer === 0) {
      handleStop();
    }
  }, [timer]);

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
        {hours} : {minutes} : {seconds}
      </p>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
}

export default TimerPage;
