import { createStore } from "redux";

// 02
// reducre function
// exisiting state as first argument (can be given a default value for first time)
// action it wants dispatched as a second argument (basically a javascript object)
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

// 01
// creating a store and storing it in a store const
// this wants a pointer to the reducer function as a parameter
const store = createStore(counterReducer);

export default store;

// now to provide this store to our react app we genrally go to our highest level in our component tree
// not necesarily, we may wrap start wrapping the compinent from where we actually need the stre
