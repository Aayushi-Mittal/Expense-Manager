// import { combineReducers, createStore } from "redux";
// import rootReducer from "../reducer/rootReducer.js";

// function saveToLocalStorage(state) {
//   try {
//     const transactions = JSON.stringify(state);
//     localStorage.setItem("transactionList", transactions);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const transactions = localStorage.getItem("transactionList");
//     if (transactions === null) return undefined;
//     return JSON.parse(transactions);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

// const reducer = combineReducers({
//   transactions: rootReducer,
// });

// // const initialState = {};
// const store = createStore(reducer, loadFromLocalStorage(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// store.subscribe(() => saveToLocalStorage(store.getState()));

// export default store;

import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import rootReducer from "../reducer/rootReducer.js";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export let store = createStore(persistedReducer);
export let persistor = persistStore(store)