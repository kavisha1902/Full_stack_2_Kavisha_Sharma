import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Typography } from "@mui/material";

export default function BookDetails() {
  const { id } = useParams();

  return (
    <Container className="py-4">
      <Typography variant="h5" fontWeight={700}>
        Book Details
      </Typography>
      <Typography sx={{ mt: 1 }}>Book ID: {id}</Typography>
    </Container>
  );
}
