
  // A file to define the action types and action creators
  // actions.ts

import { Stream } from "./state";

  // Define the action types as constants
  export const INITIALIZE = "INITIALIZE";
  export const INCREMENT = "INCREMENT";
  export const DECREMENT = "DECREMENT";
  export const UPDATE_STREAM = "UPDATE_STREAM";
  export const REMOVE_TODO = "REMOVE_TODO";
  
  // Define the action interfaces
  export interface InitializeAction {
    type: typeof INITIALIZE;
    element:any;
  }

  export interface IncrementAction {
    type: typeof INCREMENT;
  }
  
  export interface DecrementAction {
    type: typeof DECREMENT;
  }
  
  export interface UpdateStreamAction {
    type: typeof UPDATE_STREAM;
    data: Stream; // The todo to be added
    pointer:number
  }
  
  export interface RemoveTodoAction {
    type: typeof REMOVE_TODO;
    payload: number; // The index of the todo to be removed
  }
  
  // Define the action union type
  export type Action =
  |InitializeAction
    | IncrementAction
    | DecrementAction
    | UpdateStreamAction
    | RemoveTodoAction;
  
  // Define the action creators
  export const initPaper = (canvas: any): InitializeAction => {
    return {
      type: INITIALIZE,
      element: canvas,
    };
  };

  export const increment = (): IncrementAction => {
    return {
      type: INCREMENT,
    };
  };
  
  export const decrement = (): DecrementAction => {
    return {
      type: DECREMENT,
    };
  };
  
  export const updateStream = (ptr:number,stream: Stream): UpdateStreamAction => {
    return {
      type: UPDATE_STREAM,
      pointer:ptr,
      data: stream,
    };
  };
  
  export const removeTodo = (index: number): RemoveTodoAction => {
    return {
      type: REMOVE_TODO,
      payload: index,
    };
  };
  