import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
//import Draw1, { addmodel } from './dia'
import Button from '@mui/material/Button';
import { eventBus } from './eventBus';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './state';
import { updateStream } from './actions';
import React from 'react';
//import { eventBus } from './main';

function Dips1() {
  const [calc1, setCalc1,] = useState(0);
  const {stream } = useSelector((state: State) => state);
  const {currentPtr, } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  //var val1:EventTarget;
  var inpRef= React.createRef<HTMLInputElement>();
  //var defVal=React.useRef(stream[0]?.name);
  //inpRef.current.value=stream[0]?.name;


  eventBus.on("changeData", (data:any) =>{
    setCalc1(data.message)
    if(inpRef.current) inpRef.current.value=stream[0]?.name;
  })
  const click1=()=>{
    console.log(inpRef.current?.value)
    var tmp = stream[0]
   // tmp.name=val1.value();
    dispatch(updateStream(0,stream[0]));
    console.log(stream)
  }

  return (
    <div >
      Name: <input ref={inpRef} ></input>
      <button onClick={click1}>Apply</button>
      {calc1}
    </div>
    
  )
}

export default Dips1