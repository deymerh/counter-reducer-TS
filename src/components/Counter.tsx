import { useState } from "react";

interface Props {
  initialValue: number
}

interface CounterState {
  counter: number;
  cliks: number;
}

export const Counter = ({initialValue}:Props) => {

  const [{counter, cliks}, setState] = useState<CounterState>({
    counter: initialValue,
    cliks: 0
  });
  
  const handleClick = (value:number)=>{
    setState(({counter, cliks}) => ({
      counter: counter + value,
      cliks: cliks + 1
    }))
  }
  return (
      <>
      <h1>Counter: {counter}</h1>
      <h1>cliks: {cliks}</h1>
      <button onClick={()=>handleClick(5)}>+5</button>
      <br />
      <button onClick={()=>handleClick(1)}>+1</button>
      </>
  );
};
