import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import router from "./router";
import { RouterProvider } from "react-router-dom";
import 'bootstrap/scss/bootstrap.scss';
import "bootswatch/dist/flatly/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/scss/main.scss';


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
