import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Amplify } from "aws-amplify";

// @ts-ignore: Ignore TypeScript errors on this import
import awsExports from "./aws-exports"; 

// Configure Amplify with aws-exports
Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
