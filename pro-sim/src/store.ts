// A file to create the Redux store
// store.ts
//import { createStore } from "redux";
import { reducer } from "./reducer";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Create the Redux store
//export const store = createStore(reducer);
export const store = createStore(reducer, applyMiddleware(thunk));