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
  getSpecificClient,
  deleteClient,
  updateClient,
  createClient
} from '../CRUD/Client';

/**
 * Style related imports
 */
import '../css/zorginstellingForm.css';
import 'react-select/dist/react-select.css';

/**
 * This class takes care of rendering the client form and manages its state
 */
export default class ClientForm extends React.Component {

  /**
   * is fired when the component did mount and makes it ready to do a PUT request to get all current data (if any)
   */
  componentDidMount() {
    if (this.props.update) {
      getSpecificClient(this.props)
      .then((res) => this.setState({
        clientNaam: res.data.name,
        clientGeboortedatum: res.data.dateOfBirth,
        clientStraatEnHuisnummer: res.data.street,
        clientPostcode: res.data.zipcode,
        clientWoonplaats: res.data.residence,
        clientEmail: res.data.email,
        clientTelefoon: res.data.phone,
        clientBanknr: res.data.bank,
        clientWachtwoord: res.data.password,
        clientBegeleiderVerplicht: res.data.begeleider,
        clientBeperkingen: res.data.disabilities,
        clientBuget: res.data.pkb
      }))
      .catch((err) => this.setState({error: err.message, success: false}));
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
      clientNaam: "",
      clientGeboortedatum: "",
      clientStraatEnHuisnummer: "",
      clientPostcode: "",
      clientWoonplaats: "",
      clientEmail: "",
      clientTelefoon: "",
      clientBanknr: "",
      clientWachtwoord: "",
      clientBegeleiderVerplicht: "",
      clientBeperkingen: [],
      clientBuget: "",
      removed: false,
      success: false,
      error: false
    }
  }

  /**
 * Makes the DELETE request ready
 */
  handleRemoveClient = () => {
    deleteClient(this.props)
    .then((res) => this.setState({success: "Client succesvol verwijderd", error: false, removed: true}))
    .catch((err) => this.setState({error: err.message, success: false}));
  }

  /**
 * Makes the PUT request ready
 * @param {string} data - New name of the client
 */
  handleUpdateClient = (data) => {
    updateClient(this.props, data)
    .then((res) => this.setState({success: `Naam cliënt gewijzigd naar ${res.data.name}`, error: false}))
    .catch((err) => this.setState({error: err.message, success: false}));
  }

  /**
 * Makes the POST request ready
 * @param {string} data - Name of the client
 */
  handleAddClient = (data) => {
    console.log(data);
    createClient(data)
    .then((res) => this.setState({success: `cliënt ${data.name} succesvol toegevoegd`, error: false}))
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

  handleSelect = (selectedOption) => {
    this.setState({ [selectedOption.state]: selectedOption.value });
  }

  handleClientBeperkingenSelect = (selectedOption) => {
    let arr = selectedOption.split(',');
    this.setState({ clientBeperkingen: arr});
  }

  /**
   * Makes the POST or PUT request ready
   */
  handleClient = () => {
    let data = {
      clientNaam: this.state.clientNaam,
      clientGeboortedatum: this.state.clientGeboortedatum,
      clientStraatEnHuisnummer: this.state.clientStraatEnHuisnummer,
      clientPostcode: this.state.clientPostcode,
      clientWoonplaats: this.state.clientWoonplaats,
      clientEmail: this.state.clientEmail,
      clientTelefoon: this.state.clientTelefoon,
      clientBanknr: this.state.clientBanknr,
      clientWachtwoord: this.state.clientWachtwoord,
      clientBegeleiderVerplicht: this.state.clientBegeleiderVerplicht,
      clientBeperkingen: this.state.clientBeperkingen,
      clientBuget: this.state.clientBuget
    }
    if(this.props.update) {
      this.handleUpdateClient(data);
    } else {
      this.handleAddClient(data);
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
              <FormGroup>
                <Label for="clientNaam">Naam:</Label>
                <Input value={this.state.removed ? "" : this.state.clientNaam} type="text" name="clientNaam"
                  placeholder="Naam van de cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientGeboortedatum">Geboortedatum:</Label>
                <Input value={this.state.removed ? "" : this.state.clientGeboortedatum} type="date" name="clientGeboortedatum"
                  placeholder="Geboortedatum van de cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientStraatEnHuisnummer">Straat + huisnummer:</Label>
                <Input value={this.state.removed ? "" : this.state.clientStraatEnHuisnummer} type="text" name="clientStraatEnHuisnummer"
                  placeholder="Straat en huisnummer van de cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientPostcode">Postcode:</Label>
                <Input value={this.state.removed ? "" : this.state.clientPostcode} type="text" name="clientPostcode"
                  placeholder="Postcode van de cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientWoonplaats">Woonplaats:</Label>
                <Input value={this.state.removed ? "" : this.state.clientWoonplaats} type="text" name="clientWoonplaats"
                  placeholder="Woonplaats van de cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label for="clientEmail">Email:</Label>
                <Input value={this.state.removed ? "" : this.state.clientEmail} type="text" name="clientEmail"
                  placeholder="Email van de cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientTelefoon">Telefoon:</Label>
                <Input value={this.state.removed ? "" : this.state.clientTelefoon} type="text" name="clientTelefoon"
                  placeholder="Telefoonnummer van de cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientBanknr">Bankrekeningnummer:</Label>
                <Input value={this.state.removed ? "" : this.state.clientBanknr} type="text" name="clientBanknr"
                  placeholder="Bankrekeningnummer van de cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientWachtwoord">Wachtwoord:</Label>
                <Input value={this.state.removed ? "" : this.state.clientWachtwoord} type="password" name="clientWachtwoord"
                  onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientWachtwoord2">Herhaal wachtwoord:</Label>
                <Input value={this.state.removed ? "" : this.state.clientWachtwoord2} type="password" name="clientWachtwoord2"
                  onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>

            <Col md="4">
              <FormGroup>
                <Label for="clientBegeleiderVerplicht">Begeleider verplicht:</Label>
                <Select name="clientBegeleiderVerplicht" value={this.state.clientBegeleiderVerplicht} onChange={this.handleSelect}
                  options={[
                    { value: 'ja', label: 'Ja', state: 'clientBegeleiderVerplicht'},
                    { value: 'nee', label: 'Nee', state: 'clientBegeleiderVerplicht'}
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Label for="clientBeperkingen">Beperkingen:</Label>
                <Select multi simpleValue name="clientBeperkingen" value={this.state.clientBeperkingen} onChange={this.handleClientBeperkingenSelect}
                  options={[
                    { value: 'geestelijke_handicap', label: 'Geestelijke handicap', state: 'clientBeperkingen'},
                    { value: 'zware_fysieke_handicap', label: 'Zware/fysieke handicap', state: 'clientBeperkingen'},
                    { value: 'oudere', label: 'Oudere', state: 'clientBeperkingen'},
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Label for="clientBuget">Persoonlijk km buget:</Label>
                <Input value={this.state.removed ? "" : this.state.clientBuget} type="text" name="clientBuget"
                  placeholder="Persoonlijk km buget van de cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Button disabled={this.state.removed} onClick={this.handleClient} color="primary" className="crud-btn">
          {this.props.update ? <span>Bewerken</span> : <span>Toevoegen</span>}
        </Button>
        {this.props.update &&
          <Button onClick={this.handleRemoveClient} color="primary" className="crud-btn">
            Verwijder client
          </Button>}
      </div>
    );
  }
}
