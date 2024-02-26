import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './navBar';
import Plot from 'react-plotly.js';
import Temps from './Temps';
import Devices from './DeviceDropdown'
import axios from 'axios';


function App() {
  const [deviceList, setDeviceList] = useState('Loading');
  const [isLoading, setLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState('Select A Device')
  const load_devices = async () => {
    try {
      const response = await axios.get('http://localhost:4000/available_devices');
      setDeviceList(response)
      setLoading(false)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    load_devices();
  }, []);
  return (
    <div bg="dark">
      <NavBar></NavBar>
      {isLoading ? '' : <Devices placeholder={selectedDevice}
        devices={deviceList}
        onDeviceSelected={setSelectedDevice} />}
      {/* <Temps></Temps> */}
    </div>

  );
}

export default App;
