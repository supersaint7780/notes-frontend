import { useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useBoundStore } from "../store/useBoundStore";
import { useNavigate } from "react-router-dom";

export default function CreateNote() {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const { createNote } = useBoundStore();
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const noteCreated = await createNote(formData);
    if(noteCreated) {
      setFormData({title: "", content: ""});
      navigate('/main')
    } else {
      setFormData({title: "", content: ""});
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Create Note
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="title"
                label="Note Title"
                name="title"
                value={formData.title}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                multiline
                fullWidth
                id="content"
                label="Note Content"
                name="content"
                value={formData.content}
                onChange={handleChange}
                minRows={6}
                maxRows={12}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create Note
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
