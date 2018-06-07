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
  getSpecificChauffeur,
  deleteChauffeur,
  updateChauffeur,
  createChauffeur
} from '../CRUD/Chauffeur';

import {
  getAllLimitations
} from '../CRUD/Limitation';

import {
  getAllZorginstellingen
} from '../CRUD/Zorginstelling';

/**
 * Style related imports
 */
import '../css/form.css';
import 'react-select/dist/react-select.css';

/**
 * This class takes care of rendering the client form and manages its state
 */
export default class ChauffeurForm extends React.Component {

  /**
   * is fired when the component did mount and makes it ready to do a PUT request to get all current data (if any)
   */
  componentDidMount() {
    this.getAllLimitations();
    this.getAllZorginstellingen();
    if (this.props.update) {
      this.getASpecificChauffeur();
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
      chauffeurVoornaam: "",
      chauffeurAchternaam: "",
      chauffeurGeboortedatum: "",
      chauffeurVOG: "",
      chauffeurTelefoon: "",
      chauffeurEmail: "",
      chauffeurBanknr: "",
      chauffeurWachtwoord: "",
      chauffeurWachtwoord2: "",
      chauffeurDoel: "",
      chauffeurOmgaan: [],
      chauffeurKenteken: "",
      chauffeurAutoMaxPersonen: 0,
      chauffeurAutoSegment: "",
      chauffeurImage: "",
      chauffeurAutoMerk: "",
      chauffeurAutoGeschiktVoor: "",
      limitations: [],
      zorginstellingen: [],
      removed: false,
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
              state: 'chauffeurDoel'
            });
          }
          this.setState({zorginstellingen});
        }
      })
    );
  }

  /**
 * Makes the GET request to get a specific chauffeur and updates the state
 */
  getASpecificChauffeur = () => {
    return (
      getSpecificChauffeur(this.props)
      .then((res) => this.setState({
        chauffeurVoornaam: res.data.driver.userEntity.firstName,
        chauffeurAchternaam: res.data.driver.userEntity.lastName,
        chauffeurGeboortedatum: res.data.driver.userEntity.dateOfBirth,
        chauffeurVOG: res.data.driver.verification === 0 ? "nee" : "ja",
        chauffeurTelefoon: res.data.driver.userEntity.phoneNumber,
        chauffeurEmail: res.data.driver.userEntity.email,
        chauffeurBanknr: res.data.driver.accountnr,
        chauffeurWachtwoord: res.data.driver.userEntity.password,
        chauffeurDoel: res.data.careInstitutionId,
        chauffeurOmgaan: res.data.limitationEntities,
        chauffeurKenteken: res.data.drivercarEntity.numberPlate,
        chauffeurAutoMaxPersonen: res.data.drivercarEntity.numberOfPassengers,
        chauffeurAutoSegment: res.data.drivercarEntity.segment,
        chauffeurAutoMerk: res.data.drivercarEntity.brand,
        chauffeurImage: res.data.driver.image === "" ? "" : res.data.driver.image,
        chauffeurAutoGeschiktVoor: res.data.drivercarEntity.utility
      }))
      .catch((err) => this.setState({error: err.message, success: false}))
    );
  }

  /**
 * Makes the GET all limitations request and updates the state
 */
  getAllLimitations = () => {
    return (
      getAllLimitations(this.props)
      .then((res) => {
        let limitations = [];
        for(let i=0; i<res.data.length; i++){
          limitations.push({
            value: res.data[i].name,
            label: res.data[i].name,
            state: 'chauffeurOmgaan'
          });
        }
        this.setState({limitations});
      })
    )
  }

  /**
 * Makes the DELETE request ready
 */
  handleRemoveChauffeur = () => {
    deleteChauffeur(this.props)
    .then((res) => this.setState({success: "Chauffeur succesvol verwijderd", error: false, removed: true}))
    .catch((err) => this.setState({error: err.message, success: false}));
  }

  /**
 * Makes the PUT request ready
 * @param {string} data - New name of the chauffeur
 */
  handleUpdateChauffeur = (data) => {
    updateChauffeur(this.props, data)
    .then((res) => this.setState({success: "Gegevens chauffeur succesvol gewijzigd", error: false}))
    .catch((err) => this.setState({error: err.message, success: false}));
  }

  /**
 * Makes the POST request ready
 * @param {string} data - Name of the chauffeur
 */
  handleAddChauffeur = (data) => {
    createChauffeur(data)
    .then((res) => this.setState({success: `Chauffeur ${data.driver.userEntity.firstName} succesvol toegevoegd`, error: false}))
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
   * Fills the chauffeurOmgaan array in the state with privileges
   * @param {String} selectedOption - The privilege that needs to be added to the state
   */
  handleChauffeurOmgaanSelect = (selectedOption) => {
    let arr = selectedOption.split(',');
    this.setState({chauffeurOmgaan: arr});
  }

  /**
   * Converts uploaded file to a base64 String and adds it to the state
   * @param {Object} files - Object that holds the meta data of the uploaded file
   */
  onDrop = (files) => {
    var file = files[0]
    const reader = new FileReader();
    reader.onload = (event) => {
      this.setState({chauffeurImage: event.target.result});
    };
    reader.readAsDataURL(file);
  }

  /**
   * Makes the POST or PUT request ready
   */
  handleChauffeur = () => {
    let data = {
      driver: {
          verification: this.state.chauffeurVOG === "ja" ? 1 : 0,
          userEntity: {
              firstName: this.state.chauffeurVoornaam,
              lastName: this.state.chauffeurAchternaam,
              email: this.state.chauffeurEmail,
              phoneNumber: this.state.chauffeurTelefoon,
              passwordSalt: this.state.chauffeurWachtwoord,
              dateOfBirth: this.state.chauffeurGeboortedatum
          },
          image: this.state.chauffeurImage,
          accountnr: this.state.chauffeurBanknr
      },
      drivercarEntity: {
          utility: this.state.chauffeurAutoGeschiktVoor,
          numberPlate: this.state.chauffeurKenteken,
          numberOfPassengers: this.state.chauffeurAutoMaxPersonen,
          segment: this.state.chauffeurAutoSegment,
          brand: this.state.chauffeurAutoMerk
      },
      careInstitutionId: this.state.chauffeurDoel,
      limitationEntities: this.state.chauffeurOmgaan,
      active: 1
    }

    if(data.driver.userEntity.passwordSalt === this.state.chauffeurWachtwoord2) {
      if(this.props.update) {
        data.driver.driverId = this.props.id;
        data.driver.typeOfPayment = "Vrijwillig";
        data.driver.userEntity.id = this.props.id;
        data.driver.userEntity.password = this.state.chauffeurWachtwoord;
        data.drivercarEntity.driverId = this.props.id;
        this.handleUpdateChauffeur(data);
      } else {
        this.handleAddChauffeur(data);
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
              {this.state.chauffeurImage ?
                <div><img className='img-preview' src={this.state.chauffeurImage} alt='Chauffeur-afbeelding' /></div> :
                <small>Nog geen afbeelding geupload.</small>
              }
            </Col>
            <Col md="3">
              <h5>Persoonlijke info</h5>
              <FormGroup>
                <Label for="chauffeurVoornaam">Voornaam:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurVoornaam} type="text" name="chauffeurVoornaam"
                  placeholder="Voornaam chauffeur" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurActerNaam">Achternaam:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurAchternaam} type="text" name="chauffeurAchternaam"
                  placeholder="Achternaam chauffeur" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurGeboortedatum">Geboortedatum:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurGeboortedatum} type="date" name="chauffeurGeboortedatum"
                  placeholder="Geboortedatum chauffeur" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurVOG">In het bezit van een VOG:</Label>
                <Select placeholder="VOG" name="chauffeurVOG" value={this.state.chauffeurVOG} onChange={this.handleSelect}
                  options={[
                    { value: 'ja', label: 'Ja', state: 'chauffeurVOG'},
                    { value: 'nee', label: 'Nee', state: 'chauffeurVOG'}
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurDoel">Organisatie:</Label>
                <Select placeholder="Doel chauffeur" name="chauffeurDoel" value={this.state.chauffeurDoel} onChange={this.handleSelect}
                  options={this.state.zorginstellingen}
                />
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurOmgaan">Mag omgaan met:</Label>
                <Select placeholder="Mag omgaan met" multi simpleValue name="chauffeurOmgaan" value={this.state.chauffeurOmgaan} onChange={this.handleChauffeurOmgaanSelect}
                  options={this.state.limitations}
                />
              </FormGroup>
            </Col>
            <Col md="3">
              <h5>Contactgegevens</h5>
              <FormGroup>
                <Label for="chauffeurTelefoon">Telefoon:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurTelefoon} type="text" name="chauffeurTelefoon"
                  placeholder="Telefoon chauffeur" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurEmail">Email:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurEmail} type="text" name="chauffeurEmail"
                  placeholder="Email chauffeur" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurBanknr">Bankrekeningnummer:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurBanknr} type="text" name="chauffeurBanknr"
                  placeholder="Bankrekening chauffeur" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurWachtwoord">Wachtwoord:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurWachtwoord} type="password" name="chauffeurWachtwoord"
                  placeholder="Wachtwoord chauffeur" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurWachtwoord2">Herhaal wachtwoord:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurWachtwoord2} type="password" name="chauffeurWachtwoord2"
                  placeholder="Wachtwoord chauffeur herhaling" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
            <Col md="3">
              <h5>Auto informatie</h5>
              <FormGroup>
                <Label for="chauffeurKenteken">Kenteken auto:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurKenteken} type="text" name="chauffeurKenteken"
                  placeholder="Kenteken auto chauffeur" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurAutoMaxPersonen">Max. personen in auto:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurAutoMaxPersonen} type="number" name="chauffeurAutoMaxPersonen"
                  placeholder="Max. personen in auto" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurAutoSegment">Segment:</Label>
                <Select placeholder="Segment auto" name="chauffeurAutoSegment" value={this.state.chauffeurAutoSegment} onChange={this.handleSelect}
                  options={[
                    { value: 'A', label: 'A', state: 'chauffeurAutoSegment'},
                    { value: 'B', label: 'B', state: 'chauffeurAutoSegment'},
                    { value: 'C', label: 'C', state: 'chauffeurAutoSegment'}
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurAutoGeschiktVoor">Auto geschikt voor:</Label>
                <Select placeholder="Geschikt voor..." name="chauffeurAutoGeschiktVoor" value={this.state.chauffeurAutoGeschiktVoor} onChange={this.handleSelect}
                  options={[
                    { value: 'rolstoel', label: 'Rolstoel', state: 'chauffeurAutoGeschiktVoor'},
                    { value: 'rollator', label: 'Rollator', state: 'chauffeurAutoGeschiktVoor'},
                    { value: 'scootmobiel', label: 'Scootmobiel', state: 'chauffeurAutoGeschiktVoor'}
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurAutoMerk">Merk auto:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurAutoMerk} type="text" name="chauffeurAutoMerk"
                  placeholder="Merk auto" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Button disabled={this.state.removed} onClick={this.handleChauffeur} color="primary" className="crud-btn">
          {this.props.update ? <span>Bewerken</span> : <span>Chauffeur toevoegen</span>}
        </Button>
        {this.props.update &&
          <Button onClick={this.handleRemoveChauffeur} color="primary" className="crud-btn">
            Verwijder chauffeur
          </Button>}
      </div>
    );
  }
}
