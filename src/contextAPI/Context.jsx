import { useContext, useState, createContext } from "react";
import React from "react";

const CounterContext = createContext();
export const UserCounter = () => useContext(CounterContext);
///////////////////////////////////////////////////////////////////
function Context(props) {
  const [conter, setCounter] = useState(0);

  const increaseCounter = () => setCounter(conter + 1);
  const decreaseCounter = () => setCounter(conter - 1);

  const value = { conter, increaseCounter, decreaseCounter };
  return (
    <CounterContext.Provider value={value}>
      {props.children}
    </CounterContext.Provider>
  );
}

export default Context;
