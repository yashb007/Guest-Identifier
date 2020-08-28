import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import SignIn from './components/Admin/signin';
import User from './components/user';
import DashBoard from './components/Admin/dashboard';




function App() {
  return (
    <div>
     <BrowserRouter>
    <Switch>
     <Route exact path='/' component={User} />
     <Route exact path='/signin' component={SignIn} />
     <Route path='/admin' component={DashBoard} />
     </Switch>
     </BrowserRouter>
    </div>
    
  )
}

export default App;
