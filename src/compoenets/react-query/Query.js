import { useQuery } from "react-query";
import axios from "axios";

export const Query = () => {
  const { isLoading, data, isError, error } = useQuery("first-query", () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos/4");
  });

  if (isLoading) {
    return <h2>loading</h2>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }
  console.log(data);
  return <h1>Query and data is {data.data.title} </h1>;
};
