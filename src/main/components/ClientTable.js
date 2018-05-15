/**
 * React related imports
 */
import React from 'react';
import {Button} from 'reactstrap'
import {CSVLink} from 'react-csv';
import axios from 'axios';
import {BootstrapTable, TableHeaderColumn, SearchField} from 'react-bootstrap-table';
import config from '../config';

/**
 * Style related imports
 */
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/table.css';

/**
 * This class takes care of rendering the client table, from here other actions can be taken
 */
export default class ClientTable extends React.Component {
  componentDidMount() {
    axios.get(`${config.url}/client/clients`).then((res) => {
      console.log(res);
      this.setState({data: res.data});
    }).catch((err) => {
      return this.props.history.push(this.props.routes.error);
    });
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
        display: 'WARNING'
      }, {
        name: 'name',
        display: 'Naam cliënt'
      }, {
        name: 'PKB',
        display: 'PKB cliënt'
      }, {
        name: 'madeKilometers',
        display: 'Gemaakte kms'
      }, {
        name: 'toPay',
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
   * Renders the columns sorted.
   * @param {string} sortColumnName - Name of the column that is going to be sorted
   * @param {string} sortOrder - Can be either desc or asc
   */
  renderSortedColumn = (sortColumnName, sortOrder) => {
    this.setState({sortColumnName: sortColumnName, sortOrder: sortOrder});
  };

  /**
   * Renders the search field above the table
   */
  renderSearchField = () => {
    return (<SearchField className='searchfield' placeholder='Type om te zoeken'/>);
  };

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
      renderSortedColumn: this.renderSortedColumn,
      noDataText: 'Geen resultaten gevonden',
      searchField: this.renderSearchField,
      btnGroup: this.renderButtons
    };

    return (<div>
      <BootstrapTable search={true} data={this.state.data} options={tableOptions} selectRow={{
          mode: 'radio',
          onSelect: this.onSelect
        }} ref='table'>

        <TableHeaderColumn hidden={true} dataField="id" isKey={true}>
          ID
        </TableHeaderColumn>

        <TableHeaderColumn width="200" dataField="warning" dataSort={true}>
          Warning
        </TableHeaderColumn>

        <TableHeaderColumn width="100" dataField="name" dataSort={true}>
          Naam
        </TableHeaderColumn>

        <TableHeaderColumn width="130" dataField="PKB" dataSort={true}>
          PKB
          <br/>
          cliënt &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="130" dataField="madeKilometers" dataSort={true}>
          Gemaakte
          <br/>
          km's' &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="130" dataField="toPay" dataSort={true}>
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
