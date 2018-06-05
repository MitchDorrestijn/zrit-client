/**
 * React related imports
 */
import React from 'react';
import {CSVLink} from 'react-csv';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {renderSearchField, renderSortedColumn, convertUNIXTimestampToTime} from '../global/Methods';

/**
 * Style related imports
 */
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/table.css';
import {getAllRides} from '../CRUD/Ride';

/**
 * This class takes care of rendering the ratings table, from here other actions can be taken
 */
export default class RideTable extends React.Component {

  /**
   * Makes a GET request to get all rides when component is mounted
   */
  componentDidMount() {
    getAllRides(this.props).then((res) => {res !== undefined && this.setState({data: this.convertDate(res.data)})});
  }

/**
  * Converts the given data so it can be displayed
  * @param {data} data - The given data thats getting converted
  */
  convertDate = (data) => {
    let dataDisplay = [];
    for (let i = 0; i < data.length; i ++){
      let rideData = {
        date: convertUNIXTimestampToTime(data[i].date),
        pickUpLocation: data[i].pickUpLocation,
        dropOffLocation: data[i].dropOffLocation,
        driverName: data[i].driverName,
        clientName: data[i].clientName
      }
      dataDisplay.push(rideData);
    }
    return dataDisplay;
  }

  /**
   * Setups all the data.
   * @constructor
   * @param {props} props - The given properties by the superclass
   */
  constructor(props) {
    super(props);
    this.columns = [
      {
        name: 'warning',
        display: 'Warning'
      }, {
        name: 'date',
        display: 'Datum'
      }, {
        name: 'pickUpLocation',
        display: 'Ophaallocatie'
      }, {
        name: 'dropOffLocation',
        display: 'Bestemming'
      },
      {
        name: 'driverAssigned',
        display: 'Chauffeur toegewezen'
      },
      {
        name: 'driverName',
        display: 'Naam chauffeur'
      },
      {
        name: 'clientName',
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
        <TableHeaderColumn width="120" dataField="warning" dataSort={true} isKey={true}>
          Warning &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataField="date" dataSort={true}>
          Datum &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataField="pickUpLocation" dataSort={true}>
          Ophaallocatie &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataField="dropOffLocation" dataSort={true}>
          Bestemming &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataField="driverAssigned" dataSort={true}>
          Chauffeur <br/> toegewezen &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataField="driverName" dataSort={true}>
          Naam <br/> chauffeur &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataField="clientName" dataSort={true}>
          Naam <br/> client &#x2195;
        </TableHeaderColumn>

      </BootstrapTable>

      <CSVLink data={this.state.data} filename={"ritten_overview"} className="btn btn-primary crud-btn" target="">
        Export als CSV
      </CSVLink>
    </div>);
  };
}
