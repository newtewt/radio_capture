import Dropdown from 'react-bootstrap/Dropdown';




function Devices({ devices, onDeviceSelected, placeHolder }) {
    const dropdownItems = devices.data.map((device) => {
        return <Dropdown.Item key={device.model + device.id} href="#/action-1">{device.model + ' ID: ' + device.id}</Dropdown.Item>
    })
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                {placeHolder}
            </Dropdown.Toggle>

            <Dropdown.Menu>
                {dropdownItems}
            </Dropdown.Menu>
        </Dropdown>
    );
}


export default Devices;