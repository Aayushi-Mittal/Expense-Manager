import { combineReducers, createStore } from "redux";
import rootReducer from "../reducer/rootReducer.js";
const reducer = combineReducers({
  transactions: rootReducer,
});
// const initialState = {};
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;