
  // A file to define the reducer function
  // reducer.ts
  import { State, initialState } from "./state";
  import { Action, INCREMENT, DECREMENT, UPDATE_STREAM,  INITIALIZE, ADD_BLOCK } from "./actions";
  import { dia, shapes, util, mvc, linkTools, } from "jointjs"
import { definePaper } from "./flowsheet/model_def";

  // Define the reducer function
  export const reducer = (state: State = initialState, action: Action): State => {
    if(action.type==INITIALIZE&&state.setting.init==0){
        console.debug("paper created.")
        var _paper=new dia.Paper({ 
            //@ts-ignore
            //el: document.getElementById("paper-container"),
            width: 650,
            height: 200,
            gridSize: 1,
            //@ts-ignore
            model: state.graph, 
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
        //    action.element.current.appendChild(_paper.el);
        //    definePaper(_paper,state.graph)
        //    console.debug("init cancas", _paper)
        //    _paper.unfreeze();
            //state.setting.init++
        //} 
        return {...state,
        paper:_paper,
      setting:{init:state.setting.init+1}}
    }
    //console.log(action,state)
    switch (action.type) {
      // Handle the increment action
      case INITIALIZE:
        return {...state}
      case INCREMENT:
        return {
          ...state,
          numBlock: state.numBlock + 1,
        };
      // Handle the decrement action
      case DECREMENT:
        return {
          ...state,
          counter: state.counter - 1,
        };
      // Handle the add todo action
      case UPDATE_STREAM:
        var a=[
          //...state.stream, action.data
          ...state.stream.slice(0,state.currentPtr),
          action.data,
          ...state.stream.slice(state.currentPtr+1)
        ]
        return {
          ...state,
          stream: [
            //...state.stream, action.data
            ...state.stream.slice(0,action.pointer),//state.currentPtr),
            action.data,
            ...state.stream.slice(action.pointer+1)//(state.currentPtr+1)
          ],
        };
      // Handle the remove todo action
      case ADD_BLOCK:
        
        return {
          ...state,
          //todos: state.todos.filter((_, i) => i !== action.payload),
        };
      // Return the default state for unknown actions
      default:
        return state;
    }
  };