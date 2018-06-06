/**
 * React related imports
 */
import React from 'react';
import {
  Button,
  Form,
  Label,
  Input,
  Row,
  Col,
  Alert
} from 'reactstrap';

import {
  createToken
} from '../CRUD/Authentication';

/**
 * Other imports
 */
import Logo from '../assets/img/logo.gif';

/**
 * This component renders the the login form
 */
export default class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      gebruikersnaam: "",
      wachtwoord: "",
      error: false,
      success: false
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleLogin = (data) => {
    createToken(data)
    .then((res) => {this.redirectToPersonalPage(res)})
    .catch((err) => this.setState({error: err.message, success: false}));
  }

  redirectToPersonalPage = (res) => {
    localStorage.setItem('Token', res.data);
    return this.props.history.push(`${this.props.routes.starterpage}`);
  };

  handleLoginData = () => {
    let data = {
      userName: this.state.gebruikersnaam,
      password: this.state.wachtwoord
    }
    this.handleLogin(data);
  }

  render(){
    return (
      <div className="loginGrandParentContaniner">
        <div className="loginParentContainer">
          {this.state.error &&
            <Row>
              <Col md="12">
                <Alert color="danger">
                  <div>{this.state.error}</div>
                </Alert>
              </Col>
            </Row>
          }
          {this.state.success &&
            <Row>
              <Col md="12">
                <Alert color="success">
                  <div>{this.state.success}</div>
                </Alert>
              </Col>
            </Row>
          }

          <Form>
            <header>
              <img className="mb-4" src={Logo} alt="logo Zorgrit"/>
            </header>

            <Label for="gebruikersnaam" className="float-left">Gebruikersnaam</Label>
            <Input name="gebruikersnaam" type="text" className="mb-3 " placeholder="Gebruikersnaam" onChange={(event) => this.handleChange(event)} />

            <Label for="wachtwoord" className="float-left">Wachtwoord</Label>
            <Input name="wachtwoord" type="password" className="mb-4" placeholder="Wachtwoord" onChange={(event) => this.handleChange(event)} />

            <Button onClick={this.handleLoginData} color="primary" className="crud-btn">Inloggen</Button>
          </Form>
        </div>
      </div>
    )
  }
}
