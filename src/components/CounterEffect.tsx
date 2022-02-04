import { useCounter } from '../useCounter';

export const CounterEffect = () => {
  const {elementToAnimated, counter, handleClick} = useCounter({numMaximun: 15});
  return (
      <>
      <h1>Counter effect:</h1>
      <h2 ref={elementToAnimated}>{counter}</h2>
      <button onClick={()=>handleClick()}>+1</button>
      <br />
      </>
  );
};
