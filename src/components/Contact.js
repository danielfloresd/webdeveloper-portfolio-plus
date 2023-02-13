import React, { useState } from "react";
import { Form, Button, Card, Row, Col, Alert } from "react-bootstrap";

// Email regex
const emailRegex = RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

function Contact() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleBlurName = () => {
    const name = document.getElementById("formName").value;
    if (name === "") {
      setShow(true);
      setError("Name is required");
    } else {
      setShow(false);
    }
  };

  const handleBlurEmail = () => {
    const name = document.getElementById("formEmail").value;
    if (name === "") {
      setShow(true);
      setError("Email is required");
    } else {
      if (emailRegex.test(name)) {
        setShow(false);
      } else {
        setShow(true);
        setError("Email is not valid");
      }
    }
  };

  const handleBlurMessage = () => {

    const name = document.getElementById("formMessage").value;
  
    if (name === "") {
      setShow(true);
      setError("Message is required");
    } else {
      setShow(false);
    }
  };

  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  return (
    <Row>
      <Col lg={8}>
        <Card>
          <Card.Body>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  onBlur={handleBlurName}
                  required
                  type="text"
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  onBlur={handleBlurEmail}
                  required
                  type="email"
                  placeholder="Enter email"
                />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  onBlur={handleBlurMessage}
                  // onFocus={handleBlurMessage}
                  required
                  as="textarea"
                  placeholder="Enter message"
                />
              </Form.Group>
              {show ? (
                <Alert
                  variant="danger"
                  // onClose={() => setShow(false)}
                  dismissible
                >
                  {/* <Alert.Heading>Oh snap! You got an error!</Alert.Heading> */}
                  <p>{error}</p>
                </Alert>
              ) : null}
              <Button type="submit">Submit</Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default Contact;
