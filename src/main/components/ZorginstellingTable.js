/**
 * React related imports
 */
import React from 'react';
import {Button} from 'reactstrap'
import {CSVLink} from 'react-csv';
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

  /**
   * Setups all the data.
   * @constructor
   * @param {props} props - The given properties by the superclass
   */
  constructor(props) {
    super(props);
    this.data = [
      {
        'id': 1,
        'datum': '22-02-2017',
        'ophaal_locatie': '2e Hogeweg 46, 3709 AZ, Zeist',
        'bestemming': 'Herenlaan 23, 3701 AR, Zeist',
        'chauffeur_toegewezen': 'Nee',
        'naam_chauffeur': '-',
        'naam_client': 'Gerda Willems'
      }, {
        'id': 2,
        'datum': '21-02-2017',
        'ophaal_locatie': 'Wegedoorn 23, 3984 AZ, Odijk',
        'bestemming': 'Singelpark 7, 3984 NC, Odijk',
        'chauffeur_toegewezen': 'Nee',
        'naam_chauffeur': '-',
        'naam_client': 'Hans de Wit'
      }, {
        'id': 3,
        'datum': '20-02-2017',
        'ophaal_locatie': '2e Hogeweg 46, 3709 AZ, Zeist',
        'bestemming': 'Herenlaan 23, 3701 AR, Zeist',
        'chauffeur_toegewezen': 'Ja',
        'naam_chauffeur': 'Taxi bedrijf',
        'naam_client': 'Gerda Willems'
      }
    ];
    this.columns = [
      {
        name: 'datum',
        display: 'Datum'
      }, {
        name: 'ophaal_locatie',
        display: 'Ophaallocatie'
      }, {
        name: 'bestemming',
        display: 'Bestemming'
      }, {
        name: 'chauffeur_toegewezen',
        display: 'Chauffeur toegewezen'
      }, {
        name: 'naam_chauffeur',
        display: 'Naam chauffeur'
      }, {
        name: 'naam_client',
        display: 'Naam client'
      }
    ];
    this.state = {
      sortColumnName: undefined,
      sortOrder: undefined,
      disableButtons: true
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
        <BootstrapTable search={true} data={this.data} options={tableOptions} selectRow={{
            mode: 'radio',
            onSelect: this.onSelect
          }} ref='table'>
          
          <TableHeaderColumn export={false} hidden={true} dataField="id" isKey={true}>
            ID
          </TableHeaderColumn>

          <TableHeaderColumn width='110' dataField="datum" dataSort={true}>
            Datum &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width='260' dataField="ophaal_locatie" dataSort={true}>
            Ophaallocatie &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width='260' dataField="bestemming" dataSort={true}>
            Bestemming &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width='140' dataField="chauffeur_toegewezen" dataSort={true}>
            Chauffeur
            <br/>
            toegewezen &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width='140' dataField="naam_chauffeur" dataSort={true}>
            Naam
            <br/>
            chauffeur &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn width='140' dataField="naam_client" dataSort={true}>
            Naam client &#x2195;
          </TableHeaderColumn>
        </BootstrapTable>

        <CSVLink data={this.data} filename={"zorginstelling_overview"} className="btn btn-primary crud-btn" target="">
          Export als CSV
        </CSVLink>
      </div>
    );
  };
}
