// import { createStore } from "redux";

// redux toolkit
import { configureStore, createSlice } from "@reduxjs/toolkit";

//initial state
const initialState = { counter: 0, showCounter: true };

// redux toolkit
// could create different slices and in different files for maintainability
//02
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      // we still must not mutate existing state
      // redux toolkit internally detects this code
      // clones exisitng state > create new state object >
      // keep non edited state > override the to be edited state
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

//01
const store = configureStore(
  //configuration object
  // we set a reducer property

  {
    reducer: counterSlice.reducer,
    //multiple reducerF
    // reducer: {
    //     //key(property name of our choice) value(different reducer function)
    //     //
    //     counter: counterSlice.reducer
    // }
  }
);

export const counterActions = counterSlice.actions;

export default store;

// now to provide this store to our react app we genrally go to our highest level in our component tree
// not necesarily, we may wrap start wrapping the compinent from where we actually need the stre

// // 01
// // creating a store and storing it in a store const
// // this wants a pointer to the reducer function as a parameter
// const store = createStore(counterReducer);

// // 02
// // reducre function
// // exisiting state as first argument (can be given a default value for first time)
// // action it wants dispatched as a second argument (basically a javascript object)
// const counterReducer = (state = initialState, action) => {
//     if (action.type === "increment") {
//       //
//       // DO NOT DO THIS WHILE WORKING WITH REDUX
//       // NEVER CHANGE/MUTATE THE EXISTING STATE
//       //
//       // state.counter++; // DANGEROUS
//       //
//       // OBJECTS AND ARRAYS ARE REFERENCE VALUES
//       //
//       return {
//         counter: state.counter + 1,
//         showCounter: state.showCounter,
//       };
//     }

//     if (action.type === "increase") {
//       return {
//         counter: state.counter + action.amount,
//         showCounter: state.showCounter,
//       };
//     }

//     if (action.type === "decrement") {
//       return {
//         counter: state.counter - 1,
//         showCounter: state.showCounter,
//       };
//     }

//     if (action.type === "toggle") {
//       return {
//         showCounter: !state.showCounter,
//         counter: state.counter,
//       };
//     }

//     return state;
//   };
