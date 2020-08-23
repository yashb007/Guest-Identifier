import React from 'react';
import EventCard from './EventCard'
import {Card , Nav , Button , Row ,Col, Container} from  'react-bootstrap';
 function Event() {
    return (
        <Container>
          <EventCard />
          <EventCard />
          <EventCard />
      </Container>
    );
  }

  export default Event;