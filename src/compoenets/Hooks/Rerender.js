import { useState, useEffect, useRef } from "react";

export default function Rerender() {
  const [first, setFirst] = useState({});

  console.log("render");
  return (
    <>
      <h1>hello {first.name}</h1>

      <button onClick={() => setFirst({ name: "mark" })}>Change first</button>
    </>
  );
}
