import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
require("react-bootstrap/lib/NavbarHeader")
//line 4 was supposed to replace 6-9 but its not working
import {Nav} from 'react-bootstrap'
import {Navbar} from 'react-bootstrap'
import {NavItem} from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const NavbarContainer = class extends Component {
  render(){
    return(
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand> BootConnect </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>

        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="#">Dashboard</NavItem>
            <NavItem eventKey={2} href="#">About</NavItem>
            <NavItem eventKey={3} href="#">Contact</NavItem>
          </Nav>

          <Navbar.Text pullRight> Sign Out </Navbar.Text>
          <Navbar.Text pullRight> | </Navbar.Text>
          <Navbar.Text pullRight> Welcome {this.props.currentUser.currentUser.attributes.name} </Navbar.Text>


        </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default NavbarContainer
