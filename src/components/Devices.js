import React, { Component } from 'react';
import Device from './Device';

class Devices extends Component {

  constructor(props) {
    super(props);
    this.state = {
      alertVisible: true
    };
  }

  render() {
    return (
      <div>
        <h1><code>{this.props.app.app_name}</code> - Video Streams!</h1>
        {
          this.props.devices.map((device, index) => {
            return <Device key={device.id} device={device} />
          })
        }
      </div>
    );
  }
}

export default Devices;
