import { useReducer } from "react";
import counterReducer from "../reducers/counterReducer";


const Counter = () => {

// Declare state variable 'count' with initial value 0
// const [count, setCount] = useState<number>(0);
// now we're going to use the useReducer hook (which is like a useState)
// notice how this is like a useState  NOTE  you must have the state (or change the name as u need)  BUT YOU MUST KEEP THE WORD dispatch  and useReducer must have two arguments  the function you have for the hook and the initial state / value
const [count, dispatch] = useReducer(counterReducer,0);

// Function to handle increment
const increment = () => {
  // setCount(count + 1);
  dispatch({type: 'INCREMENT'});
};

// Function to handle decrement
const decrement = () => {
  // setCount(count - 1);
  dispatch({type: 'DECREMENT'});
};

// Function to reset the count to 0
const reset = () => {
  // setCount(0);
  dispatch({type: 'RESET'});
};


  return (
    <div>

    <h1 className="text-center">My Counter Component</h1>

 <div>
      <h1>Counter: {count}</h1>
      <button className="btn btn-primary mx-3" onClick={increment}>Increment</button>
      <button className="btn btn-primary mx-3" onClick={decrement}>Decrement</button>
      <button className="btn btn-primary" onClick={reset}>Reset</button>
    </div>
    
    </div>
  )
}

export default Counter