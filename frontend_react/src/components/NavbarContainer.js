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
          <Nav>
             { this.props.currentUser.currentUser.attributes.name
               ? <Navbar.Text> Sign Out | Welcome   </Navbar.Text>
               : ''
             }

          </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
  }
}

export default NavbarContainer
