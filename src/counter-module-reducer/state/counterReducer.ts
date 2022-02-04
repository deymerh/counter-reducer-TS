import { CounterAction } from "../actions/CounterAction";
import { CounterState } from "../interfaces/CounterState.interface";

export const counterReducer = (state: CounterState, action: CounterAction):CounterState=>{
    switch (action.type) {
      case 'increaseBy':
        return {
          counter: state.counter + action.payload.value,
          changes: state.changes + 1,
          previous: state.counter
        }
      case 'reset':
        return {
          counter: 0,
          previous: 0,
          changes: 0
        }
    
      default:
        return state;
    }
  }