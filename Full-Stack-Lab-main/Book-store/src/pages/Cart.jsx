import { Container, Row, Col } from "react-bootstrap";
import { Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cart() {
  return (
    <Container className="py-5">
      <Typography variant="h4" fontWeight={700} sx={{ mb: 3 }}>
        🛒 Shopping Cart
      </Typography>
      <Box sx={{ textAlign: "center", py: 8 }}>
        <Typography variant="h6" className="text-muted" sx={{ mb: 2 }}>
          Your cart is empty
        </Typography>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained">Continue Shopping</Button>
        </Link>
      </Box>
    </Container>
  );
}
