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
    stream:Stream[];
    currentPtr:number;
  }
export interface Stream{
  flowrate:number,
  name:string,
  pressure_in:number,
  pressure_out:number,
  length:number
}
  // Define the initial state
  export const initialState: State = {
    // Initialize your state properties here
    counter: 0,
    todos: [],
    paper:null,
    graph:new dia.Graph({}, { cellNamespace: shapes }),
    setting:{init:0},
    stream:[],
    currentPtr:0
  };
  