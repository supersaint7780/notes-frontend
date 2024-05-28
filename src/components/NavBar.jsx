import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link as RouterLink } from "react-router-dom";
import { useBoundStore } from "../store/useBoundStore";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const { logout } = useBoundStore();

  const handleLogout = async () => {
    const isLoggedOut = await logout();
    if(isLoggedOut) {
      navigate('/');
    }
  }

  return (
    <AppBar component="nav">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: "block" }}
        >
          MyNotes
        </Typography>
        <Box sx={{ display: "block" }}>
          <Button sx={{ color: "#fff", px: "1rem" }}>
            <RouterLink
              to="/main"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              All
            </RouterLink>
          </Button>
          <Button sx={{ color: "#fff", px: "1rem" }}>
            <RouterLink
              to="/main/pinned"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Pinned
            </RouterLink>
          </Button>
          <Button sx={{ color: "#fff", px: "1rem" }}>
            <RouterLink
              to="/main/create"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Create
            </RouterLink>
          </Button>
          <Button sx={{ color: "#fff", px: "1rem" }} onClick={handleLogout  }>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
