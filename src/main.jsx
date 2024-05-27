import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Typography from "@mui/material/Typography";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link as RouterLink,
} from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import CreateNote from "./pages/CreateNote";
import AllNotes from "./pages/AllNotes";
import PinnedNotes from "./pages/PinnedNote";


const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<LoginPage />} />,
    <Route path="/login" element={<LoginPage />} />,
    <Route path="/signup" element={<SignUpPage />} />,
    <Route path="/main" element={<MainPage />}>
      <Route path="" element={<AllNotes />} />
      <Route path="pinned" element={<PinnedNotes />} />
      <Route path="create" element={<CreateNote />} />
    </Route>,
  ])
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
