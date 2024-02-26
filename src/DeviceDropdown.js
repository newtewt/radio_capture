import Dropdown from 'react-bootstrap/Dropdown';
import React, { useState, useEffect } from 'react';
import axios from 'axios';






function Devices() {
    const [deviceList, setDeviceList] = useState('Loading');
    const [isLoading, setLoading] = useState(true);
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


    if (!isLoading) {
        const dropdownItems = deviceList.data.map((device) => <Dropdown.Item key={device.model} href="#/action-1">{device}</Dropdown.Item>)
        return (
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select A Device
                </Dropdown.Toggle>

                <Dropdown.Menu>

                    {dropdownItems}
                </Dropdown.Menu>
            </Dropdown>
        );
    }






}

export default Devices;