import { createSlice } from "@reduxjs/toolkit";


const counterSlicer = createSlice({
  name : 'counter',
  initialState : {counterVal : 0},
  reducers : {
    increment : (state) => {
      state.counterVal++;
    },
    decrement : (state) => {
      state.counterVal--;
    },
    add : (state, action) => {
      state.counterVal += action.payload.addingValue;
    },
    substract : (state, action) => {
      state.counterVal -= action.payload.subtractValue;
    }
  }
})

export const counterActions = counterSlicer.actions;

export default counterSlicer;