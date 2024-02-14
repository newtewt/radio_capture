import logo from './logo.svg';
import './App.css';
import React from 'react';
import BasicExample from './navBar';
import Plot from 'react-plotly.js';
import Temps from './Temps';

function App() {
  return (
    <div bg="dark">
      <BasicExample></BasicExample>
      <Temps></Temps>
    </div>

  );
}

export default App;
