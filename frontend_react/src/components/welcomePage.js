import React, { Component } from 'react'
import { Link } from 'react-router'
import '../routes.js'
import { Row } from 'react-bootstrap'
import { Col } from 'react-bootstrap'
import SignInBox from './SignInBox'
import SignUpBox from './SignUpBox'

const WelcomePage = class extends Component {
  constructor(props){
    super(props)
    this.state = { register: false, login: false }
  }

  toggleLogin(){
    this.setState({ register: false, login: true })
  }

  toggleRegister(){
    this.setState({ register: true, login: false })
  }

  render(){
    return(
      <div className="splash">
          <Row>
            <Col md={12} >
              <div id="splash-container">
                <div className="splash-text">BootConnect</div>
                <div className="splash-left">
                  <Link className="splash-link"
                        to="#"
                        onClick={this.toggleLogin.bind(this)}>
                         Login </Link>
                </div>
                <div className="splash-right">
                  <Link className="splash-link"
                       to="#"
                       onClick={this.toggleRegister.bind(this)}>
                       Register</Link>
                  </div>
                {this.state.register ? <div><SignUpBox /></div> : ''}
                {this.state.login ? <div><SignInBox /></div> : ''}
              </div>
            </Col>
          </Row>
      </div>
    )
  }
}

export default WelcomePage
