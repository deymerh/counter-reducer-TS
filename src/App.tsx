import { Counter } from "./components/Counter";
import { CounterEffect } from './components/CounterEffect';
import { CounterReducerComponent } from './counter-module-reducer/CounterReducerComponent';

function App() {
  return (
     <div style={{padding: 20}}>
     <h1>React</h1>
     <hr />
     <Counter initialValue={20} />
     <hr />
     <CounterEffect />
     <hr />
     <CounterReducerComponent />
     </div>
  );
}

export default App;
