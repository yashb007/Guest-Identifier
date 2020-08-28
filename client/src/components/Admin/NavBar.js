import React from 'react';

import { Nav ,  Container} from  'react-bootstrap';

 function AdminNav() {
    return (
     <div className="">        <Nav justify variant="Tabs"   activeKey="1"  className="" style={{marginTop : '20px',height:"55px",fontSize:"25px"}}>
        <Nav.Item>
           <Nav.Link eventkey="1" href="/admin/event/add" >Add Events</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link  href="/admin/list"> Attendes </Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link  href="">Model</Nav.Link>
        </Nav.Item>
        </Nav>
        </div>

    );
  }

  export default AdminNav;