/**
 * React related imports
 */
import React from 'react';
import {
  Nav,
  NavItem,
  Row,
  Col
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
            <Link to="#">Uitloggen</Link>
          </span>
        </Col>
      </Row>
      <Nav className="nav-pills nav-justified">
        <NavItem>
          <Link className="nav-link" to={props.routes.readZorginstelling}>Zorginstellingen</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to={props.routes.readRides}>Ritten</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to={props.routes.readChauffeur}>Chauffeurs</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to={props.routes.readClienten}>Clienten</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="#">Betalingen</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to="#">Ritten bestellen</Link>
        </NavItem>
        <NavItem>
          <Link className="nav-link" to={props.routes.aboutPage}>Over</Link>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Header;
