import React from 'react';

import { Nav ,  Container} from  'react-bootstrap';

 function NavBar() {
    return (
        <Container>
        <Nav justify variant="tabs" activeKey="1"  className="" style={{marginTop : '20px',height:"55px",fontSize:"25px"}}>
        <Nav.Item>
           <Nav.Link eventkey="1" href="/">Events</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link  href="/schedule">Schedule</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link  href="/speaker">Speakers</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link href="/register">Register</Nav.Link>
        </Nav.Item>
        </Nav>
      </Container>
    );
  }

  export default NavBar;