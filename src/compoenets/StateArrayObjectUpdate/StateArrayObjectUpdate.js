import React, { useState } from "react";

function StateArrayObjectUpdate() {
  const [currentValue, setCurrentValue] = useState("");
  const [array, setArray] = useState(["mark", "shark", "tark", "wark"]);
  const [singleObj, setsingleObj] = useState({
    id: 200,
    name: "Harvis",
    age: 200,
    place: "Norway"
  });
  const [obj, setObj] = useState([
    {
      id: 20,
      name: "mark",
      age: 20,
      place: "Ranchi"
    },
    {
      id: 21,
      name: "sharkobject",
      age: 20,
      place: "Ranchi"
    }
  ]);

  const updateSingleObj = () => {
    setsingleObj({ ...singleObj, [currentValue]: "updated value" });
    console.log(singleObj);
  };
  const updateObj = (e) => {
    // let newObj = [...obj]
    // newObj[1].name = "new name now"
    // setObj(newObj)
    //update any id in an array of objects
    obj.map((data) => {
      if (data.id == e) {
        console.log("id matched name is -", data.name);
      }
    });
  };

  const updateArray = (e) => {
    // setArray([...array,e]) // 1 adding new elements to array
    // setArray([...array.splice(e,1)]) // 2 deleting elements from array from e index and rearranging index
    let newArray = [...array]; // 3 taking array in a var
    newArray[e] = "home ground"; // 3 updating sepcific index from state array
    setArray(newArray); //setting new var into state var
    console.log(array);
  };
  return (
    <>
      <h1>array value of {array}</h1>
      <h1>object value of {obj[1].name}</h1>
      <h1>single obj {singleObj.name}</h1>
      <div>
        <input
          className="border-2 border-black"
          type="text"
          onChange={(e) => updateArray(e.target.value)}
        />{" "}
        array
      </div>
      <div>
        <input
          className="border-2 border-black"
          type="text"
          onChange={(e) => updateObj(e.target.value)}
        />{" "}
        obj
      </div>
      <div>
        <input
          className="border-2 border-black"
          type="text"
          onChange={(e) => setCurrentValue(e.target.value)}
        />{" "}
        single obj
      </div>
      <button onClick={updateSingleObj}>update single</button>
    </>
  );
}

export default StateArrayObjectUpdate;
