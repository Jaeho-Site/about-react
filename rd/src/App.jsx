import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import counter, { minusOne, plusOne } from "./redux/modules/counter";

const App=()=>{
  const dispatch=useDispatch();
  const [number,setNumber]=useState(0);

  const onChangeHandler = (e) => {
    const { value } = e.target;
    setNumber(+value);
  };
  console.log(number);

  const num=useSelector((state)=>state.counter.number);
  return (
    <div>
      <input type="number" onChange={onChangeHandler} /> 
      {num} 
      <button onClick={
        ()=>{
          dispatch(plusOne(number));
        }}>+1</button>
      <button onClick={
        ()=>{
          dispatch(minusOne(number));
        }}>-1</button>
    </div>
  )
}

export default App;