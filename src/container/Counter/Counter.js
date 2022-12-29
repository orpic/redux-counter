//use Selector hook , automatically select a part of state
//for class based connect function can be used
import { useSelector, useDispatch } from "react-redux";

import React from "react";
import "./Counter.css";

const Counter = () => {
  const dispatch = useDispatch();
  // 01
  // it needs a function
  // this function determines which piece of data we want to extract
  // automatically setup a subscription to the redux store for this component
  // therfore component gets updated and recieves the latest counter automatically
  // whenever the data changes in redux store
  // react redux clears subscription if for some reason this element is removed from the dom completley
  const counter = useSelector((state) => state.counter);

  //calling use selector to retireve data
  //can be used multiple times

  const show = useSelector((state) => state.showCounter);

  const incrementHandler = () => {
    dispatch({
      type: "increment",
    });
  };

  const increaseHandler = () => {
    dispatch({
      type: "increase",
      amount: 5,
    });
  };
  const decrementHandler = () => {
    dispatch({
      type: "decrement",
    });
  };
  const toggleCounterHandler = () => {
    dispatch({
      type: "toggle",
    });
  };

  return (
    <div className="container-center">
      <div className="counter-container">
        <h1 className="title">redux counter</h1>

        {show && <p className="counter-value">{counter}</p>}

        <div className="btn-row">
          <button onClick={incrementHandler} className="btn">
            increment
          </button>
          <button onClick={increaseHandler} className="btn">
            increment by 5
          </button>
          <button onClick={decrementHandler} className="btn">
            decrement
          </button>
        </div>
        <div className="container-center">
          <button onClick={toggleCounterHandler} className="btn btn-outline">
            toggle visibility
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
