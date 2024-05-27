import { Outlet } from "react-router-dom";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import NavBar from "../components/NavBar";
import Container from "@mui/material/Container";

export default function MainPage() {
  return (
    <Box sx={{backgroundColor: '#EEEEEE', minHeight: "100vh"}}>
      <CssBaseline />
      <NavBar />
      <Container sx={{py:3}} component="main" disableGutters>
        <Toolbar />
        <Container component="div">
          <Outlet />
        </Container>
      </Container>
    </Box>
  );
}
