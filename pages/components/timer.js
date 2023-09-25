import React, { useState, useEffect } from "react";

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [a, setA] = useState(0);
  const [fail, setFail] = useState(false);
  ///count 5 minutes
  const initialMinutes = 5;
  const [minutess, setMinutess] = useState(initialMinutes);
  const [secondss, setSecondss] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [enjuuk, setEnjuuk] = useState(true);

  useEffect(() => {
    let countdown;
    if (isActive && minutess >= 0) {
      countdown = setTimeout(() => {
        if (secondss === 0) {
          if (minutess === 0) {
            setIsActive(false);
          } else {
            setMinutess(minutess - 1);
            setSecondss(59);
          }
        } else {
          setSecondss(secondss - 1);
        }
      }, 1000);
    }

    return () => clearTimeout(countdown);
  }, [isActive, minutess, secondss]);
  ///
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => {
          if (prevMilliseconds < 990) {
            return prevMilliseconds + 10;
          } else {
            setSeconds((prevSeconds) => {
              if (prevSeconds < 59) {
                return prevSeconds + 1;
              } else {
                setMinutes((prevMinutes) => prevMinutes + 1);
                return 0;
              }
            });
            return 0;
          }
        });
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);
  ///

  const startTimer = () => {
    setIsActive(true);
  };

  const resetTimer = () => {
    setA((prevA) => (prevA = 0));
    setIsActive(false);
    setMinutess(initialMinutes);
    setIsRunning(false);
    setMinutes(0);
    setSeconds(0);
    setFail(false);
    setMilliseconds(0);
    setMinutess(0);
    setSecondss(0);
    setEnjuuk(true);
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : time);
  ///
  const start = () => {
    if (a === 5) {
    } else {
      setIsRunning(true);
      tryCount();
      setFail(false);
      setMinutes(0);
      setSeconds(0);
      setFail(false);
      setMilliseconds(0);
      setEnjuuk(false);
    }
  };
  const stop = () => {
    setIsRunning(false);
    setEnjuuk(true);
  };
  const failClick = () => {
    if (a === 5) {
      setIsRunning(false);
    } else {
      setA((prevA) => prevA + 1);
      setFail(true);
    }
  };
  const tryCount = () => {
    setA((prevA) => prevA + 1);
  };

  return (
    <div>
      {fail ? (
        <div style={{ fontSize: "300px" }}>R</div>
      ) : (
        <div style={{ fontSize: "300px" }}>
          <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span>{seconds < 10 ? `0${seconds}` : seconds}</span>.
          <span>{milliseconds < 100 ? `0${milliseconds}` : milliseconds}</span>
        </div>
      )}
      {enjuuk ? <button onClick={start}>Start</button> : <div></div>}

      <button onClick={stop}>Stop</button>

      <button onClick={failClick}>R</button>
      <div>try count</div>
      <h1>{a} / 5</h1>
      <button onClick={resetTimer}>Reset</button>
      <div>
        {/* /// */}
        <div style={{ fontSize: 40 }}>
          <div>Countdown Timer</div>
          <div className="timer">
            {formatTime(minutess)}:{formatTime(secondss)}
          </div>
          <div className="buttons">
            <button onClick={startTimer} disabled={isActive}>
              Start
            </button>
          </div>
        </div>
        {/* //// */}
        <div></div>
        {/* //// */}
      </div>
    </div>
  );
}

export default Timer;
