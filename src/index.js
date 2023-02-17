import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
<<<<<<< HEAD
import OldSPA from "./components/OldSPA";
import reportWebVitals from "./reportWebVitals";
=======
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
import "tw-elements";
>>>>>>> 9cb3bf050cb77694d9b65c72bfada902aca2f665

ReactDOM.render(
  <React.StrictMode>
    <OldSPA />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
