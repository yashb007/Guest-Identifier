import React from 'react';
import EventCard from './EventCard'
import {Card , Nav , Button , Row ,Col, Container} from  'react-bootstrap';
 function Event() {
    return (
        <Container>
        
    <h1 className="text-center" style={{marginTop:"30px"}}>Events</h1>
          <EventCard />
          <EventCard />
          <EventCard />
      </Container>
    );
  }

  export default Event;