import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./CounterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Toolkit Counter</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment
      </button>

      <button
        onClick={() => dispatch(decrement())}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>
    </div>
  );
}

// export default App;

// import Counter from "./slice/Counter";

// function App() {
//   return (
//     <div>
//       <h1>Redux Toolkit Slice Example</h1>
//       <Counter />
//     </div>
//   );
// }

// export default App;
