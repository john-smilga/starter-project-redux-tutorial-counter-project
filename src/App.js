import React from "react";
import Counter from "./Counter";
import { INCREASE, DECREASE, RESET } from "./actions";
import { createStore } from "redux";
import { Provider } from "react-redux";
// setup initial state
const defaultState = {
  count: 0,
  name: "john"
};
// reducer
function reducer(state = defaultState, action) {
  switch (action.type) {
    case DECREASE:
      return { ...state, count: state.count - 1 };
    case INCREASE:
      return { ...state, count: state.count + 1 };
    case RESET:
      return { ...state, count: 0 };
    default:
      return state;
  }
}
// setup store
const store = createStore(reducer);
// console.log(store.getState());

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}

export default App;
