/**
 * React related imports
 */
import React from 'react';
import {CSVLink} from 'react-csv';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {renderSearchField} from '../global/Methods';

/**
 * Endpoints import
 */
import {
  getAllBetalingen
} from '../CRUD/Betalingen';

/**
 * Style related imports
 */
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/table.css';

/**
 * This class takes care of rendering the betalingen table, from here other actions can be taken
 */
export default class BetalingenTable extends React.Component {

  /**
   * Makes a GET request to get all betalingen when component is mounted
   */
  componentDidMount() {
    getAllBetalingen(this.props).then((res) => {res !== undefined && this.setState({data: res.data})});
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
        name: 'driverName',
        display: 'Chauffeur'
      },
      {
        name: 'accountnr',
        display: 'Overmaken naar'
      },
      {
        name: 'price_of_ride',
        display: 'Bedrag'
      },
      {
        name: 'paymentDescription',
        display: 'Betalingskenmerk'
      },
      {
        name: 'paymentStatus',
        display: 'Betaalstatus'
      },
      {
        name: 'paymentDueBefore',
        display: 'Betalen voor'
      }
    ];
    this.state = {
      sortColumnName: undefined,
      sortOrder: undefined,
      disableButtons: true,
      data: []
    };
  };

  /**
   * Renders the view for the user
   */
  render() {
    const tableOptions = {
      noDataText: 'Geen resultaten gevonden',
      searchField: renderSearchField
    };

    return (
      <div>
        <BootstrapTable search={true} data={this.state.data} options={tableOptions} ref='table'>
          <TableHeaderColumn hidden={true} isKey width="230" dataField="id" dataSort={true}>
            id &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="230" dataField="driverName" dataSort={true}>
            Chauffeur &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="250" dataField="accountnr" dataSort={true}>
            Overmaken naar &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="100" dataField="price_of_ride" dataSort={true}>
            Bedrag &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="200" dataField="paymentDescription" dataSort={true}>
            Betalingskenmerk &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="150" dataField="paymentStatus" dataSort={true}>
            Betaalstatus &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="140" dataField="paymentDueBefore" dataSort={true}>
            Betalen voor &#x2195;
          </TableHeaderColumn>
        </BootstrapTable>

        <CSVLink data={this.state.data} filename={"betalingen_overview"} className="btn btn-primary crud-btn" target="">
          Export als CSV
        </CSVLink>
      </div>
    );
  };
}
