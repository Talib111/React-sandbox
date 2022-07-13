/**
 * This is store which connects view and reducer
 */

import { createStore } from "redux";
import Reducer from "./Reducer";

const store = createStore(Reducer);
export default store;
