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
    if (this.props.update) {
      getSpecificChauffeur(this.props)
      .then((res) => this.setState({
        chauffeurNaam: res.data.name,
        chauffeurGeboortedatum: res.data.dateOfBirth,
        chauffeurVOG: res.data.vog,
        chauffeurTelefoon: res.data.phone,
        chauffeurEmail: res.data.email,
        chauffeurBanknr: res.data.bank,
        chauffeurWachtwoord: res.data.password,
        chauffeurDoel: res.data.charity,
        chauffeurOmgaan: res.data.privileges,
        chauffeurKenteken: res.data.numberPlate,
        chauffeurAutoMaxPersonen: res.data.maxPersons,
        chauffeurAutoSegment: res.data.segment,
        chauffeurAutoMerk: res.data.brand,
        chauffeurImage: res.data.clientImage
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
      chauffeurNaam: "",
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
      chauffeurAutoMaxPersonen: "",
      chauffeurAutoSegment: "",
      chauffeurImage: "",
      chauffeurAutoMerk: "",
      removed: false,
      success: false,
      error: false
    }
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
    .then((res) => this.setState({success: `Chauffeur ${data.name} succesvol toegevoegd`, error: false}))
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
      chauffeurNaam: this.state.chauffeurNaam,
      chauffeurGeboortedatum: this.state.chauffeurGeboortedatum,
      chauffeurVOG: this.state.chauffeurVOG,
      chauffeurTelefoon: this.state.chauffeurTelefoon,
      chauffeurEmail: this.state.chauffeurEmail,
      chauffeurBanknr: this.state.chauffeurBanknr,
      chauffeurWachtwoord: this.state.chauffeurWachtwoord,
      chauffeurDoel: this.state.chauffeurDoel,
      chauffeurOmgaan: this.state.chauffeurOmgaan,
      chauffeurKenteken: this.state.chauffeurKenteken,
      chauffeurAutoMaxPersonen: this.state.chauffeurAutoMaxPersonen,
      chauffeurAutoSegment: this.state.chauffeurAutoSegment,
      chauffeurAutoMerk: this.state.chauffeurAutoMerk,
      chauffeurImage: this.state.chauffeurImage
    }

    if(data.chauffeurWachtwoord === this.state.chauffeurWachtwoord2) {
      if(this.props.update) {
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
              <FormGroup>
                <Label for="chauffeurNaam">Naam:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurNaam} type="text" name="chauffeurNaam"
                  placeholder="Naam chauffeur" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurGeboortedatum">Geboortedatum:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurGeboortedatum} type="text" name="chauffeurGeboortedatum"
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
            </Col>

            <Col md="3">
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
              <FormGroup>
                <Label for="chauffeurDoel">Beperkingen:</Label>
                <Select placeholder="Doel chauffeur" name="chauffeurDoel" value={this.state.chauffeurDoel} onChange={this.handleSelect}
                  options={[
                    { value: 'accolade', label: 'Accolade', state: 'chauffeurDoel'},
                    { value: 'axion_continue', label: 'Axion Continue', state: 'chauffeurDoel'},
                    { value: 'cordaan', label: 'Cordaan', state: 'chauffeurDoel'},
                    { value: 'de_zijlen', label: 'De Zijlen', state: 'chauffeurDoel'},
                    { value: 'ecr', label: 'ECR', state: 'chauffeurDoel'},
                    { value: 'ons_tweede_huis', label: 'Ons tweede huis', state: 'chauffeurDoel'},
                    { value: 'piladelphia_zorg_midden', label: 'Piladelphia zorg midden', state: 'chauffeurDoel'},
                    { value: 'raphalstichting', label: 'Raphalstichting', state: 'chauffeurDoel'},
                    { value: 'reinaerde', label: 'Reinaerde', state: 'chauffeurDoel'},
                    { value: 'stichting_de_opbouw', label: 'Stichting de opbouw', state: 'chauffeurDoel'}
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurOmgaan">Beperkingen:</Label>
                <Select placeholder="Chauffeur mag omgaan met" multi simpleValue name="chauffeurOmgaan" value={this.state.chauffeurOmgaan} onChange={this.handleChauffeurOmgaanSelect}
                  options={[
                    { value: 'geestelijke_handicap', label: 'Geestelijke handicap', state: 'chauffeurOmgaan'},
                    { value: 'zware_fysieke_handicap', label: 'Zware/fysieke handicap', state: 'chauffeurOmgaan'},
                    { value: 'oudere', label: 'Oudere', state: 'chauffeurOmgaan'}
                  ]}
                />
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurKenteken">Kenteken auto:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurKenteken} type="text" name="chauffeurKenteken"
                  placeholder="Kenteken auto chauffeur" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="chauffeurAutoMaxPersonen">Kenteken auto:</Label>
                <Input value={this.state.removed ? "" : this.state.chauffeurAutoMaxPersonen} type="text" name="chauffeurAutoMaxPersonen"
                  placeholder="Max. personen in auto chauffeur" onChange={(event) => this.handleChange(event)}/>
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
