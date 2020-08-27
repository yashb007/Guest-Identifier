import React from 'react';

import {Card , Nav , Button , Row ,Col, Container , Image} from  'react-bootstrap';
 function EventCard() {
    return (
        <Container>
        <Card style={{ marginTop:'50px' }}>
         <Row>  
         <Col>
         <Image src="../top.jpg" rounded />
        
         </Col>
         <Col>
         <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        </Col>
        </Row> 
      </Card>
      </Container>
    );
  }

  export default EventCard;