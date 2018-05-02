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

  handleZorginstellingNaam = (zorginstellingNaam) => {
    this.setState({zorginstellingNaam: zorginstellingNaam.target.value});
  }

  handleZorginstellingAdresregel = (zorginstellingAdresregel) => {
    this.setState({zorginstellingAdresregel: zorginstellingAdresregel.target.value});
  }

  handleZorginstellingPostcode = (zorginstellingPostcode) => {
    this.setState({zorginstellingPostcode: zorginstellingPostcode.target.value});
  }

  handleZorginstellingPlaats = (zorginstellingPlaats) => {
    this.setState({zorginstellingPlaats: zorginstellingPlaats.target.value});
  }

  handleZorginstellingEmail = (zorginstellingEmail) => {
    this.setState({zorginstellingEmail: zorginstellingEmail.target.value});
  }

  handleZorginstellingWachtwoord = (zorginstellingWachtwoord) => {
    this.setState({zorginstellingWachtwoord: zorginstellingWachtwoord.target.value});
  }

  handleAddZorginstelling = () => {
    let {
      zorginstellingNaam,
      zorginstellingAdresregel,
      zorginstellingPostcode,
      zorginstellingPlaats,
      zorginstellingEmail,
      zorginstellingWachtwoord
    } = this.state;

    let data = {
      naam: zorginstellingNaam,
      adres: zorginstellingAdresregel,
      postcode: zorginstellingPostcode,
      plaats: zorginstellingPlaats,
      email: zorginstellingEmail,
      wachtwoord: zorginstellingWachtwoord
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
              <Label for="zorginstelling_naam">Naam:</Label>
              <Input type="text" name="zorginstelling_naam" id="zorginstelling_naam" placeholder="Type de naam van de zorginstelling" onChange={this.handleZorginstellingNaam}/>
            </FormGroup>
            <FormGroup>
              <Label for="zorginstelling_adresregel">Adres:</Label>
              <Input type="text" name="zorginstelling_adresregel" id="zorginstelling_adresregel" placeholder="Type het adres van de zorginstelling" onChange={this.handleZorginstellingAdresregel}/>
            </FormGroup>
            <FormGroup>
              <Label for="zorginstelling_postcode">Postcode:</Label>
              <Input type="text" name="zorginstelling_postcode" id="zorginstelling_postcode" placeholder="Type de postcode van de zorginstelling" onChange={this.handleZorginstellingPostcode}/>
            </FormGroup>
            <FormGroup>
              <Label for="zorginstelling_plaats">Plaats:</Label>
              <Input type="text" name="zorginstelling_plaats" id="zorginstelling_plaats" placeholder="Type de plaats van de zorginstelling" onChange={this.handleZorginstellingPlaats}/>
            </FormGroup>
          </Col>
          <Col md="4">
            <h5>Accountgegevens</h5>
            <FormGroup>
              <Label for="zorginstelling_email">Email:</Label>
              <Input type="email" name="zorginstelling_email" id="zorginstelling_email" placeholder="Zorginstelling email" onChange={this.handleZorginstellingEmail}/>
            </FormGroup>
            <FormGroup>
              <Label for="zorginstelling_email">Wachtwoord:</Label>
              <Input type="password" name="zorginstelling_wachtwoord" id="zorginstelling_wachtwoord" placeholder="Zorginstelling wachtwoord" onChange={this.handleZorginstellingWachtwoord}/>
            </FormGroup>
          </Col>
        </Row>
      </Form>
      <Button onClick={this.handleAddZorginstelling} color="primary" className="crud-btn">Toevoegen</Button>
    </div>);
  }
}
