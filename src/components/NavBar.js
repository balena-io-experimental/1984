import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem, Image, Badge } from 'react-bootstrap';

class NavBar extends Component {

  renderApps(apps) {
    return apps.map((app, index) => {
      return (
        <MenuItem onClick={ () => { this.props.selectApp(app) }} key={index}>
        <Image width={20} height={20} src={`https://dashboard.resin.io/img/devices/${app.device_type}.svg`} /> {app.app_name}
        </MenuItem>
      )
    })
  }

  render() {
    return (
      <Navbar collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Image src={this.props.logo} />
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              welcome { this.props.username }
            </NavItem>
            <NavDropdown eventKey={3} title={<span>Select an app <Badge>{this.props.apps.length}</Badge></span>} id="basic-nav-dropdown">
              {this.renderApps(this.props.apps)}
            </NavDropdown>
            <NavItem onClick={this.props.logout}>Logout</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
