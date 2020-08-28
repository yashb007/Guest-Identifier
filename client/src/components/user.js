import React from 'react';
import '../App.css';
import Top from './top'
import Event from './Event';
import Speaker from './Speaker';
import Schedule from './Schedule';
import Register from './Register';
import Contact from './Contact';




function User() {
  return (
    <div>
    <Top/>
    <Event />
    <Speaker />
    <Schedule />
    <Register />
    <Contact />
    </div>
  )
}

export default User;
