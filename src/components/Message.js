import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';

class Message extends Component {

  setTimeout(msg) {
    // clear the error after 5s
    setTimeout(() => {
      this.props.clearError();
    }, 5000);
  }

  render() {
    const msg = this.props.message;
    if (msg) {
      this.setTimeout(msg);
      return (
        <Alert bsStyle="warning">
          <h4>{msg.name}</h4>
          <p>{msg.message}</p>
        </Alert>
      );
    }
    return <div></div>
  }
}

export default Message;
