/**
 * React related imports
 */
import React from 'react';
import {CSVLink} from 'react-csv';
import {Button} from 'reactstrap';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {renderSearchField, renderSortedColumn, redirectIfUserIsNotAdmin} from '../global/Methods';

/**
 * Endpoints import
 */
import {
  getAllAuthenticatedUsers,
  removeAuthenticatedUser
} from '../CRUD/Authentication';

/**
 * Style related imports
 */
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/table.css';

/**
 * This class takes care of rendering the authenticated users table, from here other actions can be taken
 */
export default class AuthenticatedUsersTable extends React.Component {

  /**
   * Makes a GET request to get all authenticated users when component is mounted
   */
  componentDidMount() {
    //redirectIfUserIsNotAdmin(this.props);
    this.getAllUsers();
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
        name: 'userName',
        display: 'Gebruikersnaam'
      },
      {
        name: 'email',
        display: 'Email'
      },
      {
        name: 'role',
        display: 'Rol'
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
   * Redirect to a page where a new authenticated user can be added.
   */
  createAuthenticatedUser = () => {
    return this.props.history.push(this.props.routes.createAuthenticatedUser);
  };

  /**
   * Removes an authenticated user
   */
  removeAuthenticatedUser = () => {
    let properties = {name: this.refs.table.state.selectedRowKeys}
    removeAuthenticatedUser(properties).then(this.getAllAuthenticatedUsers());
  }

  /**
   * Gets all authenticated users
   */
  getAllUsers = () => {
    getAllAuthenticatedUsers(this.props).then((res) => {res !== undefined && this.setState({data: res.data})});
  }

  /**
   * Renders the buttons above the table
   */
  renderButtons = () => {
    return (<div>
      <Button onClick={this.removeAuthenticatedUser} disabled={this.state.disableButtons}color="primary" className='crud-btn'>Verwijderen</Button>
      <Button onClick={this.createAuthenticatedUser} color="primary" className='crud-btn'>Nieuwe toevoegen</Button>
    </div>);
  };

  /**
   * Enables the buttons for allowing the zorginstelling to update
   */
  onSelect = () => {
    this.setState({disableButtons: false});
  }

  /**
   * Renders the view for the user
   */
  render() {
    const tableOptions = {
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

          <TableHeaderColumn isKey width="230" dataField="userName" dataSort={true}>
            Gebruikersnaam &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="230" dataField="email" dataSort={true}>
            Email &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width="250" dataField="role" dataSort={true}>
            Rol &#x2195;
          </TableHeaderColumn>
        </BootstrapTable>
        <CSVLink data={this.state.data} filename={"beheerders_overview"} className="btn btn-primary crud-btn" target="">
          Export als CSV
        </CSVLink>
      </div>
    );
  };
}
