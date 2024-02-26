import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './navBar';
import Plot from 'react-plotly.js';
import Temps from './Temps';
import Devices from './DeviceDropdown'

function App() {
  return (
    <div bg="dark">
      <NavBar></NavBar>
      <Devices></Devices>
      {/* <Temps></Temps> */}
    </div>

  );
}

export default App;
