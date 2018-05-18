/**
 * React related imports
 */
import React from 'react';
import {Button} from 'reactstrap'
import {CSVLink} from 'react-csv';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {renderSearchField, renderSortedColumn} from '../global/Methods';

/**
 * Endpoints import
 */
import {
  getAllClients
} from '../CRUD/Client';

/**
 * Style related imports
 */
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/table.css';

/**
 * This class takes care of rendering the client table, from here other actions can be taken like editing
 */
export default class ClientTable extends React.Component {

  /**
   * Makes a GET request to get all chauffeurs when component is mounted
   */
  componentDidMount() {
    getAllClients(this.props).then((res) => {res !== undefined && this.setState({data: res.data})});
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
        name: 'warningPKB',
        display: 'Warning'
      }, {
        name: 'name',
        display: 'Naam cliënt'
      }, {
        name: 'pkb',
        display: 'PKB cliënt'
      }, {
        name: 'totalMeters',
        display: 'Gemaakte meters'
      }, {
        name: 'priceToPay',
        display: 'Te betalen door cliënt'
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
   * Renders the buttons above the table
   */
  renderButtons = () => {
    return (<div>
      <Button color="primary" className='crud-btn'>Toevoegen</Button>
      <Button disabled={this.state.disableButtons} color="primary" className='crud-btn'>Bewerken</Button>
    </div>);
  };

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
      btnGroup: this.renderButtons
    };

    return (<div>
      <BootstrapTable search={true} data={this.state.data} options={tableOptions} selectRow={{
          mode: 'radio',
          onSelect: this.onSelect
        }} ref='table'>

        <TableHeaderColumn hidden={true} dataField="clientId" isKey={true}>
          ID
        </TableHeaderColumn>

        <TableHeaderColumn width="50" dataField="warningPKB" dataSort={true}>
          Warning
        </TableHeaderColumn>

        <TableHeaderColumn width="100" dataField="name" dataSort={true}>
          Naam
        </TableHeaderColumn>

        <TableHeaderColumn width="130" dataField="pkb" dataSort={true}>
          PKB
          <br/>
          cliënt &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="130" dataField="totalMeters" dataSort={true}>
          Gemaakte
          <br/>
          km's' &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="130" dataField="priceToPay" dataSort={true}>
          Te betalen
          <br/>
          door cliënt &#x2195;
        </TableHeaderColumn>

      </BootstrapTable>

      <CSVLink data={this.state.data} filename={"clienten_overview"} className="btn btn-primary crud-btn" target="">
        Export als CSV
      </CSVLink>
    </div>);
  };
}
