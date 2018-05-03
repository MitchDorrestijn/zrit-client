/**
 * React related imports
 */
import React from 'react';
import {
  Nav,
  NavItem,
  Row,
  Col,
  NavLink
} from 'reactstrap';
import {Link} from 'react-router-dom';

/**
 * Style related imports
 */
import '../css/navbar.css';

/**
 * Other imports
 */
import Logo from '../assets/img/logo.gif';

/**
 * This component renders the header and navigation bar
 */
const Header = (props) => {
  return (
    <div>
      <Row className="top-navigation">
        <Col xs="6">
          <figure>
            <Link to={props.routes.readZorginstelling}>
              <img src={Logo} alt="logo Zorgrit"/>
            </Link>
          </figure>
        </Col>
        <Col xs="6">
          <span className="float-right logout-btn">
            <NavLink href="#">Uitloggen</NavLink>
          </span>
        </Col>
      </Row>
      <Nav className="nav-pills nav-justified">
        <NavItem>
          <Link className="nav-link" to={props.routes.readZorginstelling}>Zorginstellingen</Link>
        </NavItem>
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

export default Header;
