/**
 * React related imports
 */
import React from 'react';
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Row,
  Button,
  Alert
} from 'reactstrap';
import Select from 'react-select';

/**
 * Endpoints import
 */
import {
  createAuthenticatedUser
} from '../CRUD/Authentication';

import {
  getAllZorginstellingen
} from '../CRUD/Zorginstelling';


/**
 * Style related imports
 */
import '../css/form.css';

/**
 * This class takes care of rendering the AuthenticatedUserForm form and manages its state
 */
export default class AuthenticatedUserForm extends React.Component {
  /**
   * is fired when the component did mount
   */
  componentDidMount() {
    //redirectIfUserIsNotAdmin(this.props);
    this.getAllZorginstellingen();
  }

  /**
   * Setups all the data.
   * @constructor
   * @param {props} props - The given properties by the superclass
   */
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      role: "",
      careInstitutionId: "",
      email: "",
      zorginstellingen: [],
      success: false,
      error: false
    }
  }

  /**
 * Makes the GET request to get all the zorginstellingen and updates the state
 */
  getAllZorginstellingen = () => {
    return (
      getAllZorginstellingen(this.props).then((res) => {
        if(res !== undefined){
          let zorginstellingen = [];
          for(let i=0; i<res.data.length; i++){
            zorginstellingen.push({
              value: res.data[i].id,
              label: res.data[i].name,
              state: 'careInstitutionId'
            });
          }
          this.setState({zorginstellingen});
        }
      })
    );
  }

  handleSelect = (selectedOption) => {
    this.setState({ [selectedOption.state]: selectedOption.value });
  }

  /**
 * Makes the POST request ready
 * @param {string} data - Object of the new user
 */
  handleAddAuthenticatedUser = (data) => {
    createAuthenticatedUser(data)
    .then((res) => this.setState({success: `Beheerder ${data.userName} succesvol toegevoegd`, error: false}))
    .catch((err) => this.setState({error: err.message, success: false}));
  }

  /**
   * Saves form changes in the state.
   * @param {string} event - HTML object from the form target
   */
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  /**
   * Makes the POST request ready
   */
  handleAuthenticatedUser = () => {
    let data = {
      userName: this.state.userName,
      password: this.state.password,
      role: this.state.role,
      careInstitutionId: this.state.careInstitutionId,
      email: this.state.email
    }
    this.handleAddAuthenticatedUser(data);
  }

  /**
   * Renders the view for the user
   */
  render() {
    return (
      <div>
        <Form>
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
          <Row>
            <Col md="6">
              <FormGroup>
                <Label for="userName">Gebruikersnaam:</Label>
                <Input value={this.state.userName} type="text" name="userName"
                  placeholder="Type de gebruikersnaam" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="email">Email:</Label>
                <Input value={this.state.email} type="text" name="email"
                  placeholder="Type het emailadres" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="password">Wachtwoord:</Label>
                <Input value={this.state.password} type="password" name="password"
                  placeholder="Type het wachtwoord" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="careInstitutionId">Zorginstelling:</Label>
                <Select placeholder="Zorginstelling" name="careInstitutionId" value={this.state.careInstitutionId} onChange={this.handleSelect}
                  options={this.state.zorginstellingen}
                />
              </FormGroup>
              <FormGroup>
                <Label for="role">Rechten:</Label>
                <Select placeholder="Rechten nieuwe beheerder" name="role" value={this.state.role} onChange={this.handleSelect}
                  options={[
                    { value: 'ROLE_ZORGINSTELLING', label: 'ROLE_ZORGINSTELLING', state: 'role'},
                    { value: 'ROLE_ADMIN', label: 'ROLE_ADMIN', state: 'role'}
                  ]}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Button onClick={this.handleAuthenticatedUser} color="primary" className="crud-btn">Toevoegen</Button>
      </div>
    );
  }
}
