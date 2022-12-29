import React from "react";

const Counter = () => {
  return (
    <section className="counter">
      <p className="title">redux counter</p>
      <p className="counter-value">--counter value--</p>

      <div className="btn-row">
        <button className="btn">increment</button>
        <button className="btn">decrement</button>
      </div>

      <button className="btn">toggle visibility</button>
    </section>
  );
};

export default Counter;
