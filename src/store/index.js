import { combineReducers, createStore } from "redux";
import { rootReducer } from "../reducers/rootReducer";
const reducer = combineReducers({
  expenses: rootReducer,
});
const initialState = {};
const store = createStore(reducer, initialState);

export default store;