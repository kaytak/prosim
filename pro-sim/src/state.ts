import { dia, shapes, util, mvc, linkTools, } from "jointjs"

// A file to define the initial state of the app
// state.ts
export interface State {
    // Add your state properties here
    counter: number;
    todos: string[];
    paper:dia.Paper|null;
    graph:dia.Graph<any>;
    setting:any;
    blocks:FlBlock[];
    currentPtr:number;
    numBlock:number;
  }
export interface Stream{
  order:number,
  flowrate:number,
  name:string,
  pressure_in:number,
  pressure_out:number,
  length:number
}
export interface FlBlock{
  cid:string,
  param:any,
  name:string,
  val:any,
  length:number
}
export interface Junction{
  id:string,
  name:string,
  pressure_in:number,
  pressure_out:number,
  spec:any
}
  // Define the initial state
  export const initialState: State = {
    // Initialize your state properties here
    counter: 0,
    todos: [],
    paper:null,
    graph:new dia.Graph({}, { cellNamespace: shapes }),
    setting:{init:0},
    blocks:[],
    currentPtr:0,
    numBlock:0
  };
  