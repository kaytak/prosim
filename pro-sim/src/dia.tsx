import { Button } from "@mui/material";
import { shape } from "@mui/system";
import { dia, shapes, util, mvc, linkTools, } from "jointjs"
import React, { useEffect, useRef } from "react";
import { useState, } from 'react'
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
//import { eventBus } from "./main";
import { atom, useRecoilState } from "recoil";
import { useSelector, useDispatch } from "react-redux";
import { State } from "./state";
import {  initPaper } from "./actions";
import 'jointjs/css/layout.css'
//import './flowsheet/diagram.css'
// Define the counter atom
// export const counterState = atom({
//   key: "counterState",
//   default: 0,
// });
// export const graphState = atom<any>({
//     key: "graphState",
//     default: null,
//   });
// export const paperState = atom<any>({
//     key: "paperState",
//     default: null,
//         effects: [
//             ({onSet}) => {
//               onSet(newID => {
//                 console.debug("Current user ID:", newID);
//               });
//             },
//           ],
// });
// export const canvasState = atom<any>({
//     key: "canvasState",
//     default: null,
// });
export const rect = new shapes.standard.Rectangle({
    position: { x: 100, y: 100 },
    size: { width: 100, height: 50 },
    attrs: {
        label: {
            text: 'Hello World'
        }
    }
});

// function useDraw() {
//     const [graph, setGraph] = useRecoilState(graphState);
//     //const [paper , setPaper] = useRecoilState(paperState);
  
//     // Start the timer
//     const start = (canvas:any) => {
        
//         console.log(canvas)
//         //canvas.current.appendChild(paper.el);
//     };
//     // Clear the timeout when unmounting
//     useEffect(() => {
//       return () => stop();
//     }, []);
  
//     return  start;
//   }
  
function Draw1(this: any, props:any){
//class Draw1 extends React.Component{
    // const [counter, setCounter] = useRecoilState(counterState);
    // const [graph, setGraph] = useRecoilState(graphState);
    // const [paper , setPaper] = useRecoilState(paperState);
    // const [canvas, setCanvas] = useRecoilState(canvasState);
    const {  todos } = useSelector((state: State) => state);

    // Get the dispatch function from the Redux store
    const dispatch = useDispatch();

    //const start=useDraw();

    const _canvas: any = useRef(null);
    //setCanvas(_canvas);
    useEffect(() => {
        //var namespace = shapes;
//console.log(_canvas)
//start(_canvas)
dispatch(initPaper(_canvas));
//console.log(paper)

    //     if(_canvas.current) {
    // //@ts-ignore
    //     // _canvas.current.appendChild(paper.el);
    //   //  setCanvas(_canvas)
    //     //    console.log("initialized canvas")
    //     //    _canvas.current.appendChild(paper.el);
    //     //setCounter(counter+10)
    //     //var rect1 = rect.clone();
    //     //_graph.addCell(rect1);
    //     eventBus.on("couponApply", (data:any) =>
    //      {
    //        // var rect1 = rect.clone();
    //        //  _graph.addCell(rect1);
    //         }
    //   );
    //     //graph.addCell(rect);
    //    // paper.unfreeze();
    //    // setPaper(_paper)
    //    // setGraph(_graph)

    //     return () => {
    //        // scroller.remove();
    //        //@ts-ignore
    //        // paper.remove();
    //     };
    //   }
    }, []);
//const [count, setCount] = useState(0)
/*constructor(props:any) {
    super(props);
    do_draw();
    this.state = {
      value: null,
    };
  }}*/
 //   const node = ReactDOM.findDOMNode(this);
 //   console.log(node)
 //render(): React.ReactNode {
         return(
            <div>
            <p>start</p>
            <div className="canvas" ref={_canvas}/>
           
            </div>
    );
  //}
 }




var portsIn = {
    position: {
        name: 'left'
    },
    attrs: {
        portBody: {
            magnet: true,
            r: 10,
            fill: '#023047',
            stroke: '#023047'
        }
    },
    label: {
        position: {
            name: 'left',
            args: { y: 6 } 
        },
        markup: [{
            tagName: 'text',
            selector: 'label',
            className: 'label-text'
        }]
    },
    markup: [{
        tagName: 'circle',
        selector: 'portBody'
    }]
};

var portsOut = {
    position: {
        name: 'right'
    },
    attrs: {
        portBody: {
            magnet: true,
            r: 10,
            fill: '#E6A502',
            stroke:'#023047'
        }
    },
    label: {
        position: {
            name: 'right',
            args: { y: 6 }
        },
        markup: [{
            tagName: 'text',
            selector: 'label',
            className: 'label-text'
        }]
    },
    markup: [{
        tagName: 'circle',
        selector: 'portBody'
    }]
};


export var model1 = new shapes.standard.Rectangle({
    position: { x: 125, y: 50 },
    size: { width: 90, height: 90 },
    attrs: {
        root: {
            magnet: false
        },
        body: {
            fill: '#8ECAE6',
        },
        label: { 
            text: 'Model',
            fontSize: 16,
            y: -10
        }
    },
    ports: {
        groups: {
            'in': portsIn,
            'out': portsOut
        }
    }
});
model1.addPorts([
    { 
        group: 'in',
        id: 'in1',
        attrs: { label: { text: 'in1' }}
    },
    { 
        group: 'in',
        id: 'in2',
        attrs: { label: { text: 'in2' }}
    },
    { 
        group: 'out',
        id: 'out',
        attrs: { label: { text: 'out' }}
    }
]);

export default Draw1