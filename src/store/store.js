import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
 import { rootReducer } from "../reducers";

// const {createStore,applyMiddleware}=require("redux");
// const {rootReducer}=require("../reducers");

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware())
);


