import React from 'react';

import { Nav ,  Container} from  'react-bootstrap';

 function NavBar() {
    return (
        <Container>
        <Nav justify variant="tabs" defaultActiveKey="" style={{marginTop : '20px'}}>
  <Nav.Item>
    <Nav.Link eventKey="link-0">Events</Nav.Link>
  </Nav.Item>
  
   <Nav.Item>
     <Nav.Link eventKey="link-2">Schedule</Nav.Link>
   </Nav.Item>
   <Nav.Item>
    <Nav.Link eventKey="link-3">Speakers</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-4">Register</Nav.Link>
  </Nav.Item>
 

  </Nav>
      </Container>
    );
  }

  export default NavBar;