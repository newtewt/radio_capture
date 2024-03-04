import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';


const get_device_info = async (device_id) => {
    try {
        console.log('getting ');
        const response = await axios.get(`http://localhost:4000/device_info?id=${device_id}`);
        console.log(response);

    } catch (error) {
        console.error(error);
    }
}

function Devices({ devices, onDeviceSelected, placeholder }) {
    const dropdownItems = devices.data.map((device) => {
        return <Dropdown.Item
            onClick={(e) => {
                const res = get_device_info(device.id)
                e.preventDefault();
                onDeviceSelected(device);
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