import React, { useContext, useEffect } from "react";
import { contextVar } from "./FunctionContext";

const ConsumerChild1 = () => {
  const val = useContext(contextVar);
  useEffect(() => {
    val.fun(5);
  }, []);
  return (
    <>
      <h1>Consumer Child 1</h1>
      <div>data is here {val.place}</div>
    </>
  );
};

export default ConsumerChild1;
