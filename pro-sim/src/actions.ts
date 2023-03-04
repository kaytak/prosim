
  // A file to define the action types and action creators
  // actions.ts

import { dia, shapes } from "jointjs";
import { ThunkDispatch } from "redux-thunk";
import { model1 } from "./dia";
import { definePaper, fsObj } from "./flowsheet/model_def";
import { Stream } from "./state";

  // Define the action types as constants
  export const INITIALIZE = "INITIALIZE";
  export const INCREMENT = "INCREMENT";
  export const DECREMENT = "DECREMENT";
  export const UPDATE_STREAM = "UPDATE_STREAM";
  export const ADD_BLOCK = "REMOVE_TODO";
  
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
  
  export interface AddBlockAction {
    type: typeof ADD_BLOCK;
    payload: string; // The index of the todo to be removed
  }
  
  // Define the action union type
  export type Action =
  |InitializeAction
    | IncrementAction
    | DecrementAction
    | UpdateStreamAction
    | AddBlockAction;
  
  // Define the action creators
  export const initPaper = (canvas: any):InitializeAction => {
    return {
      type: INITIALIZE,
      element: canvas,
    };
  };

  export const addBlock=(type:string)=>{
    return (dispatch:Function, getState:any)=>{
      var rect1 = model1.clone();
      fsObj.graph.addCell(rect1);
      //console.log(rect1)
      var new1:Stream={
        order:fsObj.blockCount,
        flowrate:1,
        name:"unit q",
        pressure_in:1,
        pressure_out:1,
        length:1
      }
      
      dispatch(updateStream(fsObj.blockCount,new1));
      fsObj.blockCount++
    }
  }
  export const _initPaper = (canvas: any) => {
    if (fsObj.paper!=null) return (dispatch:Function)=>{}
    // Return a thunk function
    return async (dispatch:Function, getState:any) => {
      // Dispatch an action to indicate loading state
      //dispatch({ type: "FETCH_DATA_REQUEST" });
    //  try {
        // Make an API call and get the response
        console.debug("paper created.")
        fsObj.graph=new dia.Graph({}, { cellNamespace: shapes });
        fsObj.paper=new dia.Paper({ 
            //@ts-ignore
            //el: document.getElementById("paper-container"),
            width: 650,
            height: 200,
            gridSize: 1,
            //@ts-ignore
            model: fsObj.graph, 
            cellViewNamespace: shapes,
            linkPinning: false, // Prevent link being dropped in blank paper area
            defaultLink: () => new shapes.standard.Link({
                attrs: {
                    wrapper: {
                        cursor: 'default'
                    }
                }
            }),
            defaultConnectionPoint: { name: 'boundary' },
            validateConnection: function(cellViewS, magnetS, cellViewT, magnetT, end, linkView) {
                // Prevent loop linking
                return (magnetS !== magnetT);
            }
            });
        //if (!state.paper.el){
//@ts-ignore
            canvas.current.appendChild(fsObj.paper.el);
            definePaper(fsObj.paper,fsObj.graph)
            console.debug("init cancas", fsObj.paper)
            fsObj.paper.unfreeze();
        // Dispatch an action with the data
        dispatch({ type: "FETCH_DATA_SUCCESS", payload: null });
   //   } catch (error) {
        // Dispatch an action with the error
    //    console.error({ type: "INIT_DATA_FAILURE", payload: error });
    //  }
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
  
/*  export const addBlock = (type: string,): AddBlockAction => {
    return {
      type: ADD_BLOCK,
      payload: type,
    };
  };*/
  