// Ex: Redux Life Cycle using only Node
const redux = require("redux");

// replecating State
const INITIAL_VALUE = {
  counter: 0,
};

// Reducer
const reducer = (store = INITIAL_VALUE, action) => {
  let newState = store;

  if (action.type === "INCREMENT") {
    newState = { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    newState = { counter: store.counter - 1 };
  } else if (action.type === "ADDITION") {
    newState = { counter: store.counter + action.payload.number };
  }

  return newState;
};

// Store
const store = redux.createStore(reducer);

// demo subscriber (Component)
const subscriber1 = () => {
  // using State from Redux Store
  const state = store.getState();
  console.log(state);
};

// subscriber Subscribing to Store - to get future State updates
store.subscribe(subscriber1);

// Dispatch Action - to change all subscriber's state
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "ADDITION", payload: { number: 7 } });
store.dispatch({ type: "DECREMENT" });
