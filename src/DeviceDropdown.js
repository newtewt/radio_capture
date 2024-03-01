import Dropdown from 'react-bootstrap/Dropdown';




function Devices({ devices, onDeviceSelected, placeholder }) {
    const dropdownItems = devices.data.map((device) => {
        return <Dropdown.Item
            onClick={(e) => {
                e.preventDefault();
                console.log(device)
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