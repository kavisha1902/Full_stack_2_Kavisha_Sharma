import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";

export default function AppNavbar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Link</Nav.Link>
            <Nav.Link disabled>Disabled</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control placeholder="Search" className="me-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
