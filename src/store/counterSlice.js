import { createSlice } from "@reduxjs/toolkit";

//initial state
const initialCounterState = { counterValue: 0, showCounter: true };

// redux toolkit
// could create different slices and in different files for maintainability
//02
const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // we still must not mutate existing state
      // redux toolkit internally detects this code
      // clones exisitng state > create new state object >
      // keep non edited state > override the to be edited state
      state.counterValue++;
    },
    decrement(state) {
      state.counterValue--;
    },
    increase(state, action) {
      state.counterValue = state.counterValue + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
