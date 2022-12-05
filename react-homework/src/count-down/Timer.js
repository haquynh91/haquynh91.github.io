//Life circle: Mounting-Updating-Unmounting

import { useState } from "react";
import CountDown from "./CountDown";

function Timer() {
  const [time, setTime] = useState();
  const [value, setValue] = useState();
  return (
    <>
      <input type="text" id="time" onChange={(e) => setTime(e.target.value)} />
      <button
        onClick={() => {
          setValue(time);
        }}
      >
        Start
      </button>
      {value && <CountDown time={value} />}
    </>
  );
}

export default Timer;
