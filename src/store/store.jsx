import { createStore } from "redux";

const INITIAL_VALUE = {
  counter : 0,
  privacy : false
};

const counterReducer = (store = INITIAL_VALUE, action) => {
  if(action.type === 'INCREMENT'){
    return {...store, counter : store.counter + 1}
  }else if(action.type === 'DECREMENT'){
    return {...store,counter : store.counter - 1}
  }
  else if(action.type === 'ADDING'){
    return {...store, counter : store.counter + action.payload.addingValue}
  }

  else if(action.type === 'SUBSTRACT'){
    return {...store, counter : store.counter - action.payload.subtractValue}
  }
  else if(action.type === 'PRIVACY'){
    return {...store, privacy: !store.privacy}
  }
  return store;
}
const counterStore = createStore(counterReducer);

export default counterStore;