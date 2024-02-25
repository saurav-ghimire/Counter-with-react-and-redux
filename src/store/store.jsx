import { configureStore, createSlice } from "@reduxjs/toolkit";

// const INITIAL_VALUE = {
//   counter : 0,
//   privacy : false
// };

// const counterReducer = (store = INITIAL_VALUE, action) => {
//   if(action.type === 'INCREMENT'){
//     return {...store, counter : store.counter + 1}
//   }else if(action.type === 'DECREMENT'){
//     return {...store,counter : store.counter - 1}
//   }
//   else if(action.type === 'ADDING'){
//     return {...store, counter : store.counter + action.payload.addingValue}
//   }

//   else if(action.type === 'SUBSTRACT'){
//     return {...store, counter : store.counter - action.payload.subtractValue}
//   }
//   else if(action.type === 'PRIVACY'){
//     return {...store, privacy: !store.privacy}
//   }
//   return store;
// }

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

const privacySlice = createSlice({
  name : 'privacy',
  initialState : false,
  reducers : {
    toggle : (state) => {
      
      return state = !state;
      
    }
  }
})
const counterStore = configureStore({
  reducer : {
    counter: counterSlicer.reducer,
    privacy: privacySlice.reducer 
  }
});

export const counterActions = counterSlicer.actions;
export const privacyActions = privacySlice.actions;

export default counterStore;