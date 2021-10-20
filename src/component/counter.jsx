import React from "react";
import { UserCounter } from "../contextAPI/Context";
function Counter() {
  const { conter, increaseCounter, decreaseCounter } = UserCounter();
  return (
    <div>
      <h1>Counter: {conter}</h1>
      <button onClick={increaseCounter}>IncreaseCounter</button>
      <button onClick={decreaseCounter}>decreaseCounter</button>
    </div>
  );
}

export default Counter;
