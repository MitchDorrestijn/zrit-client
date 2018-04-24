import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Row, Col } from 'reactstrap';
import '../css/navbar.css';
import Logo from '../assets/img/logo.gif';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Row className="top-navigation">
          <Col xs="6">
            <figure>
              <img src={Logo} alt="logo Zorgrit" />
            </figure>
          </Col>
          <Col xs="6">
            <span className="float-right logout-btn"><NavLink href="#">Uitloggen</NavLink></span>
          </Col>
        </Row>

        <Nav className="nav-pills nav-justified">
          <NavItem>
            <NavLink href="#">Ritten</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Chauffeurs</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Clienten</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Betalingen</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Ritten bestellen</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Over</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
