import { createStore } from "redux";

const INITAL_VALUE = {
  counter: 0,
  privacy: false,
};

const counterReducer = (store = INITAL_VALUE, action) => {
  //   console.log("Action Recived: ", action);
  if (action.type === "INCREMENT") {
    return { ...store, counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { ...store, counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return {
      ...store,
      counter: store.counter + action.payload.num,
    };
  } else if (action.type === "SUBSTRACT") {
    return {
      ...store,
      counter: store.counter - action.payload.num,
    };
  } else if (action.type === "PRIVACY_TOGGLE") {
    return { ...store, privacy: !store.privacy };
  }

  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
