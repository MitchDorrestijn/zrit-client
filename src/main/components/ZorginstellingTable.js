/**
 * React related imports
 */
import React from 'react';
import {Button} from 'reactstrap'
import {CSVLink} from 'react-csv';
import {
  BootstrapTable,
  TableHeaderColumn
} from 'react-bootstrap-table';
import {
  renderSearchField,
  renderSortedColumn,
  getUserRole
} from '../global/Methods';

/**
 * Endpoints import
 */
import {
  getAllZorginstellingen
} from '../CRUD/Zorginstelling';

import config from '../config';

/**
 * Style related imports
 */
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/table.css';

/**
 * This class takes care of rendering the zorginstellingen table, from here other actions can be taken
 */
export default class ZorginstellingTable extends React.Component {

  /**
   * Makes a GET request to get all zorginstellingen when component is mounted
   */
  componentDidMount(){
    getAllZorginstellingen(this.props).then((res) => {res !== undefined && this.setState({data: this.dataFormatterGET(res.data)})});
  }

  dataFormatterGET = (data) => {
    if(data.length > 0){
      let dataDisplay = [];
      for(let i=0; i<data.length; i++){
        let zorginstellingData = {
          name: data[i].name,
          street: data[i].addresses[0].street,
          houseNumber: data[i].addresses[0].houseNumber,
          zipCode: data[i].addresses[0].zipCode,
          residence: data[i].addresses[0].residence,
          id: data[i].id
        }
        dataDisplay.push(zorginstellingData);
      }
      return dataDisplay;
    } else {
      let returnArray = [];
      returnArray.push(data);
      return returnArray;
    }
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
        display: 'Naam'
      },
      {
        name: 'street',
        display: 'Straat'
      },
      {
        name: 'houseNumber',
        display: 'Huisnummer'
      },
      {
        name: 'zipCode',
        display: 'Postcode'
      },
      {
        name: 'residence',
        display: 'Gemeente'
      },
    ];
    this.state = {
      sortColumnName: undefined,
      sortOrder: undefined,
      disableButtons: true,
      data: []
    };
  };

  /**
   * Redirect to a page where a the selected zorginstelling can be updated.
   */
  updateItem = () => {
    return this.props.history.push(`${this.props.routes.updateZorginstelling}/${this.refs.table.state.selectedRowKeys}`);
  };

  /**
   * Redirect to a page where a new zorginstelling can be added.
   */
  createItem = () => {
    return this.props.history.push(this.props.routes.createZorginstelling);
  };

  /**
   * Enables the buttons for allowing the zorginstelling to update
   */
  onSelect = () => {
    this.setState({disableButtons: false});
  }

  /**
   * Renders the buttons above the table
   */
  renderButtons = () => {
    if(getUserRole(this.props) === config.roles[0]){
      return (
        <div>
        <Button onClick={this.createItem} color="primary" className='crud-btn'>Toevoegen</Button>
        <Button disabled={this.state.disableButtons}
          onClick={this.updateItem} color="primary" className='crud-btn'>Bewerken</Button>
        </div>
      );
    }
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

    return (
      <div>
        <BootstrapTable search={true} data={this.state.data} options={tableOptions} selectRow={{
            mode: 'radio',
            onSelect: this.onSelect
          }} ref='table'>

          <TableHeaderColumn hidden={true} dataField="id" isKey={true}>
            ID
          </TableHeaderColumn>

          <TableHeaderColumn dataField="name" dataSort={true}>
            Naam &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="street" dataSort={true}>
            Straat &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="houseNumber" dataSort={true}>
            Huisnummer &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="zipCode" dataSort={true}>
            Postcode &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="residence" dataSort={true}>
            Gemeente &#x2195;
          </TableHeaderColumn>
        </BootstrapTable>

        <CSVLink data={this.state.data} filename={"zorginstelling_overview"} className="btn btn-primary crud-btn" target="">
          Export als CSV
        </CSVLink>
      </div>
    );
  };
}
