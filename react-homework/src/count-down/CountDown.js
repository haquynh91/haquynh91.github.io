import { useState, useEffect } from "react";

function CountDown(props) {
  const timeValue = props.time;

  const [countDown, setCountDown] = useState(0);
  // convert seconds to 00:00
  const formatTime = (t) => {
    const mins = Math.floor(t / 60);
    const secs = t % 60;
    if (!t) {
      return `0 : 0`;
    } else return `${mins} : ${secs}`;
  };

  useEffect(() => {
    setCountDown(timeValue);
    const timerId = setInterval(() => {
      setCountDown((preState) => {
        return preState === 0 ? 0 : preState - 1;
      });
    }, 1000);
    return () => {
      clearInterval(timerId);
    };
  }, [timeValue]);

  return (
    <div className="wrapper">
      <h1>{formatTime(countDown)}</h1>
    </div>
  );
}

export default CountDown;
