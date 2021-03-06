import React, { createContext, useState } from "react";

// contextobjek
export const CounterContext = createContext();

export const CounterContextProvider = (props) => {
  const [count, setCount] = useState(0);

  return (
    <CounterContext.Provider value={[count, setCount]}>
      {props.children}
    </CounterContext.Provider>
  );
};
