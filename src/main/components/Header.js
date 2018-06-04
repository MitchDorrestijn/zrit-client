/**
 * React related imports
 */
import React from 'react';
import {
  Nav,
  NavItem,
  Row,
  Col,
  Button
} from 'reactstrap';
import {Link} from 'react-router-dom';
import { Redirect } from 'react-router'

/**
 * Style related imports
 */
import '../css/navbar.css';

/**
 * Other imports
 */
import Logo from '../assets/img/logo.gif';

import {
  tokenExists
} from '../CRUD/Authentication';

/**
 * This component renders the header and navigation bar
 */
export default class Header extends React.Component {
  componentDidMount(){
    tokenExists(localStorage.getItem('Token')).then((res) => {res !== undefined && this.setState({redirectToLogin: !res.data})});
  }

  constructor(props){
    super(props);
    this.state = {
      redirectToLogin: false
    }
  }

  logout = () => {
    localStorage.removeItem('Token');
    this.setState({redirectToLogin: true})
  }

  render(){
    return (
      <div>
        {this.state.redirectToLogin && <Redirect to={this.props.routes.login}/>}
        <Row className="top-navigation">
          <Col xs="6">
            <figure>
              <Link to={this.props.routes.readZorginstelling}>
                <img src={Logo} alt="logo Zorgrit"/>
              </Link>
            </figure>
          </Col>
          <Col xs="6">
            <span className="float-right logout-btn">
              <Button onClick={this.logout}>Uitloggen</Button>
            </span>
          </Col>
        </Row>
        <Nav className="nav-pills nav-justified">
          <NavItem>
            <Link className="nav-link" to={this.props.routes.readZorginstelling}>Zorginstellingen</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to={this.props.routes.readAllRides}>Ritten</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to={this.props.routes.readChauffeur}>Chauffeurs</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to={this.props.routes.readClienten}>Clienten</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to={this.props.routes.readBetalingen}>Betalingen</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to={this.props.routes.createRit}>Ritten bestellen</Link>
          </NavItem>
          <NavItem>
            <Link className="nav-link" to={this.props.routes.aboutPage}>Over</Link>
          </NavItem>
        </Nav>
      </div>
    )
  }
}
