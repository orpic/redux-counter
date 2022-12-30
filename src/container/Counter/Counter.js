//use Selector hook , automatically select a part of state
//for class based connect function can be used
import { useSelector, useDispatch } from "react-redux";

import React from "react";
import "./Counter.css";

import { counterActions } from "../../store/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  // 01
  // it needs a function
  // this function determines which piece of data we want to extract
  // automatically setup a subscription to the redux store for this component
  // therfore component gets updated and recieves the latest counter automatically
  // whenever the data changes in redux store
  // react redux clears subscription if for some reason this element is removed from the dom completley
  const counter = useSelector((state) => state.counter.counterValue);

  //calling use selector to retireve data
  //can be used multiple times

  const show = useSelector((state) => state.counter.showCounter);

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5));
    //   {type: identifier, payload: }
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <div className="container-center">
      <div className="container-css">
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
            toggle element in dom tree
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
