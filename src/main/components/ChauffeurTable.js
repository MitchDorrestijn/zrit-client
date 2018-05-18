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
  getAllChauffeurs
} from '../CRUD/Chauffeur';

/**
 * Style related imports
 */
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/table.css';

/**
 * This class takes care of rendering the chauffeur table, from here other actions can be taken
 */
export default class ChauffeurTable extends React.Component {

  /**
   * Makes a GET request to get all chauffeurs when component is mounted
   */
  componentDidMount() {
    getAllChauffeurs(this.props).then((res) => {res !== undefined && this.setState({data: res.data})});
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
        name: 'name',
        display: 'Naam chauffeur'
      }, {
        name: 'totalRides',
        display: 'Aantal ritten'
      }, {
        name: 'typeOfPayment',
        display: 'Soort vergoeding'
      }, {
        name: 'totalEarned',
        display: 'Totaal verdiend'
      }, {
        name: 'numberPlate',
        display: 'Kenteken auto'
      }, {
        name: 'numberOfPassengers',
        display: 'Aantal personen auto'
      }, {
        name: 'segment',
        display: 'Segment auto'
      }, {
        name: 'rating',
        display: 'Beoordeling'
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

        <TableHeaderColumn hidden={true} dataField="id" isKey={true}>
          ID
        </TableHeaderColumn>

        <TableHeaderColumn width="200" dataField="name" dataSort={true}>
          Naam
          <br/>
          chauffeur &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="100" dataField="totalRides" dataSort={true}>
          Aantal
          <br/>
          ritten &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="130" dataField="typeOfPayment" dataSort={true}>
          Soort
          <br/>
          vergoeding &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="130" dataField="totalEarned" dataSort={true}>
          Totaal
          <br/>
          verdiend &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="130" dataField="numberPlate" dataSort={true}>
          Kenteken &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataField="numberOfPassengers" dataSort={true}>
          Aantal
          <br/>
          personen &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="130" dataField="segment" dataSort={true}>
          Segment
          <br/>
          auto &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="130" dataField="rating" dataSort={true}>
          Beoordeling &#x2195;
        </TableHeaderColumn>

      </BootstrapTable>

      <CSVLink data={this.state.data} filename={"chauffeurs_overview"} className="btn btn-primary crud-btn" target="">
        Export als CSV
      </CSVLink>
    </div>);
  };
}
