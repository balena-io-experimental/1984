import React, { Component } from 'react';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  handleChange(e) {
    this.setState({ [e.target.type]: e.target.value });
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <FormControl type="email" placeholder="Email" onChange={ e => this.handleChange(e) } />
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <FormControl type="password" placeholder="Password" onChange={ e => this.handleChange(e) } />
        </FormGroup>

        <FormGroup>
          <Button onClick={ () => this.props.login(this.state) }>Sign in</Button>
        </FormGroup>
      </Form>
    );
  }
}

export default Login;
