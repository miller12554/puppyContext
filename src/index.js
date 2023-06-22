import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { PupProvider } from "./context/PupContext";
import "./index.css";

const Root = () => {
  return (
    <PupProvider>
      <App />
    </PupProvider>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById("root")
);
