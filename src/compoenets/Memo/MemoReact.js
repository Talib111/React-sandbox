import React from "react";
const MemoReact = (props) => {
  console.log("memo comonent called");
  return (
    <>
      <h1>I am React.memo component</h1>
      <h6>hello {props.children}</h6>
    </>
  );
};

// export default React.memo(MemoReact);
export default MemoReact;
