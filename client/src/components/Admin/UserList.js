import React from 'react';
import {Table} from 'react-bootstrap' 
import {Row , Col,  Container} from  'react-bootstrap';
import { Link } from 'react-router-dom';
 function List() {
    return (
         <div style={{marginTop:"50px"}}>
         <Table striped bordered hover variant="">
         <thead>
           <tr>
             <th>#</th>
             <th>Photo</th>
             <th> Name</th>
             <th> Email</th>
             <th>Age</th>
             <th>Contact</th>
             
           </tr>
         </thead>
         <tbody>
           <tr>
             <td>1</td>
             <td>Mark</td>
             <td>Otto</td>
             <td>@mdo</td>
           </tr>
           <tr>
             <td>2</td>
             <td>Jacob</td>
             <td>Thornton</td>
             <td>@fat</td>
           </tr>
           <tr>
             <td>3</td>
             <td colSpan="2">Larry the Bird</td>
             <td>@twitter</td>
           </tr>
         </tbody>
       </Table>
         </div>
        );
  }
  export default List;