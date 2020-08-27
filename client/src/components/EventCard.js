import React from 'react';
import { Link } from 'react-router-dom'
import {Card , Nav , Button , Row ,Col, Container , ButtonToolbar} from  'react-bootstrap';
 function EventCard() {
    return (
        <Container>
        <Card style={{ marginTop:'50px' }}>
         <Row>  
         <Col md={6}>
         <Card.Img variant="top" className="card-img" style={{height:"250px"}} src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80" />
  
         </Col>
         <Col md={6}>
         <Card.Body>
          <Card.Title className="text-center">Event Name</Card.Title>
          <Card.Text>
           one or two line to about the event, interesting fact about event
          </Card.Text>
          <Row>
          <Col md={6}>
          <Card.Text >
            <p>  <b>Date : </b>  08/08/2020</p>
            <p>  <b>Time : </b>  5:00 PM </p>
          </Card.Text>
          </Col>
          <Col md={6}>
          <Card.Text >
          <b>Price : </b> 1000/-
          </Card.Text>
          
          </Col>
          </Row>
          <ButtonToolbar style={{display:"flex",justifyContent:"center",marginTop:"15px"}}> 
         <Link to='/register'> <Button variant="success"  > Register Now</Button> </Link>
           </ButtonToolbar>
        </Card.Body>
        </Col>
        </Row> 
      </Card>
      </Container>
    );
  }

  export default EventCard;