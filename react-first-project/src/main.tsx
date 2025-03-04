import React from "react";
import "./index.css";

import { createRoot } from "react-dom/client";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import App from "./App";
import { AuthContextProvider } from "./context/AuthContext";


const container =  (document.getElementById("root")!);

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>
);
