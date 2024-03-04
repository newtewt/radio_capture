import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import NavBar from './navBar';
import Devices from './DeviceDropdown'
import DeviceInfo from './DeviceInfo';
import axios from 'axios';




function App() {
  const [deviceList, setDeviceList] = useState('Loading');
  const [isLoading, setLoading] = useState(true);
  const [selectedDevice, setSelectedDevice] = useState()
  const load_devices = async () => {
    try {
      const response = await axios.get('http://localhost:4000/available_devices');
      setDeviceList(response)
      setLoading(false)
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    document.title = 'Radio Reader'
    load_devices();
  }, []);
  return (
    <div bg="dark">
      <NavBar></NavBar>
      {isLoading ? '' : <Devices placeholder={selectedDevice}
        devices={deviceList}
        onDeviceSelected={setSelectedDevice} />}
      <DeviceInfo device={selectedDevice}></DeviceInfo>
    </div>
  );
}

export default App;
