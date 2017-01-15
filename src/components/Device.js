import React, { Component } from 'react';
import { Label, Thumbnail } from 'react-bootstrap';
import moment from 'moment';

class Devices extends Component {
  render() {
    const device = this.props.device
    if (!device.is_web_accessible) {
      this.props.enableDeviceUrl(device.uuid);
    }
    return (
      <Thumbnail src={`https://${this.props.device.uuid}.resindevice.io/stream/video.mjpeg`} alt="Image stream">
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
      </Thumbnail>
    );
  }
}

export default Devices;
