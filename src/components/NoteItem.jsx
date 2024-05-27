import {
  Card,
  Paper,
  CardActions,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import PushPinIcon from "@mui/icons-material/PushPin";

export default function NoteItem({ note }) {
  return (
    <Paper square={false} sx={{ borderRadius: "0.5rem", p:0.5 }} elevation={3}>
      <CardContent>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingBottom: "0.5rem",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {note.title}
          </Typography>
          {note.isPinned && (
            <IconButton>
              <PushPinIcon />
            </IconButton>
          )}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {note.content}
        </Typography>
      </CardContent>
      <CardActions
        style={{ justifyContent: "flex-end", paddingBottom: "0.75rem" }}
      >
        <Button size="small" variant="contained" startIcon={<EditIcon />}>
          Edit
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="error"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </CardActions>
    </Paper>
  );
}
