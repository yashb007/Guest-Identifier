import React from 'react';

import {Button, Container,Form} from  'react-bootstrap';
 function Register() {
    return (
        <Container>
        <Form className="reg"  >
         <Form.Group controlId="formBasicEmail">
               <Form.Label>Email address</Form.Label>
               <Form.Control type="email" placeholder="Enter email" />
         </Form.Group>
         <Form.Group controlId="formBasicName">
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" placeholder="Name" />
         </Form.Group>
         <Form.Group controlId="formBasicAge">
               <Form.Label>Age</Form.Label>
               <Form.Control type="number" placeholder="Age" />
         </Form.Group>
         <Form.Group controlId="formBasicContact">
               <Form.Label>Contact Number</Form.Label>
               <Form.Control type=" " placeholder="Contact Number" />
         </Form.Group>
        
        <Form.Group>
        <Form.File id="photo" label="Upload Your Photo Here" />
      </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
     </Container>
     );
  }

  export default Register;