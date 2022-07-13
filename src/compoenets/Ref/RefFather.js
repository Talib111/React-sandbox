import { useRef } from "react";
import RefChild from "./RefChild";
const RefFather = () => {
  const eRef = useRef();

  const refCall = () => {
    eRef.current.fun1();
  };
  return (
    <>
      <RefChild ref={eRef} />
      <br />
      <button onClick={refCall}>click Father</button>
    </>
  );
};

export default RefFather;
