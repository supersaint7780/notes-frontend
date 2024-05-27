import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";

export default function MainPage() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <NavBar />
      <Container component="main" sx={{ p: 3 }}>
        <Toolbar />
        <Container component="div">
          <Outlet />
        </Container>
      </Container>
    </Box>
  );
}
