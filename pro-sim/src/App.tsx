import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//import Draw1, { addmodel } from './dia'
import Button from '@mui/material/Button';
//import { eventBus } from './main';
//import { flow_calc } from './flowsheet/flowsheet';
//import { counterState, graphState, paperState, rect } from './dia';
import { RecoilRoot, useRecoilState } from 'recoil';
import { useSelector, useDispatch } from "react-redux";
import { State, Stream } from "./state";
import { increment, decrement,  removeTodo, updateStream } from "./actions";
import { model1, rect } from './dia';
import { eventBus } from './eventBus';

function App() {
  //const [count, setCount,] = useState(0)
  //const [counter, setCounter] = useRecoilState(counterState);
  //const [graph, setGraph] = useRecoilState(graphState);
  //const [paper , setPaper] = useRecoilState(paperState);
  // Get the state from the Redux store
  const {graph,  todos } = useSelector((state: State) => state);
  const [data, setData] = useState("Initial value");

  // Get the dispatch function from the Redux store
  const dispatch = useDispatch();

  const add1=()=>{
    //addmodel();
   // eventBus.dispatch("couponApply", { message: "coupone applied" });
    //eventBus.dispatch("startCalc", { message: "coupone applied" });
    //var _graph=paper.model;
      var rect1 = model1.clone();
      graph.addCell(rect1);
      var new1:Stream={
        flowrate:1,
        name:"unit q",
        pressure_in:1,
        pressure_out:1,
        length:1
      }
      dispatch(updateStream(0,new1));
    //console.log(graph)
  }

  return (

    <div className="App1">
      {data}
      <Button variant="contained" onClick={add1} >Add</Button>
      <Button variant="contained" onClick={add1} >Add</Button>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>

  )
}

export default App
