// import ErrorHandler from "./compoenets/ErrorBoundaries/ErrorHandler";
// import Portal1 from "./compoenets/Portals/Portal1";
import Store from "./compoenets/Redux/Store1";
import { Provider } from "react-redux";
import "./styles.css";
import OrginalComp from "./compoenets/HOC/OrginalComp";
import A from "./compoenets/Props/A";
import RefFather from "./compoenets/Ref/RefFather";
import MemoComp from "./compoenets/Memo/MemoComp";
import Wrapper from "./compoenets/Containment/Wrapper";
import Child from "./compoenets/Containment/Chld";
import Practice from "./compoenets/PRACTICE/Test";
import MemoReact from "./compoenets/Memo/MemoReact";
import { useState } from "react";
import FunctionContextProvider from "./compoenets/Context/FunctionContextProvider";
import { AxiosComp } from "./compoenets/Axios/AxiosComp";
import LocalStorage from "./compoenets/LocalStorage/LocalStorage";
import BasicTable from "./compoenets/react-table/BasicTable";
import Hoc from "./compoenets/HOC/Hoc";
import View from "./compoenets/Redux-toolkit/View";
import UseStateCallback from "./compoenets/Hooks/UseStateCallback";
import Rerender from "./compoenets/Hooks/Rerender";
import Captcha from "./compoenets/Captcha/Captcha";
import { Query } from "./compoenets/react-query/Query";
import { QueryClientProvider, QueryClient } from "react-query";
import { QueryProvider } from "./compoenets/react-query/QueryProvider";
import Home from "./compoenets/Basics/Home";
import { LazyImport } from "./compoenets/Basics/LazyImport";
import Multiselect from "./compoenets/Multiselect/Multiselect";
import { Query2 } from "./compoenets/react-query/Query2";
import { ReactQueryDevtools } from "react-query/devtools";
import { Callbacks } from "./compoenets/react-query/Callbacks";
import { DataTransform } from "./compoenets/react-query/DataTransform";
import { CustomQueryParent } from "./compoenets/react-query/CustomQueryParent";
import React, { Suspense } from "react";

export default function App() {
  const [st, setst] = useState(10);
  const queryClient = new QueryClient();
  const Dump = React.lazy(() => import("./compoenets/PRACTICE/Dump"));
  return (
    // <div className="App">
    //   <ErrorHandler>
    //     <View heroName="khoker" />
    //   </ErrorHandler>
    // </div>

    // <h1>hello mr app component</h1>
    <>
      <QueryClientProvider client={queryClient}>
        {/* <Query /> */}
        {/* <Query2 /> */}
        {/* <Callbacks /> */}
        {/* <DataTransform /> */}
        <CustomQueryParent />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
      {/* <button onClick={() => setst(20)}>click 20 </button>
      <button onClick={() => setst(30)}>click 30 </button>
      <button onClick={() => setst(40)}>click 40 </button>
      <MemoReact children={st} /> */}
      {/* <FunctionContextProvider /> */}
      {/* <AxiosComp /> */}
      {/* <LocalStorage /> */}
      {/* <BasicTable /> */}
      {/* <Hoc /> */}
      {/* <MemoComp /> */}
      {/* <View /> */}
      {/* <UseStateCallback /> */}
      {/* <Rerender /> */}
      {/* <Captcha /> */}
      {/* <QueryProvider /> */}
      {/* <Home /> */}
      {/* <LazyImport /> */}
      {/* <Multiselect/> */}
      {/* <Query2 /> */}
      <Suspense fallback={<h1>error</h1>}>
        <Dump />
      </Suspense>
    </>
  );
}
