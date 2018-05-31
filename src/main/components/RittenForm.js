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


export default class RittenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clientNaam: "",
      datumEnTijd: "",
      ophaalLocatie: "",
      eindbestemming: "",
      aantalPersonen: 0,
      retour: 0,
      vasteRit: 0,
      belService: 0,
      aantalBagagestukken: 0,
      utilities: "",
      error: "",
      success: "",
      removed: false
    }
  }

  handleSelect = (selectedOption) => {
    this.setState({
      [selectedOption.state]: selectedOption.value
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleRit = () => {
    console.log(this.state);
  }

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
                <Select placeholder="Selecteer cliënt" name="clientNaam" value={this.state.clientNaam} onChange={this.handleSelect} options={[
                    {
                      value: '1',
                      label: 'Henk Dieren',
                      state: 'clientNaam'
                    }, {
                      value: '2',
                      label: 'Jaap van Goor',
                      state: 'clientNaam'
                    }, {
                      value: '3',
                      label: 'Alliu Pakar',
                      state: 'clientNaam'
                    }
                  ]
                } />
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
                <Label for="aantalPersonen">Aantal personen die de cliënt meeneemt:</Label>
                <Input value={this.state.removed ? "" : this.state.aantalPersonen} type="number" name="aantalPersonen"
                  placeholder="Selecteer het aantal personen" onChange={(event) => this.handleChange(event)}/>
              </FormGroup>
              <FormGroup>
                <Label for="aantalBagagestukken">Aantal bagagestukken die meegenomen worden:</Label><br />
                <Input value={this.state.removed ? "" : this.state.aantalBagagestukken} type="number" name="aantalBagagestukken"
                  placeholder="Selecteer het aantal bagagestukken" onChange={(event) => this.handleChange(event)}/><br />
                <Label for="utilities">Bijzondere items die worden meegenomen:</Label>
                <Select placeholder="Bijzondere items" name="utilities" value={this.state.utilities} onChange={this.handleSelect} options={[
                    {
                      value: 'rolstoel',
                      label: 'Rolstoel',
                      state: 'utilities'
                    }, {
                      value: 'rollator',
                      label: 'Rollator',
                      state: 'utilities'
                    }, {
                      value: 'scootmobiel',
                      label: 'Scootmobiel',
                      state: 'utilities'
                    },
                    {
                      value: null,
                      label: 'Geen',
                      state: 'utilities'
                    }
                  ]
                } />
              </FormGroup>
            </Col>
            <Col md="6">
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
