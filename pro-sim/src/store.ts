// A file to create the Redux store
// store.ts
import { createStore } from "redux";
import { reducer } from "./reducer";

// Create the Redux store
export const store = createStore(reducer);