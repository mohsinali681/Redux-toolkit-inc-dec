import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./reducer/slice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <h1> click to count :{count}</h1>

      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        decrement
      </button>
    </div>
  );
}

export default App;
