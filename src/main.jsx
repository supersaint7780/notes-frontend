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

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<div>Home</div>} />,
    <Route path="/login" element={<LoginPage />} />,
    <Route path="/signup" element={<SignUpPage />} />,
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
