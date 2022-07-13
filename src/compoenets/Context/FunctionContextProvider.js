import React from "react";
import { contextVar } from "./FunctionContext";
import Parent from "./Parent";

function FunctionContextProvider() {
  const value = {
    name: "mark",
    age: 20,
    place: "Ranchi",
    fun: (a) => {
      console.log("i am function inside context with ", a);
    }
  };
  return (
    <contextVar.Provider value={value}>
      <Parent />
    </contextVar.Provider>
  );
}
export default FunctionContextProvider;
