/**
 * React related imports
 */
import React from 'react';
import {Button} from 'reactstrap'
import {CSVLink} from 'react-csv';
import axios from 'axios';
import config from '../config';
import {
  BootstrapTable,
  TableHeaderColumn,
  SearchField
} from 'react-bootstrap-table';


/**
 * Style related imports
 */
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/table.css';

/**
 * This class takes care of rendering the zorginstellingen table, from here other actions can be taken
 */
export default class ZorginstellingTable extends React.Component {

  componentDidMount(){
    axios.get(`${config.url}/zorginstelling/zorginstellingen`).then((res) => {
      this.setState({data: res.data});
    }).catch((err) => {
      console.log(err);
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
        display: 'Naam'
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
      <Button onClick={this.createItem} color="primary" className='crud-btn'>Toevoegen</Button>
      <Button disabled={this.state.disableButtons}
        onClick={this.updateItem} color="primary" className='crud-btn'>Bewerken</Button>
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
        </BootstrapTable>

        <CSVLink data={this.state.data} filename={"zorginstelling_overview"} className="btn btn-primary crud-btn" target="">
          Export als CSV
        </CSVLink>
      </div>
    );
  };
}
