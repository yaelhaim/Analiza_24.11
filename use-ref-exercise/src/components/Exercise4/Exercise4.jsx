
import { useState, useRef } from "react";

function Exercise4() {
  const [secondsState, setSecondsState] = useState(0);
  const [intervalState, setIntervalState] = useState(null);

  const [secondsRef, setSecondsRef] = useState(0);
  const intervalRef = useRef(null);

  function startStateTimer() {
    if (intervalState !== null) return;

    const id = setInterval(() => {
      setSecondsState((prev) => prev + 1);
    }, 1000);

    setIntervalState(id);
  }

  function stopStateTimer() {
    clearInterval(intervalState);
    setIntervalState(null);
  }

  function startRefTimer() {
    if (intervalRef.current !== null) return;

    intervalRef.current = setInterval(() => {
      setSecondsRef((prev) => prev + 1);
    }, 1000);
  }

  function stopRefTimer() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  return (
    <div>
    <h1>Exercise 4 </h1>
      <h3>Timer with useState</h3>
      <p>Seconds: {secondsState}</p>
      <button onClick={startStateTimer}>Start</button>
      <button onClick={stopStateTimer}>Stop</button>
      <h3>Timer with useRef</h3>
      <p>Seconds: {secondsRef}</p>
      <button onClick={startRefTimer}>Start</button>
      <button onClick={stopRefTimer}>Stop</button>
    </div>
  );
}

export default Exercise4;
