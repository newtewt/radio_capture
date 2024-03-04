import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';


const get_device_info = async (device_id) => {
    try {
        console.log('getting ');
        const response = await axios.get(`http://localhost:4000/device_info?id=${device_id}`);
        return response.data

    } catch (error) {
        console.error(error);
    }
}

function Devices({ devices, onDeviceSelected, placeholder }) {
    const dropdownItems = devices.data.map((device) => {
        return <Dropdown.Item
            onClick={ async (e) =>  {
                const res = await get_device_info(device.id)
                e.preventDefault();
                onDeviceSelected({...device, existingData: res });
            }}
            key={device.model + device.id}
            href="#/action-1">{device.model + ' ID: ' + device.id}
        </Dropdown.Item>
    })
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {placeholder?.model || "Select A Device"}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {dropdownItems}
            </Dropdown.Menu>
        </Dropdown>
    );
}


export default Devices;