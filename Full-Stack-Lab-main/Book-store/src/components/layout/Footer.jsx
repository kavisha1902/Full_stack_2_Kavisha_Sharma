import { Container, Row, Col, Form } from "react-bootstrap";
import { Typography, Button, TextField } from "@mui/material";

export default function Footer() {
  return (
    <footer className="site-footer">
      <Container className="container-max">
        <Row>
          <Col md={4}>
            <Typography variant="h5" sx={{ fontFamily: "'Cormorant Garamond', serif", color: 'var(--color-primary)' }}>Leaf & Lore</Typography>
            <Typography variant="body2" className="text-muted">Cozy picks, hand-curated stories.</Typography>
          </Col>
          <Col md={4}>
            <Typography variant="subtitle1" fontWeight={700}>Quick Links</Typography>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              <li>Home</li>
              <li>Cart</li>
              <li>Wishlist</li>
              <li>Contact</li>
            </ul>
          </Col>
          <Col md={4}>
            <Typography variant="subtitle1" fontWeight={700}>Newsletter</Typography>
            <Form>
              <TextField size="small" placeholder="Your email" sx={{ mr: 1, bgcolor: 'white', borderRadius: 1 }} />
              <Button variant="contained" size="small" sx={{ mt: 1, backgroundColor: 'var(--color-primary)' }}>Subscribe</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
