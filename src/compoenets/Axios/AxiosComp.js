import React, { useEffect } from "react";
import axios from "axios";

export function AxiosComp() {
  useEffect(() => {
    // console.log("working");
    axios
      .post("http://localhost:3001/posts/", {
        title: "dummy",
        author: "mummy"
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return <h1>Testing axios</h1>;
}
