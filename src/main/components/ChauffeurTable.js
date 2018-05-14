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
 * This class takes care of rendering the chauffeur table, from here other actions can be taken
 */
export default class ChauffeurTable extends React.Component {
  componentDidMount() {
    axios.get(`${config.url}/chauffeur/chauffeurs`).then((res) => {
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
      <Button onClick={Error: no source code supplied to jspretty!} color="primary" className='crud-btn'>Toevoegen</Button>
      <Button disabled={this.state.disableButtons} onClick={Error: no source code supplied to jspretty!} color="primary" className='crud-btn'>Bewerken</Button>
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

        <TableHeaderColumn dataField="typeOfPayment" dataSort={true}>
          Soort
          <br/>
          vergoeding &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn dataField="totalEarned" dataSort={true}>
          Totaal
          <br/>
          verdiend &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn dataField="numberPlate" dataSort={true}>
          Kenteken &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn dataField="numberOfPassengers" dataSort={true}>
          Aantal
          <br/>
          personen &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn dataField="segment" dataSort={true}>
          Segment
          <br/>
          auto &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn dataField="rating" dataSort={true}>
          Beoordeling &#x2195;
        </TableHeaderColumn>

      </BootstrapTable>

      <CSVLink data={this.state.data} filename={"chauffeurs_overview"} className="btn btn-primary crud-btn" target="">
        Export als CSV
      </CSVLink>
    </div>);
  };
}
