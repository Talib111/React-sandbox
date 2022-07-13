import { useImperativeHandle, forwardRef } from "react";
const RefChild = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    fun1: function good() {
      console.log("child fun one executed");
    }
  }));
  return <h1>I am ref child</h1>;
});

export default RefChild;
