import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import Top from './components/top'
import  Event from './components/Event';
import NavBar from './components/Nav';
import Speaker from './components/Speaker';
import Schedule from './components/Schedule';
import Register from './components/Register';




function App() {
  return (
    <div>
    <Top/>
    <NavBar/>
    <BrowserRouter>
    <Switch>
    <Route exact path='/' component={Event} />
    <Route path='/speaker' component={Speaker} />
    <Route exact path='/schedule' component={Schedule} />
    <Route exact path='/register' component={Register} />
     </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App;
