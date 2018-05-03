/**
 * React related imports
 */
import React from 'react';
import axios from 'axios';
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

/**
 * Style related imports
 */
import '../css/zorginstellingForm.css';

/**
 * This class takes care of rendering the zorginstellingen form and manages its state
 */
export default class ZorginstellingForm extends React.Component {

  /**
   * is fired when the component did mount and makes it ready to do a PUT request to get all current data (if any)
   */
  componentDidMount() {
    if (this.props.update) {
      axios.get(`/zorginstelling/${this.props.id}`).then((res) => {
        this.setState({
          zorginstellingNaam: res.naam,
          zorginstellingAdresregel: res.adres,
          zorginstellingPostcode: res.postcode,
          zorginstellingPlaats: res.plaats,
          zorginstellingEmail: res.email,
          zorginstellingWachtwoord: res.wachtwoord
        });
      }).catch((err) => {
        this.setState({error: err.message, success: false});
      });
    }
  }

  /**
   * Setups all the data.
   * @constructor
   * @param {props} props - The given properties by the superclass
   */
  constructor(props) {
    super(props);
    this.state = {
      zorginstellingNaam: "",
      zorginstellingAdresregel: "",
      zorginstellingPostcode: "",
      zorginstellingPlaats: "",
      zorginstellingEmail: "",
      zorginstellingWachtwoord: "",
      success: false,
      error: false
    }
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
   * Makes the POST or PUT request ready and sends it to the server
   */
  handleAddZorginstelling = () => {
    let data = {
      naam: this.state.zorginstellingNaam,
      adres: this.state.zorginstellingAdresregel,
      postcode: this.state.zorginstellingPostcode,
      plaats: this.state.zorginstellingPlaats,
      email: this.state.zorginstellingEmail,
      wachtwoord: this.state.zorginstellingWachtwoord
    }
    console.log(data);
    if (this.props.update) {
      axios.put(`/zorginstelling/${this.props.id}`, data).then((res) => {
        this.setState({success: res.data, error: false});
      }).catch((err) => {
        this.setState({error: err.message, success: false});
      });
    } else {
      axios.post('/zorginstelling', data).then((res) => {
        this.setState({success: res.data, error: false});
      }).catch((err) => {
        this.setState({error: err.message, success: false});
      });
    }
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
            <Col md="4">
              <h5>Plaatsgegevens</h5>
              <FormGroup>
                <Label for="zorginstellingNaam">Naam:</Label>
                <Input value={this.state.zorginstellingNaam} type="text" name="zorginstellingNaam"
                  placeholder="Type de naam van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="zorginstellingAdresregel">Adres:</Label>
                <Input value={this.state.zorginstellingAdresregel} type="text" name="zorginstellingAdresregel"
                  placeholder="Type het adres van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="zorginstellingPostcode">Postcode:</Label>
                <Input value={this.state.zorginstellingPostcode} type="text" name="zorginstellingPostcode"
                  placeholder="Type de postcode van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="zorginstellingPlaats">Plaats:</Label>
                <Input value={this.state.zorginstellingPlaats} type="text" name="zorginstellingPlaats"
                  placeholder="Type de plaats van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
            <Col md="4">
              <h5>Accountgegevens</h5>
              <FormGroup>
                <Label for="zorginstellingEmail">Email:</Label>
                <Input value={this.state.zorginstellingEmail} type="email" name="zorginstellingEmail"
                  placeholder="Zorginstelling email" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="zorginstellingWachtwoord">Wachtwoord:</Label>
                <Input value={this.state.zorginstellingWachtwoord} type="password" name="zorginstellingWachtwoord"
                  placeholder="Zorginstelling wachtwoord" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Button onClick={this.handleAddZorginstelling} color="primary" className="crud-btn">Toevoegen</Button>
      </div>
    );
  }
}
