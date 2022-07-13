import React, { useEffect } from "react";

export default function localStorage() {
  const obj = {
    name: "mark",
    age: 40,
    place: "Ranchi"
  };
  useEffect(() => {
    // window.localStorage.setItem('Name', 'Rahul');
    // window.localStorage.getItem('Name');
    // window.localStorage.removeItem('Name');
    // window.localStorage.clear();
    window.localStorage.setItem("jsonObj", JSON.stringify(obj));
    console.log(JSON.parse(window.localStorage.getItem("jsonObj")));
  }, []);

  return <h1>localStorage</h1>;
}
