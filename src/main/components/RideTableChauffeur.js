/**
 * React related imports
 */
import React from 'react';
import {CSVLink} from 'react-csv';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {renderSearchField, renderSortedColumn} from '../global/Methods';

/**
 * Style related imports
 */
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/table.css';

/**
 * This class takes care of rendering the rideChauffeur table, from here other actions can be taken
 */
export default class RideTableChauffeur extends React.Component {

  /**
   * Setups all the data.
   * @constructor
   * @param {props} props - The given properties by the superclass
   */
  constructor(props) {
    super(props);
    this.columns = [
      {
        name: 'date',
        display: 'Datum'
      }, {
        name: 'pickupLocation',
        display: 'Ophaallocatie'
      }, {
        name: 'dropOffLocation',
        display: 'Bestemming'
      },
      {
        name: 'transerPaymentTo',
        display: 'Overmaken naar'
      },
      {
        name: 'totalToPay',
        display: 'Bedrag'
      },
      {
        name: 'nameDriver',
        display: 'Naam chauffeur'
      },
      {
        name: 'nameClient',
        display: 'Naam client'
      }
    ];
    this.state = {
      sortColumnName: undefined,
      sortOrder: undefined,
      disableButtons: true,
      data: []
    };
  }


  /**
   * Renders the view for the user
   */
  render() {
    const tableOptions = {
      sortColumnName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      renderSortedColumn: renderSortedColumn,
      noDataText: 'Geen resultaten gevonden',
      searchField: renderSearchField,
    };

    return (<div>
      <BootstrapTable search={true} data={this.state.data} options={tableOptions} ref='table'>

      <TableHeaderColumn hidden={true} dataField="rideId" isKey={true}>
        RideID
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

        <TableHeaderColumn width="120" dataField="transerPaymentTo" dataSort={true}>
          Overmaken <br /> naar &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataField="totalToPay" dataSort={true}>
          Bedrag &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataField="nameDriver" dataSort={true}>
          Naam <br/> chauffeur &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataField="nameClient" dataSort={true}>
          Naam <br/> client &#x2195;
        </TableHeaderColumn>

      </BootstrapTable>

      <CSVLink data={this.state.data} filename={"ritten_chauffeur_overview"} className="btn btn-primary crud-btn" target="">
        Export als CSV
      </CSVLink>
    </div>);
  };
}
