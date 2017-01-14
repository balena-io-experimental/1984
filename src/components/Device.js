import React, { Component } from 'react';
import { Label, Image, Thumbnail, Button } from 'react-bootstrap';
import moment from 'moment';

class Devices extends Component {
  render() {
    const device = this.props.device
    console.log(device);
    if (!device.is_web_accessible) {
      // this.props.makeWebAccessible(device);
    }
    return (
      <Thumbnail src={`http://${this.props.device.ip_address}/stream/video.mjpeg`} alt="242x200">
        <h3>{device.name}</h3>
        <p>
        <Label>{device.ip_address}</Label>
        <Label bsStyle={ device.is_online ? 'success' : 'danger' }>
        { device.is_online ? 'Online' : `Last seen ${moment(device.last_connectivity_event).fromNow()}` }
        </Label>
        </p>
        <p>
        Location: {device.location}
        </p>
        <p>
          <Button bsStyle="primary">Button</Button>&nbsp;
          <Button bsStyle="default">Button</Button>
        </p>
      </Thumbnail>
    );
  }
}

export default Devices;
