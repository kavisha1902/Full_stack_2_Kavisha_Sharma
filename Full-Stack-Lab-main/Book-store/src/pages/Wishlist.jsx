import { Container } from "react-bootstrap";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Wishlist() {
  return (
    <Container className="py-5">
      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        ❤️ My Wishlist
      </Typography>
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h6" className="text-muted" sx={{ mb: 2 }}>
          Your wishlist is empty
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained">Start Adding Books</Button>
        </Link>
      </Box>
    </Container>
  );
}
