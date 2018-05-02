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
import axios from 'axios';
import '../css/zorginstellingForm.css';

export default class ZorginstellingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      zorginstellingNaam: null,
      zorginstellingAdresregel: null,
      zorginstellingPostcode: null,
      zorginstellingPlaats: null,
      zorginstellingEmail: null,
      zorginstellingWachtwoord: null,
      success: false,
      error: false
    }
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleAddZorginstelling = () => {
    let data = {
      naam: this.state.zorginstellingNaam,
      adres: this.state.zorginstellingAdresregel,
      postcode: this.state.zorginstellingPostcode,
      plaats: this.state.zorginstellingPlaats,
      email: this.state.zorginstellingEmail,
      wachtwoord: this.state.zorginstellingWachtwoord
    }
    axios.post('/zorginstelling', data).then((res) => {
      this.setState({success: res.data, error: false});
    }).catch((err) => {
      this.setState({error: err, success: false});
    });
  }

  render() {
    return (<div>
      <Form>
        {
          this.state.error && <Row>
              <Col md="12">
                <Alert color="danger">
                  <div>{this.state.error}</div>
                </Alert>
              </Col>
            </Row>
        }
        {
          this.state.success && <Row>
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
              <Input type="text" name="zorginstellingNaam"
                placeholder="Type de naam van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
            </FormGroup>
            <FormGroup>
              <Label for="zorginstellingAdresregel">Adres:</Label>
              <Input type="text" name="zorginstellingAdresregel"
                placeholder="Type het adres van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
            </FormGroup>
            <FormGroup>
              <Label for="zorginstellingPostcode">Postcode:</Label>
              <Input type="text" name="zorginstellingPostcode"
                placeholder="Type de postcode van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
            </FormGroup>
            <FormGroup>
              <Label for="zorginstellingPlaats">Plaats:</Label>
              <Input type="text" name="zorginstellingPlaats"
                placeholder="Type de plaats van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
            </FormGroup>
          </Col>

          <Col md="4">
            <h5>Accountgegevens</h5>
            <FormGroup>
              <Label for="zorginstellingEmail">Email:</Label>
              <Input type="email" name="zorginstellingEmail"
                placeholder="Zorginstelling email" onChange={(event) => this.handleChange(event)}/>
            </FormGroup>
            <FormGroup>
              <Label for="zorginstellingWachtwoord">Wachtwoord:</Label>
              <Input type="password" name="zorginstellingWachtwoord"
                placeholder="Zorginstelling wachtwoord" onChange={(event) => this.handleChange(event)}/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Button onClick={this.handleAddZorginstelling} color="primary" className="crud-btn">Toevoegen</Button>
    </div>);
  }
}
