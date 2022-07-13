//fetch query data on button click via refetching
import { useQuery } from "react-query";
import axios from "axios";
import { useState } from "react";
import { useQueryData } from "./CustomQuery";
import { QueryReuse } from "./QueryReuse";

export const CustomQueryParent = () => {
  const [ffd, setFfd] = useState(1);
  const onSuccess = (data) => {
    alert("success query ", data);
  };
  const onError = (data) => {
    alert("errror  ", data);
  };

  const changeD = (dd) => {
    setFfd(dd);
    refetch();
  };
  const { isLoading, data, isError, error, refetch } = QueryReuse(ffd);

  // if (isLoading) {
  //   return <h2>loading</h2>;
  // }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  // console.log(data);
  if (!isLoading) {
    console.log(data);
  }
  return (
    <>
      <h1>
        <span style={{ color: "white" }}>
          call back component Query and data is
        </span>{" "}
      </h1>
      <button onClick={() => changeD(5)}>Click me </button>
    </>
  );
};
