import { Paper, TextField, Button, Typography, Stack } from "@mui/material";

export default function MaterialForm() {
  return (
    <Paper elevation={4} sx={{ p: 3 }}>
      <Typography variant="h6" align="center">
        Material UI Form
      </Typography>

      <Stack spacing={2} mt={2}>
        <TextField label="Name" />
        <Button variant="contained">SUBMIT</Button>
      </Stack>
    </Paper>
  );
}
