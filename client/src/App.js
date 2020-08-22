import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch, useHistory} from 'react-router-dom';
import Top from './components/top'
import  EventCard  from './components/Card';
import NavBar from './components/Nav';
import Speaker from './components/Speaker';
function App() {
  return (
    <div>
      <Top />
      <NavBar />
      <EventCard />
      <EventCard />
      <EventCard />
      <Speaker />
    </div>
  );
}

export default App;
