import { useReducer } from 'react';
import { CounterState } from './interfaces/CounterState.interface';
import { counterReducer } from './state/counterReducer';
import { doRest, doIncreaseBy } from './actions/CounterAction';

const INITIAL_STATE:CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

export const CounterReducerComponent = () => {
  const [counterState, dispatch] = useReducer(counterReducer, INITIAL_STATE);

  const reset = ()=>{
    dispatch(doRest())
  }

  const increaseBy = (valueIncrement:number)=>{
    dispatch(doIncreaseBy(valueIncrement))
  }
  return (
      <>
      <h1>CounterReducerComponent:</h1>
      <h2>{counterState.counter}</h2>
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={()=>increaseBy(5)}>+5</button>
      <br />
      <button onClick={()=>increaseBy(10)}>+10</button>
      <br />
      <button onClick={()=>increaseBy(20)}>+20</button>
      <br />
      <br />
      <br />
      <pre>
        {
          JSON.stringify(counterState, null, 3)
        }
      </pre>
      </>
  );
};
