import { useState } from "react";
import "./CounterApp.css";

const CounterApp = () => {
  let [counter, setCounter] = useState(0);
  // let counter = 0;
  return (
    <>
      <h2>Number Increment & Decrement App</h2>
      <h5 style={{ color: "green" }}>
        Click below button for Increment & Decrement
      </h5>
      <div className="container">
        <button
          style={{ border: "2px solid red" }}
          onClick={() => {
            // console.log(++counter);
            setCounter(--counter);
          }}
        >
          {/* {counter} */}-
        </button>
        <h4>{counter}</h4>
        <button
          style={{ border: "2px solid red" }}
          onClick={() => {
            // console.log(++counter);
            setCounter(++counter);
          }}
        >
          {/* {counter} */}+
        </button>
      </div>
    </>
  );
};

export default CounterApp;
