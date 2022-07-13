//fetch query data on button click via refetching
import { useQuery } from "react-query";
import axios from "axios";

export const Callbacks = () => {
  const fetchdataquery = () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos/3");
  };
  const onSuccess = (data) => {
    alert("success query ", data);
  };
  const onError = (data) => {
    alert("errror  ", data);
  };
  const { isLoading, data, isError, error, refetch } = useQuery(
    "first-query",
    fetchdataquery,
    {
      enabled: true,
      cacheTime: 5000,
      onSuccess: onSuccess,
      onError: onError
    }
  );

  if (isLoading) {
    return <h2>loading</h2>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  console.log(data);
  return (
    <>
      <h1>
        <span style={{ color: "white" }}>
          call back component Query and data is
        </span>{" "}
        - {data?.data.title}{" "}
      </h1>
      <button onClick={refetch}>Click me </button>
    </>
  );
};
