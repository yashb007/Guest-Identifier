import React from 'react';

import {Button, Container,Form ,ButtonToolbar} from  'react-bootstrap';
 function AddEvent() {
    return (
        <Container>
        <Form className="reg"  >
         <Form.Group controlId="formBasicName">
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" placeholder="Enter Name" />
         </Form.Group>
         <Form.Group controlId="formBasicDate">
               <Form.Label>Date</Form.Label>
               <Form.Control type="text" placeholder="Date" />
         </Form.Group>
         <Form.Group controlId="formBasicTime">
               <Form.Label>Time</Form.Label>
               <Form.Control type="text" placeholder="Time" />
         </Form.Group>
         <Form.Group controlId="formBasicPrice">
               <Form.Label>Price</Form.Label>
               <Form.Control type="text" placeholder="Price" />
         </Form.Group>
        
        <Form.Group>
        <Form.File id="photo" label="Upload the event  Photo Here" />
      </Form.Group>
      <ButtonToolbar style={{display:"flex",justifyContent:"center",marginTop:"20px"}}> <Button variant="success"> Register </Button></ButtonToolbar>
      
      </Form>
     </Container>
     );
  }

  export default AddEvent;