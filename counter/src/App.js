import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(0);
  };

  return (
    <div className="app">
    <div className="container1">
    <div className="container2">
      COUNTER
      <div className="counter">{counter}</div>
      <div className="buttons">
        <button className="increment" onClick={handleIncrement}>
          +
        </button>
        <button className="decrement" onClick={handleDecrement}>
           - 
        </button>
        <button className="reset" onClick={handleReset}> 
          C
        </button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default App;
