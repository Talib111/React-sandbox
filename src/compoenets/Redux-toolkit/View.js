import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "./CounterSlice";

export default function View() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <h1>the count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Dncrement</button>
    </>
  );
}
