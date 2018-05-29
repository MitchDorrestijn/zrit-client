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
   * Renders the view for the user
   */
  render() {
    return (
      <div>
        <Form>

          <TableHeaderColumn width="120" dataField="warning" dataSort={true} isKey={true}>
            Warning &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="120" dataField="date" dataSort={true}>
            Datum &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="120" dataField="pickupLocation" dataSort={true}>
            Ophaallocatie &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="120" dataField="dropOffLocation" dataSort={true}>
            Bestemming &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="120" dataField="driverAssigned" dataSort={true}>
            Chauffeur <br/> toegewezen &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="120" dataField="nameDriver" dataSort={true}>
            Naam <br/> chauffeur &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="120" dataField="nameClient" dataSort={true}>
            Naam <br/> client &#x2195;
          </TableHeaderColumn>
      </div>
    );
  }
}
