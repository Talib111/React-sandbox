import { useState, useEffect, useRef } from "react";

export default function UseStateCallback() {
  const [first, setFirst] = useState(6);
  const [second, setSecond] = useState(12);
  const [firetRender, setfiretRender] = useState(true);
  useEffect(() => {
    if (firetRender) {
      console.log("useeffect only first redner");
      setfiretRender(false);

      return;
    }
    chagneSEcond();
  }, [first]); //setFirst callback is used as useEffect

  const changeFirst = () => {
    setFirst((prev) => {
      return prev + 1;
    });
  };

  const chagneSEcond = () => {
    setSecond(first + 1);
  };

  return (
    <>
      <h1>useState callback</h1>
      <h1>First - {first}</h1>
      <h1>Second - {second}</h1>
      <button onClick={changeFirst}>Change first</button>
    </>
  );
}
