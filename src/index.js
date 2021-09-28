import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import NewApp from "./NewApp";
import { store } from "./state/store";

ReactDOM.render(
  <Provider store={store}>
    {/* <App /> */}
    {/* <NewApp /> */}
  </Provider>,
  document.getElementById("root")
);
