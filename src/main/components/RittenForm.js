/**
 * React related imports
 */
import React from 'react';
import Select from 'react-select';
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
 * Endpoints import
 */
import {
  getAllClients
} from '../CRUD/Client';

import {
  getAllChauffeurs
} from '../CRUD/Chauffeur';

import {
  getAllUtilities
} from '../CRUD/Utilities';

import {
  createRide
} from '../CRUD/Ride';

/**
 * This class takes care of rendering the ritten form and manages its state
 */
export default class RittenForm extends React.Component {

  /**
   * Makes GET requests to get all clients, chauffeurs and utilities when component is mounted
   */
  componentDidMount() {
    getAllClients(this.props).then((res) => {res !== undefined && this.fillClientList(res.data)});
    getAllChauffeurs(this.props).then((res) => {res !== undefined && this.fillDriverList(res.data)});
    getAllUtilities(this.props).then((res) => {res !== undefined && this.fillUtilityList(res.data)});
  }

  /**
   * Setups all the data.
   * @constructor
   * @param {props} props - The given properties by the superclass
   */
  constructor(props) {
    super(props);
    this.state = {
      clientId: null,
      driverId: null,
      ophaalDatum: "",
      ophaalTijd: "",
      ophaalLocatie: "",
      eindbestemming: "",
      aantalPersonen: 0,
      retour: 0,
      vasteRit: 0,
      belService: 0,
      aantalBagagestukken: 0,
      utilities: null,
      error: "",
      success: "",
      clientenLijst: [],
      chauffeurLijst: [],
      utilityLijst: [],
      removed: false
    }
  }

  /**
   * Fills the list of clients from the given data to display it in the select field
   * @param {object} data - result of the getAllClients endpoint
   */
  fillClientList = (data) => {
    let clientenLijst = [];
    for(let i=0; i<data.length; i++){
      clientenLijst.push({value: data[i].clientId, label: data[i].name, state: 'clientId'});
    }
    this.setState({clientenLijst})
  }

  /**
   * Fills the list of drivers from the given data to display it in the select field
   * @param {object} data - result of the getAllChauffeurs endpoint
   */
  fillDriverList = (data) => {
    let chauffeurLijst = [];
    for(let i=0; i<data.length; i++){
      chauffeurLijst.push({value: data[i].id, label: data[i].name, state: 'chauffeurId'});
    }
    this.setState({chauffeurLijst});
  }

  /**
   * Fills the list of utilities from the given data to display it in the select field
   * @param {object} data - result of the getAllUtilities endpoint
   */
  fillUtilityList = (data) => {
    let utilityLijst = [];
    for(let i=0; i<data.length; i++){
      utilityLijst.push({value: data[i].utility, label: data[i].utility, state: 'utilities'});
    }
    this.setState({utilityLijst});
  }

  /**
   * Makes the POST request to the server
   * @param {object} data - the data that needs to be posted
   */
  handleAddRide = (data) => {
    createRide(data)
    .then((res) => this.setState({success: `Rit succesvol opgeslagen`, error: false}))
    .catch((err) => this.setState({error: err.message, success: false}));
  }

  /**
   * Fills the state with data from the form
   * @param {String} selectedOption - The data that needs to be added to the state
   */
  handleSelect = (selectedOption) => {
    this.setState({
      [selectedOption.state]: selectedOption.value
    });
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
   * Converts a date + time to a Unix timestamp
   * @param {date} date - date from a HTML form
   * @param {time} time - time from a HTML form
   */
  dateTimeFormatter = (date, time) => {
    const dateTime = new Date(`${date}T${time}:00Z`).getTime();
    const timestamp = Math.floor(dateTime / 1000);
    return timestamp;
  }

  /**
   * Makes the POST object ready so it can be send
   */
  handleRit = () => {
    let data = {
      "clientId": this.state.clientId,
      "driverId": this.state.chauffeurId,
      "date": this.dateTimeFormatter(this.state.ophaalDatum, this.state.ophaalTijd),
      "pickUpLocation": this.state.ophaalLocatie,
      "dropOffLocation": this.state.eindbestemming,
      "numberOfcompanions": this.state.aantalPersonen,
      "numberOfLuggage": this.state.aantalBagagestukken,
      "UtilityEntity": {name: this.state.utilities},
      "returnRide": this.state.retour,
      "callService": this.state.belService,
      "fixedRide": this.state.vasteRit
    }
    this.handleAddRide(data);
  }

  /**
   * Renders the view for the user
   */
  render() {
    return (
      <div>
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
            <Col md="6">
              <FormGroup>
                <Label for="clientNaam">Naam cliënt:</Label>
                <Select placeholder="Selecteer cliënt" name="clientNaam" value={this.state.clientId} onChange={this.handleSelect} options={this.state.clientenLijst} />
              </FormGroup>
              {/* {ophaaldatetime hier} */}
              <FormGroup>
                <Label for="ophaalLocatie">Van:</Label>
                <Input value={this.state.removed ? "" : this.state.ophaalLocatie} type="text" name="ophaalLocatie"
                  placeholder="Type adres" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="eindbestemming">Naar:</Label>
                <Input value={this.state.removed ? "" : this.state.eindbestemming} type="text" name="eindbestemming"
                  placeholder="Type adres" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>

              <FormGroup>
                <Label for="ophaalDatum">Datum:</Label>
                <Input type="date" name="ophaalDatum"
                  placeholder="Selecteer datum" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="ophaalTijd">Tijd:</Label>
                <Input type="time" name="ophaalTijd"
                  placeholder="Selecteer tijd" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="aantalPersonen">Aantal personen die de cliënt meeneemt:</Label>
                <Input value={this.state.removed ? "" : this.state.aantalPersonen} type="number" name="aantalPersonen"
                  placeholder="Selecteer het aantal personen" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
            <Col md="6">

              <FormGroup>
                <Label for="aantalBagagestukken">Aantal bagagestukken die meegenomen worden:</Label>
                <Input value={this.state.removed ? "" : this.state.aantalBagagestukken} type="number" name="aantalBagagestukken"
                  placeholder="Selecteer het aantal bagagestukken" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="utilities">Bijzondere items die worden meegenomen:</Label>
                <Select placeholder="Bijzondere items" name="utilities" value={this.state.utilities} onChange={this.handleSelect} options={this.state.utilityLijst} />
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurNaam">Chauffeur die de rit gaat uitvoeren:</Label>
                <Select placeholder="Selecteer chauffeur" name="chauffeurNaam" value={this.state.chauffeurId} onChange={this.handleSelect} options={this.state.chauffeurLijst} />
              </FormGroup>
              <FormGroup>
                <Label for="retour">Retour?</Label>
                <Select placeholder="Selecteer 'ja' of 'nee'" name="retour" value={this.state.retour} onChange={this.handleSelect}
                  options={[
                    { value: 1, label: 'Ja', state: 'retour'},
                    { value: 0, label: 'Nee', state: 'retour'}
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Label for="vasteRit">Vate rit?</Label>
                <Select placeholder="Selecteer 'ja' of 'nee'" name="vasteRit" value={this.state.vasteRit} onChange={this.handleSelect}
                  options={[
                    { value: 1, label: 'Ja', state: 'vasteRit'},
                    { value: 0, label: 'Nee', state: 'vasteRit'}
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Label for="belService">Belservice?</Label>
                <Select placeholder="Selecteer 'ja' of 'nee'" name="belService" value={this.state.belService} onChange={this.handleSelect}
                  options={[
                    { value: 1, label: 'Ja', state: 'belService'},
                    { value: 0, label: 'Nee', state: 'belService'}
                  ]}
                />
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Button disabled={this.state.removed} onClick={this.handleRit} color="primary" className="crud-btn">
          {this.props.update ? <span>Bewerken</span> : <span>Rit toevoegen</span>}
        </Button>
      </div>
    )
  }
}
