import { QueryClientProvider, QueryClient } from "react-query";
import { Query } from "./Query";
import { Query2 } from "./Query2";
import { ReactQueryDevtools } from "react-query/devtools";
import { Callbacks } from "./Callbacks";

export const QueryProvider = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      {/* <Query /> */}
      {/* <Query2 /> */}
      <Callbacks />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
