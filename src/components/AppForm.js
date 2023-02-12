import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import { useState } from 'react';

function AppForm() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    
    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control required type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control required type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formMessage">
        <Form.Label>Message</Form.Label>
        <Form.Control required as="textarea" placeholder="Enter message" />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
}

export default AppForm;