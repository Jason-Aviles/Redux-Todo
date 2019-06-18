import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./compoenents/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducer";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root")
);
