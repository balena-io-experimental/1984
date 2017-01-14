import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import NavBar from './components/NavBar';
import Login from './components/Login';
import Devices from './components/Devices';
import Message from './components/Message';
import { resin } from './api';
import logo from '../public/logo.svg';

const defaultState = {
  devices: [],
  apps: [],
  selectedApp: {},
  error: null,
  username: null,
  loading: false
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = defaultState;
  }

  componentDidMount() {
    this.bootstrap();
  }

  bootstrap() {
    this.setState({ loading: true });
    return resin.auth.isLoggedIn().then((loggedIn) => {
      if (loggedIn) {
        return this.whoami()
        .then(() => {
          return resin.models.application.getAll()
        })
        .then((apps) => {
          this.setState({ apps: apps })
          // if they only have one app defualt to it
          return this.selectApp(apps[0])
        })
        .then(() => {
          this.setState({ loading: false });
        })
        .catch((err) => {
          this.setState({ error: err })
        });
      } else {
        this.setState({loading: false});
      }
    })
  }

  whoami() {
    return resin.auth.whoami()
    .then((username) => {
      this.setState({ username: username })
    })
  }

  selectApp(app) {
    this.setState({ selectedApp: app })
    return resin.models.device.getAllByApplication(app.app_name)
    .then((devices) => {
      this.setState({ devices: devices });
    })
  }

  login(credentials) {
    resin.auth.login(credentials).then(() => {
      return this.bootstrap()
    })
    .catch((err) => {
      this.setState({ error: err })
    })
  }

  logout() {
    resin.auth.logout().then(() => {
      this.setState(defaultState)
    }).catch((err) => {
      this.setState({ error: err })
    })
  }

  loadRoute() {
    if (!this.state.loading && this.state.username) {
      return <Devices app={this.state.selectedApp} devices={this.state.devices} />
    } else if (!this.state.loading && !this.state.username){
      return <Login login={this.login.bind(this)} />
    } else {
      return <div>Loading</div>
    }
  }

  clearError() {
    this.setState({error: null});
  }

  render() {
    return (
      <div className="App">
        <NavBar
          logout={this.logout.bind(this)}
          username={this.state.username}
          apps={this.state.apps}
          selectApp={this.selectApp.bind(this)}
          logo={logo}
          />
        <Grid>
          <Row className="show-grid">
            <Message message={this.state.error} clearError={this.clearError.bind(this)} />
            <Col xs={12} mdPush={3} md={6}>
              {this.loadRoute()}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;
