import { useMemo, useState } from "react";
import MemoReact from "./MemoReact";

const MemoComp = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleCount1 = () => {
    setCount1(count1 + 1);
  };
  const handleCount2 = () => {
    setCount2(count2 + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 10000) {
      i++;
    }
    console.log("function inside memo called");
    return count1 % 2 === 0;
  }, [count1]);

  // console.log("papa component");
  return (
    <>
      <button onClick={handleCount1}>counter 1 {count1}</button>
      <span>{isEven ? "Even" : "Odd"}</span>
      <br />
      <br />
      <button onClick={handleCount2}>Counter 2 {count2}</button>
      {/* <MemoReact>
        <h1>I am children of memo React</h1>
      </MemoReact> */}
    </>
  );
};

export default MemoComp;
