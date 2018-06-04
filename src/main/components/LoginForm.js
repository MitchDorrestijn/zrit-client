/**
 * React related imports
 */
import React from 'react';
import {
  Button,
  Form,
  Label,
  Input,
  FormGroup,
  Row,
  Col,
  Alert
} from 'reactstrap';

import Select from 'react-select';

import {
  getAllZorginstellingen
} from '../CRUD/Zorginstelling';

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
  componentDidMount(){
    getAllZorginstellingen(this.props).then((res) => {res !== undefined && this.fillZorginstellingList(res.data)});
  }

  constructor(props){
    super(props);
    this.state = {
      gebruikersnaam: "",
      wachtwoord: "",
      role: "",
      careInstitutionId: "",
      zorginstellingenLijst: [],
      error: false,
      success: false
    }
  }

  fillZorginstellingList = (data) => {
    let zorginstellingenLijst = [];
    for(let i=0; i<data.length; i++){
      zorginstellingenLijst.push({value: data[i].id, label: data[i].name, state: 'careInstitutionId'});
    }
    this.setState({zorginstellingenLijst})
  }

  handleSelect = (selectedOption) => {
    this.setState({
      [selectedOption.state]: selectedOption.value
    });
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
      password: this.state.wachtwoord,
      role: this.state.role,
      careInstitutionId: this.state.careInstitutionId
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

            <FormGroup>
              <Label for="role">Uw rol</Label>
              <Select placeholder="Rol'" name="role" value={this.state.role} onChange={this.handleSelect}
                options={[
                  { value: 'ROLE_ADMIN', label: 'Administrator', state: 'role'},
                  { value: 'ROLE_ZORGINSTELLING', label: 'Zorginstelling', state: 'role'}
                ]}
              />
            </FormGroup>

            <FormGroup>
              <Label for="careInstitutionId">Zorginstelling:</Label>
              <Select placeholder="Selecteer zorginstelling" name="careInstitutionId" value={this.state.careInstitutionId} onChange={this.handleSelect} options={this.state.zorginstellingenLijst} />
            </FormGroup>

            <Button onClick={this.handleLoginData} color="primary" className="crud-btn">Inloggen</Button>
          </Form>
        </div>
      </div>
    )
  }
}
