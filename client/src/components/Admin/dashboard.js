import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import {Row , Col,  Container} from  'react-bootstrap';
import { Link } from 'react-router-dom';
import List from './UserList'

import AdminNav from './NavBar';
import AddEvent from './AddEvent';
 function DashBoard() {
    return (
       <div >
        <AdminNav />
        <BrowserRouter >
           <Route exact path="/admin/event/add" component={AddEvent} />
           <Route exact path="/admin/list" component={List} />
        </BrowserRouter>
       </div>
    );
  }
  export default DashBoard;