import { configureStore } from "@reduxjs/toolkit";
import counterSlicer from "./counterSlice";
import privacySlice from "./privacySlicer";

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




const counterStore = configureStore({
  reducer : {
    counter: counterSlicer.reducer,
    privacy: privacySlice.reducer 
  }
});




export default counterStore;