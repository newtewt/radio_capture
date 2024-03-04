import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


function DeviceInfo({ device }) {
  const lists = []
  const tabs = []
  for (device of device?.existingData) {
    const type = 'type' in  device ? `Type ${device.type}` : ''
    const list = `Time ${device.time}  ${type}`
    const id = uuidv4()
    lists.push(<ListGroup.Item action href={`#${id}`}>{list}</ListGroup.Item>)
    tabs.push(<Tab.Pane eventKey={`#${id}`}>{JSON.stringify(device)}</Tab.Pane>)
  }
  return (
    <Tab.Container id="list-group-tabs-example" defaultActiveKey={device?.model}>
      <Row>
        <Col sm={4}>
          <ListGroup>
            {lists}
          </ListGroup>
        </Col>
        <Col sm={8}>
          <Tab.Content>
            {tabs}
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default DeviceInfo;