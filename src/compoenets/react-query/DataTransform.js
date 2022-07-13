//fetch query data on button click via refetching
import { useQuery } from "react-query";
import axios from "axios";

export const DataTransform = () => {
  const fetchdataquery = () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos");
  };

  const onSuccess = (data) => {
    console.log("s data ", data.data);
  };

  const { isLoading, data, isError, error, refetch } = useQuery(
    "first-query",
    fetchdataquery,
    {
      enabled: true,
      cacheTime: 5000,
      select: (data) => {
        const brief = data.data.map((hero) => {
          let dd = { tt: hero.title };
          return dd;
        });
        return brief;
      },
      onSuccess: onSuccess
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
        <span style={{ color: "red" }}>
          call back component Query and data is
        </span>{" "}
        - {data?.data?.title}{" "}
      </h1>
      <button onClick={refetch}>Click me </button>
    </>
  );
};
