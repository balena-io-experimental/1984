import React, { Component } from 'react';
import Device from './Device';

class Devices extends Component {

  render() {
    return (
      <div>
        <h1><code>{this.props.app.app_name}</code> - Video Streams!</h1>
        {
          this.props.devices.map((device, index) => {
            return <Device key={device.id} enableDeviceUrl={this.props.enableDeviceUrl} device={device} />
          })
        }
      </div>
    );
  }
}

export default Devices;
