import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import MainPage from "./pages/MainPage";
import CreateNote from "./pages/CreateNote";
import AllNotes from "./pages/AllNotes";
import PinnedNotes from "./pages/PinnedNote";
import { Route, Routes, Navigate } from "react-router-dom";

export default function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={<LoginPage />}
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/main" element={<MainPage />}>
        <Route path="" element={<AllNotes />} />
        <Route path="pinned" element={<PinnedNotes />} />
        <Route path="create" element={<CreateNote />} />
      </Route>
    </Routes>
  );
}
