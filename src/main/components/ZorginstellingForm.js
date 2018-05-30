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

/**
 * Endpoints import
 */
import {
  getSpecificZorginstelling,
  deleteZorginstelling,
  updateZorginstelling,
  createZorginstelling
} from '../CRUD/Zorginstelling';

/**
 * Style related imports
 */
import '../css/form.css';

/**
 * This class takes care of rendering the zorginstellingen form and manages its state
 */
export default class ZorginstellingForm extends React.Component {

  /**
   * is fired when the component did mount and makes it ready to do a PUT request to get all current data (if any)
   */
  componentDidMount() {
    if (this.props.update) {
      getSpecificZorginstelling(this.props)
      .then((res) => this.setState({zorginstellingNaam: res.data.name, zorginstellingAdres: res.data.address, zorginstellingGemeente: res.data.community, zorginstellingTelefoonnummer: res.data.telephonenumber}))
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
      zorginstellingNaam: "",
      zorginstellingAdres: "",
      zorginstellingGemeente: "",
      zorginstellingTelefoonnummer: "",
      removed: false,
      success: false,
      error: false
    }
  }

  /**
 * Makes the DELETE request ready
 */
  handleRemoveZorginstelling = () => {
    deleteZorginstelling(this.props)
    .then((res) => this.setState({success: "Zorginstelling succesvol verwijderd", error: false, removed: true}))
    .catch((err) => this.setState({error: err.message, success: false}));
  }

  /**
 * Makes the PUT request ready
 * @param {string} data - New name of the zorginstelling
 */
  handleUpdateZorginstelling = (data) => {
    updateZorginstelling(this.props, data)
    .then((res) => this.setState({success: `Naam zorginstelling gewijzigd naar ${res.data.name}`, error: false}))
    .catch((err) => this.setState({error: err.message, success: false}));
  }

  /**
 * Makes the POST request ready
 * @param {string} data - Name of the zorginstelling
 */
  handleAddZorginstelling = (data) => {
    createZorginstelling(data)
    .then((res) => this.setState({success: `Zorginstelling ${data.name} succesvol toegevoegd`, error: false}))
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
   * Makes the POST or PUT request ready
   */
  handleZorginstelling = () => {
    let data = {name: this.state.zorginstellingNaam, address: this.state.zorginstellingAdres, community: this.state.zorginstellingGemeente, telephonenumber: this.state.zorginstellingTelefoonnummer}
    if(
      this.props.update) {this.handleUpdateZorginstelling(data);
    } else {
      this.handleAddZorginstelling(data);
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
              <h5>Zorginstellinggegevens</h5>
              <FormGroup>
                <Label for="zorginstellingNaam">Naam:</Label>
                <Input value={this.state.removed ? "" : this.state.zorginstellingNaam} type="text" name="zorginstellingNaam"
                  placeholder="Type de nieuwe naam van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="zorginstellingNaam">Adres:</Label>
                <Input value={this.state.removed ? "" : this.state.zorginstellingAdres} type="text" name="zorginstellingAdres"
                  placeholder="Type het nieuwe adres van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="zorginstellingNaam">Gemeente:</Label>
                <Input value={this.state.removed ? "" : this.state.zorginstellingGemeente} type="text" name="zorginstellingGemeente"
                  placeholder="Type de nieuwe gemeente van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="4">
              <FormGroup>
                <Label for="zorginstellingNaam">Telefoonnummer:</Label>
                <Input value={this.state.removed ? "" : this.state.zorginstellingTelefoonnummer} type="text" name="zorginstellingTelefoonnummer"
                  placeholder="Type het nieuwe telefoonnummer van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
          </Row>

        </Form>
        <Button disabled={this.state.removed} onClick={this.handleZorginstelling} color="primary" className="crud-btn">
          {this.props.update ? <span>Bewerken</span> : <span>Toevoegen</span>}
        </Button>
        {this.props.update &&
          <Button onClick={this.handleRemoveZorginstelling} color="primary" className="crud-btn">
            Verwijder zorginstelling
          </Button>}
      </div>
    );
  }
}
