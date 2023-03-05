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
  const [currentBLockCid, setCurrentBLockCid,] = useState("none");
  const [currentBLock, setCurrentBLock,]:any[] = useState({});
  const {blocks } = useSelector((state: State) => state);
  const {currentPtr, } = useSelector((state: State) => state);
  const dispatch = useDispatch();
  //var val1:EventTarget;
  var inpRef= React.createRef<HTMLInputElement>();
  //var defVal=React.useRef(stream[0]?.name);
  //inpRef.current.value=stream[0]?.name;

  eventBus.on("changeData", (data:{cid:string, message:string}) =>{
    //setCalc1(data)
    //console.log(data)
    setCurrentBLock(blocks.find(e=>e.cid==data.cid))
    var buf=blocks.find(e=>e.cid==data.cid)?.name;
    if(inpRef.current) {
      if(buf!=undefined){
        inpRef.current.value=buf;
        setCurrentBLockCid(data.cid)
      } 
    }
  })
  const click1=()=>{
 //   console.log(inpRef.current?.value,blocks)
    var tmp = JSON.parse(JSON.stringify(blocks.find(e=>e.cid==currentBLockCid)))
    if(inpRef.current?.value) tmp.name=inpRef.current?.value
   // tmp.name=val1.value();
    dispatch(updateStream(currentBLockCid,tmp));
    //console.log(blocks)
  }

  return (
    <div>
      Name: <input ref={inpRef} ></input>
      <button onClick={click1}>Apply</button>
      <br/>
      Block: {currentBLockCid}
      <br/>
      {JSON.stringify(currentBLock)}
    </div>
  
  )
}

export default Dips1

