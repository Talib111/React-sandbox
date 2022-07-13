import { useQuery } from "react-query";
import axios from "axios";

const fetchdataquery = (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`);
};

export const QueryReuse = (id) => {
  return useQuery(["f-query", id], () => fetchdataquery(id));
};
