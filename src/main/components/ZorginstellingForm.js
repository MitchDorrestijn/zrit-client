/**
 * React related imports
 */
import React from 'react';
import axios from 'axios';
import config from '../config';
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
      axios.get(`${config.url}/zorginstelling/${this.props.id}`).then((res) => {
        this.setState({
          zorginstellingNaam: res.data.name
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
   * Makes the DELETE request ready and sends it to the server
   */
  handleRemoveZorginstelling = () => {
    axios.delete(`${config.url}/zorginstelling/${this.props.id}`).then((res) => {
      let succesFeedback = "Zorginstelling succesvol verwijderd";
      this.setState({success: succesFeedback, error: false});
    }).catch((err) => {
      this.setState({error: err.message, success: false});
    })
  }

  /**
   * Makes the POST or PUT request ready and sends it to the server
   */
  handleAddZorginstelling = () => {
    let data = {
      name: this.state.zorginstellingNaam
    }
    if(this.props.update) {
      axios.put(`${config.url}/zorginstelling/${this.props.id}/edit`, data).then((res) => {
        let succesFeedback = "Naam zorginstelling gewijzigd naar " + res.data.name;
        this.setState({success: succesFeedback, error: false});
      }).catch((err) => {
        this.setState({error: err.message, success: false});
      });
    } else {
      axios.post(`${config.url}/zorginstelling/addZorginstelling`, data).then((res) => {
        let succesFeedback = "Zorginstelling " + data.name + " succesvol toegevoegd";
        this.setState({success: succesFeedback, error: false});
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
              <h5>Zorginstellinggegevens</h5>
              <FormGroup>
                <Label for="zorginstellingNaam">Naam:</Label>
                <Input value={this.state.zorginstellingNaam} type="text" name="zorginstellingNaam"
                  placeholder="Type de naam van de zorginstelling" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
            </Col>
          </Row>
        </Form>
        <Button onClick={this.handleAddZorginstelling} color="primary" className="crud-btn">
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
