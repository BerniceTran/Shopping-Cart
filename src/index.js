import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import itemData from "./ItemsData";

ReactDOM.render(
  <React.StrictMode>
    <App itemData={itemData} />
  </React.StrictMode>,
  document.getElementById("root")
);
