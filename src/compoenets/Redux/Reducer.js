/**
 * reducer component to do action on data according to the parameter received
 */
import { useReducer } from "react";

const initialState = {
  count: 1,
  age: "yes"
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GOOD":
      return { ...state, count: state.count + 1 };
    case "BAD":
      return { ...state, age: action.data3 };
    default:
      return state;
  }
};

export default Reducer;
