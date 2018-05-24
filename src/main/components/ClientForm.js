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
import Dropzone from 'react-dropzone';

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
import '../css/form.css';
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
      .then((res) => {
        this.setState({
          clientVoornaam: res.data.client.userEntity.firstName,
          clientAchternaam: res.data.client.userEntity.lastName,
          clientGeboortedatum: res.data.client.userEntity.dateOfBirth,
          clientStraatEnHuisnummer: res.data.client.userEntity.street + res.data.client.userEntity.houseNumber,
          clientPostcode: res.data.client.userEntity.zipCode,
          clientWoonplaats: res.data.client.userEntity.residence,
          clientEmail: res.data.client.userEntity.email,
          clientTelefoon: res.data.client.userEntity.phoneNumber,
          clientBanknr: res.data.client.bankAccount,
          clientWachtwoord: res.data.client.userEntity.password,
          clientBegeleiderVerplicht: res.data.client.companionRequired === 1 ? 'ja' : 'nee',
          clientBeperkingen: this.arraymaker(res.data.limitations),
          clientBuget: res.data.client.pkb,
          clientImage: res.data.client.image
        })
      })
      // .catch((err) => this.setState({error: err.message, success: false}));
      .catch((err) => console.log(err));
    }
  }

  arraymaker = (data) => {
    let newarr = [];
    for(let i=0; i<data.length; i++){
      newarr.push({ value: data[i], label: data[i], state: 'clientBeperkingen'})
    }
    return newarr;
  }

  /**
   * Setups all the data.
   * @constructor
   * @param {props} props - The given properties by the superclass
   */
  constructor(props) {
    super(props);
    this.state = {
      clientVoornaam: "",
      clientAchternaam: "",
      clientGeboortedatum: "",
      clientStraatEnHuisnummer: "",
      clientPostcode: "",
      clientWoonplaats: "",
      clientEmail: "",
      clientTelefoon: "",
      clientBanknr: "",
      clientWachtwoord: "",
      clientWachtwoord2: "",
      clientBegeleiderVerplicht: "",
      clientBeperkingen: [],
      clientBuget: "",
      clientImage: "",
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

  /**
   * Fills the state with data from the form
   * @param {String} selectedOption - The data that needs to be added to the state
   */
  handleSelect = (selectedOption) => {
    this.setState({ [selectedOption.state]: selectedOption.value });
  }

  /**
   * Fills the clientBeperkingen array in the state with beperkingen
   * @param {String} selectedOption - The beperking that needs to be added to the state
   */
  handleClientBeperkingenSelect = (selectedOption) => {
    let arr = selectedOption.split(',');
    this.setState({clientBeperkingen: arr});
  }

  /**
   * Converts uploaded file to a base64 String
   * @param {Object} files - Object that holds the meta data of the uploaded file
   */
  onDrop = (files) => {
    var file = files[0]
    const reader = new FileReader();
    reader.onload = (event) => {
      this.setState({clientImage: event.target.result});
    };
    reader.readAsDataURL(file);
  }

  /**
   * Makes the POST or PUT request ready
   */
  handleClient = () => {
    // let data = {
    //   clientVoornaam: this.state.clientVoornaam,
    //   clientAchternaam: this.state.clientAchternaam,
    //   clientGeboortedatum: this.state.clientGeboortedatum,
    //   clientStraatEnHuisnummer: this.state.clientStraatEnHuisnummer,
    //   clientPostcode: this.state.clientPostcode,
    //   clientWoonplaats: this.state.clientWoonplaats,
    //   clientEmail: this.state.clientEmail,
    //   clientTelefoon: this.state.clientTelefoon,
    //   clientBanknr: this.state.clientBanknr,
    //   clientWachtwoord: this.state.clientWachtwoord,
    //   clientBegeleiderVerplicht: this.state.clientBegeleiderVerplicht,
    //   clientBeperkingen: this.state.clientBeperkingen,
    //   clientBuget: this.state.clientBuget,
    //   clientImage: this.state.clientImage
    // }

    let data = {
        utility: "Wandelstok",
        clientEntity: {
            companion: "Sjon",
            driverPreferenceForced: 1,
            userEntity: {
                firstName: this.state.clientVoornaam,
                lastName: this.state.clientAchternaam,
                email: this.state.clientEmail,
                phoneNumber: this.state.clientTelefoon,
                street: this.state.clientStraatEnHuisnummer,
                houseNumber: "",
                zipCode: this.state.clientPostcode,
                residence: this.state.clientWoonplaats,
                password: this.state.clientWachtwoord,
                passwordSalt: this.state.clientWachtwoord,
                dateOfBirth: this.state.clientGeboortedatum,
                firstTimeProfileCheck: 0
            },
            warningPKB: 1,
            PBK: this.state.clientBuget,
            companionRequired: 1,
            image: this.state.clientImage,
            bankAccount: this.state.clientBanknr
        },
       limitations: this.state.clientBeperkingen,
       companionForced: this.state.clientBegeleiderVerplicht === "ja" ? 1 : 0
   }
    if(this.state.clientWachtwoord === this.state.clientWachtwoord2) {
      if(this.props.update) {
        // data.clientEntity.clientId = parseInt(this.props.id);
        // data.clientEntity.userEntity.id = parseInt(this.props.id);
        // data.limitations = [];
        // console.log(data);
        // console.log(this.props.id);
        let dataa = {
    client: {
        clientId: this.props.id,
        companion: "Sven",
        driverPreferenceForced: 0,
        companionRequired: 0,
        image: null,
        bankAccount: this.state.clientBanknr,
        userEntity: {
            id: this.props.id,
            firstName: this.state.clientVoornaam,
            lastName: this.state.clientAchternaam,
            email: this.state.clientEmail,
            phoneNumber: this.state.clientTelefoon,
            street: this.state.clientStraatEnHuisnummer,
            houseNumber: "",
            zipCode: this.state.clientPostcode,
            residence: this.state.clientWoonplaats,
            password: this.state.clientWachtwoord,
            passwordSalt: this.state.clientWachtwoord,
            dateOfBirth: this.state.clientGeboortedatum,
            firstTimeProfileCheck: 0
        },
        rideEntity: {
            id: this.props.id,
            pickUpDateTime: 1530187200000,
            pickUpLocation: "Ketelstraat 3, Arnhem",
            dropOffLocation: "Coolsingen 3, Rotterdam",
            duration: 30,
            distance: 6500,
            numberOfcompanions: 0,
            numberOfLuggage: 3,
            returnRide: 1,
            callService: 0,
            repeatingRideId: 2,
            cancelledByClient: 0,
            executed: 0,
            driverEntity: {
                driverId: 1,
                verification: 1,
                userEntity: {
                    id: 1,
                    firstName: "Wiedo",
                    lastName: "Harkema",
                    email: "Wiede@gmail.com",
                    phoneNumber: "0612345678",
                    street: "Kerkstraat",
                    houseNumber: "7",
                    zipCode: "1234GB",
                    residence: "Arnhem",
                    password: "wachtwoord",
                    passwordSalt: "abc",
                    dateOfBirth: "1995-06-23",
                    firstTimeProfileCheck: 0
                },
                image: this.state.clientImage,
                accountnr: this.state.clientBanknr,
                typeOfPayment: "Vrijwillig"
            },
            price_of_ride: 25.4
        },
        pkb: this.state.clientBuget
    },
    limitations: this.state.clientBeperkingen
}


        this.handleUpdateClient(dataa);
      } else {
        this.handleAddClient(data);
      }
    } else {
      this.setState({error: "Wachtwoorden niet gelijk of leeg!", success: false});
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
            <Col md="3">
              <span className="img-header">Kopie paspoort / ID bewijs:</span>
              <Dropzone className="dropzone" accept="image/jpeg, image/png, image/jpg" onDrop={files => this.onDrop(files)}
               multiple={false}>
                <p>Upload hier uw afbeelding (JPEG/PNG/JPG)</p>
              </Dropzone><br />
              <span>Voorvertoning bestand:</span><br />
              {this.state.clientImage ?
                <div><img className='img-preview' src={this.state.clientImage} alt='Client-afbeelding' /></div> :
                <small>Nog geen afbeelding geupload.</small>
              }
            </Col>
            <Col md="3">
              <FormGroup>
                <Label for="clientVoornaam">Voornaam:</Label>
                <Input value={this.state.removed ? "" : this.state.clientVoornaam} type="text" name="clientVoornaam"
                  placeholder="Voornaam cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientAchternaam">Achternaam:</Label>
                <Input value={this.state.removed ? "" : this.state.clientAchternaam} type="text" name="clientAchternaam"
                  placeholder="Achternaam cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientGeboortedatum">Geboortedatum:</Label>
                <Input value={this.state.removed ? "" : this.state.clientGeboortedatum} type="date" name="clientGeboortedatum"
                  placeholder="Geboortedatum cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientStraatEnHuisnummer">Straat + huisnummer:</Label>
                <Input value={this.state.removed ? "" : this.state.clientStraatEnHuisnummer} type="text" name="clientStraatEnHuisnummer"
                  placeholder="Straat+huisnummer cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientPostcode">Postcode:</Label>
                <Input value={this.state.removed ? "" : this.state.clientPostcode} type="text" name="clientPostcode"
                  placeholder="Postcode cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientWoonplaats">Woonplaats:</Label>
                <Input value={this.state.removed ? "" : this.state.clientWoonplaats} type="text" name="clientWoonplaats"
                  placeholder="Woonplaats cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>

            <Col md="3">
              <FormGroup>
                <Label for="clientEmail">Email:</Label>
                <Input value={this.state.removed ? "" : this.state.clientEmail} type="text" name="clientEmail"
                  placeholder="Email cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientTelefoon">Telefoon:</Label>
                <Input value={this.state.removed ? "" : this.state.clientTelefoon} type="text" name="clientTelefoon"
                  placeholder="Telefoon cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientBanknr">Bankrekeningnummer:</Label>
                <Input value={this.state.removed ? "" : this.state.clientBanknr} type="text" name="clientBanknr"
                  placeholder="Bankrekening cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientWachtwoord">Wachtwoord:</Label>
                <Input value={this.state.removed ? "" : this.state.clientWachtwoord} type="password" name="clientWachtwoord"
                  placeholder="Wachtwoord cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="clientWachtwoord2">Herhaal wachtwoord:</Label>
                <Input value={this.state.removed ? "" : this.state.clientWachtwoord2} type="password" name="clientWachtwoord2"
                  placeholder="Wachtwoord cliënt herhaling" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
            <Col md="3">
              <FormGroup>
                <Label for="clientBegeleiderVerplicht">Begeleider verplicht:</Label>
                <Select placeholder="Begeleider verplicht?" name="clientBegeleiderVerplicht" value={this.state.clientBegeleiderVerplicht} onChange={this.handleSelect}
                  options={[
                    { value: 'ja', label: 'Ja', state: 'clientBegeleiderVerplicht'},
                    { value: 'nee', label: 'Nee', state: 'clientBegeleiderVerplicht'}
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Label for="clientBeperkingen">Beperkingen:</Label>
                <Select placeholder="Beperkingen cliënt" multi simpleValue name="clientBeperkingen" value={this.state.clientBeperkingen} onChange={this.handleClientBeperkingenSelect}
                  options={[
                    { value: 'geestelijke_handicap', label: 'Geestelijke handicap', state: 'clientBeperkingen'},
                    { value: 'zware_fysieke_handicap', label: 'Zware/fysieke handicap', state: 'clientBeperkingen'},
                    { value: 'oudere', label: 'Oudere', state: 'clientBeperkingen'}
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Label for="clientBuget">Persoonlijk km buget:</Label>
                <Input value={this.state.removed ? "" : this.state.clientBuget} type="number" name="clientBuget"
                  placeholder="KM buget cliënt" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Button disabled={this.state.removed} onClick={this.handleClient} color="primary" className="crud-btn">
          {this.props.update ? <span>Bewerken</span> : <span>Cliënt toevoegen</span>}
        </Button>
        {this.props.update &&
          <Button onClick={this.handleRemoveClient} color="primary" className="crud-btn">
            Verwijder client
          </Button>}
      </div>
    );
  }
}
