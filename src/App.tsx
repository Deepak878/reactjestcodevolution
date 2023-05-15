import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './components/application/application';
import Skills from './components/skills/skills';
import Greet from './components/greet/Greet';

function App() {
  return (
    <div className="App">
      {/* <Application/> */}
      <Greet/>
    </div>
  );
}

export default App;
