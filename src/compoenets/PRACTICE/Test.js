import { useState } from "react";
const Test = (props) => {
  const [title, setTitle] = useState("");
  const good = (a) => {
    console.log(a);
  };
  return (
    <>
      <button onClick={() => good(5)}>{title}</button>
      <input type="text" onChange={(event) => setTitle(event.target.value)} />
    </>
  );
};

export default Test;
