import React from "react";
import "./Counter.css";

const Counter = () => {
  return (
    <div className="container">
      <div className="counter-container">
        <h1 className="title">redux counter</h1>
        <p className="counter-value">--counter value--</p>

        <div className="btn-row">
          <button className="btn">increment</button>
          <button className="btn">decrement</button>
        </div>
    <div className="container-center">
                  <button className="btn btn-outline">toggle visibility</button>
                  </div>
      </div>
    </div>
  );
};

export default Counter;
