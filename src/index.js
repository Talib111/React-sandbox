import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Store from "./compoenets/Redux-toolkit/Store";
import { Provider } from "react-redux";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <StrictMode>

  <Provider store={Store}>
    <App />
  </Provider>,
  // </StrictMode>
  rootElement
);
