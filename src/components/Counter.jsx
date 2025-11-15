import React, { useState } from "react";

import Btn from "./Btn";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    setCounter(counter - 1);
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <div className="flex flex-col gap-10 items-center justify-center mt-40">
      <span>{counter}</span>
      <div className="flex gap-5">
        <Btn title="Increase" onClick={increase} />
        <Btn title="Decrease" onClick={decrease} />
        <Btn title="Reset" onClick={reset} />
      </div>
    </div>
  );
};

export default Counter;
