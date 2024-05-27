import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link as RouterLink,
  Router,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Router path='/' elment = {<div>Home</div>} />,
    <Router path='/login' elment = {<div>Login</div>} />, 
    <Router path='/signup' elment = {<div>Signup</div>} />
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
