import { useState } from "react";

const A = (props) => {
  const [data, setData] = useState(props.name);

  return (
    <h1>
      I am a component {data} and age {props.age}
    </h1>
  );
};

export default A;
