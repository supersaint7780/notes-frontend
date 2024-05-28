import { Paper, CardContent, Typography, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import PushPinIcon from "@mui/icons-material/PushPin";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import { styled } from "@mui/system";
import { useState } from "react";

const NoteCard = styled(Paper)(({ theme }) => ({
  position: "relative",
  "&:hover": {
    outline: "1px solid black",
  },
  "&:hover .actions": {
    opacity: 1,
  },
  width: 300,
  borderRadius: "0.5rem",
  padding: theme.spacing(0.5),
  transition: "outline ease-in 0.3s",
}));

const Actions = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  opacity: 0,
  transition: "opacity 0.3s",
  padding: theme.spacing(0.75),
  gap: "0.5rem",
}));

const PinButton = styled(IconButton)(({ theme, isPinned }) => ({
  position: "absolute",
  top: theme.spacing(0.5),
  right: theme.spacing(0.5),
  opacity: isPinned ? 1 : 0,
  transition: "opacity 0.3s",
  "&:hover": {
    opacity: 1,
  },
}));

export default function NoteItem({ note }) {
  const [isPinned, setIsPinned] = useState(false);

  const handlePin = () => {
    setIsPinned(!isPinned);
  };

  return (
    <NoteCard square={false} elevation={3}>
      <PinButton isPinned={isPinned} onClick={handlePin}>
        {isPinned ? (
          <PushPinIcon fontSize="small" />
        ) : (
          <PushPinOutlinedIcon fontSize="small" />
        )}
      </PinButton>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {note.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {note.content}
        </Typography>
      </CardContent>
      <Actions className="actions">
        <IconButton color="primary" size="small">
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton color="error" size="small">
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Actions>
    </NoteCard>
  );
}
