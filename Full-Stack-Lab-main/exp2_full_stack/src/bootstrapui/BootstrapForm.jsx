import { Container, Form, Button } from "react-bootstrap";

export default function BootstrapForm() {
  return (
    <Container className="p-4">
      <h3 className="text-center">Learning Bootstrap</h3>
      <Form>
        <Form.Control placeholder="Enter name" className="mb-3" />
        <Form.Control placeholder="Enter email" className="mb-3" />
        <Button className="w-100">Submit</Button>
      </Form>
    </Container>
  );
}
