import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Top from './components/top'
import Event from './components/Event';
import NavBar from './components/Nav';
import Speaker from './components/Speaker';
import Schedule from './components/Schedule';
import Register from './components/Register';
import Contact from './components/Contact';




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
    <Contact />
    </div>
  )
}

export default App;
