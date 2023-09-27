import React, { useState, useEffect } from "react";

export default function Timer() {
  const [isRunning, setIsRunning] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [a, setA] = useState(0);
  const [fail, setFail] = useState({
    value1: false,
    value2: false,
    value3: false,
    value4: false,
    value5: false,
  });
  const [switchFail, setSwitchFail] = useState(false);
  const arr = [];
  const initialMinutes = 5;
  const [minutess, setMinutess] = useState(initialMinutes);
  const [secondss, setSecondss] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [enjuuk, setEnjuuk] = useState(true);
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
  const stopTimer = () => {
    setIsActive(false);
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
    setMinutess(5);
    setSecondss(0);
    setEnjuuk(true);
    setSwitchFail(false);
  };

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  const start = () => {
    if (a === 5) {
    } else {
      setIsRunning(true);
      tryCount();
      setMinutes(0);
      setSeconds(0);
      setMilliseconds(0);
      setEnjuuk(false);
      setSwitchFail(false);
    }
    arr.push(a + 1);
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
        setEnjuuk(true);
        setSwitchFail(true);
        setIsRunning(false);
        setList({ ...list, value1: "R" });
        break;
      case 2:
        setFail({ ...fail, value2: true });
        setEnjuuk(true);
        setSwitchFail(true);
        setIsRunning(false);
        setList({ ...list, value2: "R" });
        break;
      case 3:
        setFail({ ...fail, value3: true });
        setEnjuuk(true);
        setSwitchFail(true);
        setIsRunning(false);
        setList({ ...list, value3: "R" });
        break;
      case 4:
        setFail({ ...fail, value4: true });
        setEnjuuk(true);
        setSwitchFail(true);
        setIsRunning(false);
        setList({ ...list, value4: "R" });
        break;
      case 5:
        setFail({ ...fail, value5: true });
        setEnjuuk(true);
        setSwitchFail(true);
        setIsRunning(false);
        setList({ ...list, value5: "R" });
        break;

      default:
        break;
    }
    if (a === 5) {
      setIsRunning(false);
      setSwitchFail(true);
    }
    // setA((prevA) => prevA + 1);
  };
  const tryCount = () => {
    setA((prevA) => prevA + 1);
  };
  const rUseg = {
    color: "red",
    fontSize: "200px",
    display: "flex",
    justifyContent: "center",
  };
  const undsenTsag = {
    fontSize: "200px",
    width: "55%",
  };
  const undsenTsagContainer = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    color: "#00beff",
  };
  const tryCountStyle = {
    color: "#a9c939",
    fontSize: "150px",
  };
  const tryCountStyle1 = {
    display: "flex",
    flexDirection: "row",
    color: "#ccc",
    fontSize: "50px",
  };
  const tryCountStyle2 = {
    color: "#ccc",
    fontSize: "50px",
    marginTop: "100px",
  };
  const tryCountStyle3 = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "40px",
    width: "300px",
    // backgroundColor: "red",
  };
  const tavanTry = {
    color: "#9bc71a",
    fontSize: "25px",
  };
  const tavanTry1 = {
    display: "flex",
    flexDirection: "column",
    fontSize: "30px",
  };
  const timeRemain = {
    color: "#9bc71a",
    fontSize: "25px",
  };
  const countDown = {
    color: "#00ac2d",
    fontSize: "150px",
  };
  return (
    <div>
      {/* Undsen tsag  */}
      {Object.values(fail)[a] ? (
        <div></div>
      ) : switchFail ? (
        <div style={rUseg}>R</div>
      ) : (
        <div style={undsenTsagContainer}>
          <div style={undsenTsag}>
            <span>{minutes < 10 ? `0${minutes}` : minutes}</span>:
            <span>{seconds < 10 ? ` 0${seconds}` : seconds}</span>.
            <span>
              {milliseconds < 100 ? `0${milliseconds}` : milliseconds}
            </span>
          </div>
        </div>
      )}
      {/*  */}
      {enjuuk ? <button onClick={start}>Start</button> : <div></div>}
      {isRunning ? <button onClick={stop}>Stop</button> : <div></div>}
      {isRunning ? <button onClick={failClick}>R</button> : <div></div>}
      <div style={{ display: "flex" }}>
        <div>
          <div style={{ color: "#9bc71a", fontSize: "25px" }}>Try count</div>
          <div style={tryCountStyle3}>
            <div style={tryCountStyle1}>
              <div style={tryCountStyle}>{a}</div>
              <div style={tryCountStyle2}>/ 5</div>
            </div>
            {isRunning ? (
              <div style={{ color: "#5f7200" }}>Running...</div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
        <div>
          <div style={tavanTry}>Try count</div>
          <div style={tavanTry1}>
            {Object.entries(list).map(([key, value]) => {
              const lastChar = key.slice(-1);
              const cleanValue = value.toString().replace(/[,]/g, "");
              return <div>{`${lastChar}. ${cleanValue}`}</div>;
            })}
          </div>
        </div>
      </div>
      <button onClick={resetTimer}>Reset</button>
      <div>
        <div style={{ fontSize: 40 }}>
          <div style={timeRemain}>Time Remaining</div>
          <div style={countDown}>
            {formatTime(minutess)}:{formatTime(secondss)}
          </div>
          <div>
            <button onClick={startTimer} disabled={isActive}>
              Start
            </button>
            <button onClick={stopTimer}>Stop</button>
          </div>
        </div>
      </div>
    </div>
  );
}
