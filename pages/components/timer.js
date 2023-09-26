import React, { useState, useEffect } from "react";

function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [minutess, setMinutess] = useState(initialMinutes);
  const [secondss, setSecondss] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [enjuuk, setEnjuuk] = useState(true);
  const [a, setA] = useState(0);
  const initialMinutes = 5;
  const [fail, setFail] = useState({
    value1: false,
    value2: false,
    value3: false,
    value4: false,
    value5: false,
  });
  const [list, setList] = useState({
    value1: "00:00.00",
    value2: "00:00.00",
    value3: "00:00.00",
    value4: "00:00.00",
    value5: "00:00.00",
  });

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
    setList({
      value1: "00:00.00",
      value2: "00:00.00",
      value3: "00:00.00",
      value4: "00:00.00",
      value5: "00:00.00",
    });
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
      setMinutes(0);
      setSeconds(0);
      setMilliseconds(0);
      setEnjuuk(false);
    }
  };
  const stop = () => {
    setIsRunning(false);
    setEnjuuk(true);
    switch (a) {
      case 1:
        setList({
          value1: [
            minutes.toString().length == 1 ? `0${minutes}` : minutes,
            ":",
            seconds.toString().length == 1 ? `0${seconds}` : seconds,
            ".",
            milliseconds.toString().length == 2
              ? `0${milliseconds}`
              : milliseconds,
          ],
        });
        break;
      case 2:
        setList({
          ...list,
          value2: [
            minutes.toString().length == 1 ? `0${minutes}` : minutes,
            ":",
            seconds.toString().length == 1 ? `0${seconds}` : seconds,
            ".",
            milliseconds.toString().length == 2
              ? `0${milliseconds}`
              : milliseconds,
          ],
        });
        break;
      case 3:
        setList({
          ...list,
          value3: [
            minutes.toString().length == 1 ? `0${minutes}` : minutes,
            ":",
            seconds.toString().length == 1 ? `0${seconds}` : seconds,
            ".",
            milliseconds.toString().length == 2
              ? `0${milliseconds}`
              : milliseconds,
          ],
        });
        break;
      case 4:
        setList({
          ...list,
          value4: [
            minutes.toString().length == 1 ? `0${minutes}` : minutes,
            ":",
            seconds.toString().length == 1 ? `0${seconds}` : seconds,
            ".",
            milliseconds.toString().length == 2
              ? `0${milliseconds}`
              : milliseconds,
          ],
        });
        break;
      case 5:
        setList({
          ...list,
          value5: [
            minutes.toString().length == 1 ? `0${minutes}` : minutes,
            ":",
            seconds.toString().length == 1 ? `0${seconds}` : seconds,
            ".",
            milliseconds.toString().length == 2
              ? `0${milliseconds}`
              : milliseconds,
          ],
        });
        break;

      default:
        break;
    }
  };
  const failClick = () => {
    switch (a) {
      case 1:
        setFail({ ...fail, value1: true });
        break;
      case 2:
        setFail({ ...fail, value2: true });
        break;
      case 3:
        setFail({ ...fail, value3: true });
        break;
      case 4:
        setFail({ ...fail, value4: true });
        break;
      case 5:
        setFail({ ...fail, value5: true });
        break;

      default:
        break;
    }
    if (a === 5) {
      setIsRunning(false);
    }
    // setA((prevA) => prevA + 1);
  };
  const tryCount = () => {
    setA((prevA) => prevA + 1);
  };
  console.log(fail[0]);
  return (
    <div>
      {`${fail[a]}` ? (
        <div style={{ fontSize: "100px" }}>R</div>
      ) : (
        <div style={{ fontSize: "100px" }}>
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
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>1 : {fail.value1 ? "R" : list.value1} </div>
          <div>2 : {fail.value2 ? "R" : list.value2}</div>
          <div>3 : {fail.value3 ? "R" : list.value3}</div>
          <div>4 : {fail.value4 ? "R" : list.value4}</div>
          <div>5 : {fail.value5 ? "R" : list.value5}</div>
        </div>
        {/* //// */}
      </div>
    </div>
  );
}

export default Timer;
