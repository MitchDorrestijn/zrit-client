import React from 'react';
import {Col, Form, FormGroup, Label, Input, Row, Button} from 'reactstrap';

//this stateless functional component renders the textblock
export default class ZorginstellingForm extends React.Component {

addZorginstelling = () => {
  console.log("api call");
}

  render() {
    return (<div>
      <Form>
        <Row>
        <Col md="4">
          <h5>Plaatsgegevens</h5>
          <FormGroup>
            <Label for="zorginstelling_naam">Naam:</Label>
            <Input type="text" name="zorginstelling_naam" id="zorginstelling_naam" placeholder="Type de naam van de zorginstelling" value=""/>
          </FormGroup>
          <FormGroup>
            <Label for="zorginstelling_adresregel">Adres:</Label>
            <Input type="text" name="zorginstelling_adresregel" id="zorginstelling_adresregel" placeholder="Type het adres van de zorginstelling" value=""/>
          </FormGroup>
          <FormGroup>
            <Label for="zorginstelling_postcode">Postcode:</Label>
            <Input type="text" name="zorginstelling_postcode" id="zorginstelling_postcode" placeholder="Type de postcode van de zorginstelling" value=""/>
          </FormGroup>
          <FormGroup>
            <Label for="zorginstelling_plaats">Plaats:</Label>
            <Input type="text" name="zorginstelling_plaats" id="zorginstelling_plaats" placeholder="Type de plaats van de zorginstelling" value=""/>
          </FormGroup>
        </Col>
        <Col md="4">
          <h5>Accountgegevens</h5>
          <FormGroup>
            <Label for="zorginstelling_email">Email:</Label>
            <Input type="email" name="zorginstelling_email" id="zorginstelling_email" placeholder="Zorginstelling email" value=""/>
          </FormGroup>
          <FormGroup>
            <Label for="zorginstelling_email">Wachtwoord:</Label>
            <Input type="password" name="zorginstelling_wachtwoord" id="zorginstelling_wachtwoord" placeholder="Zorginstelling wachtwoord" value=""/>
          </FormGroup>
        </Col>
      </Row>
      </Form>
      <Button onClick={this.addZorginstelling} color="primary" className='crud-btn'>Toevoegen</Button>
    </div>);
  }
}
