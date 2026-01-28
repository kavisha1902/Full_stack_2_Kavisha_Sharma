import AppNavbar from "./navbar/AppNavbar";
import BootstrapForm from "./bootstrapui/BootstrapForm";
import MaterialForm from "./materialui/MaterialForm";
import CardUI from "./cardui/CardUI";

import { Container, Stack } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
      <AppNavbar />

      <Container sx={{ mt: 4 }}>
        <Stack spacing={4} alignItems="center">
          <BootstrapForm />
          <MaterialForm />

          <Stack direction="row" spacing={3}>
            <CardUI title="Card 1" desc="Create what inspires you" />
            <CardUI title="Card 2" desc="Design your own path" />
            <CardUI title="Card 3" desc="Let your ideas grow" />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
