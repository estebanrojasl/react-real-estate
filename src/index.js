import React from "react";
import ReactDOM from "react-dom";
import "./style/style.css";
import App from "./App";

import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import estates from "./components/redux/reducers";

const store = createStore(estates, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
