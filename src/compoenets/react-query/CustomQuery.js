import { useQuery } from "react-query";
import axios from "axios";

const fetchdataquery = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};

export const useQueryData = (onSuccess, onError) => {
  return useQuery("first-fetch", fetchdataquery, {
    onSuccess,
    onError,
    select: (data) => {
      const tranformedata = data.data.map((hr) => hr.title);
      return tranformedata;
    }
  });
};
