/**
 * React related imports
 */
import React from 'react';
import {Button} from 'reactstrap'
import {CSVLink} from 'react-csv';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {renderSearchField, renderSortedColumn} from '../global/Methods';

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
   * Setups all the data.
   * @constructor
   * @param {props} props - The given properties by the superclass
   */
  constructor(props) {
    super(props);
    this.columns = [
      {
        name: 'chauffeur',
        display: 'Chauffeur'
      },
      {
        name: 'overmaken_naar',
        display: 'Overmaken naar'
      },
      {
        name: 'bedrag',
        display: 'Bedrag'
      },
      {
        name: 'betalingsKenmerk',
        display: 'Betalingskenmerk'
      },
      {
        name: 'periode_betaling',
        display: 'Periode betaling'
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
   * Renders the view for the user
   */
  render() {
    const tableOptions = {
      sortColumnName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      renderSortedColumn: renderSortedColumn,
      noDataText: 'Geen resultaten gevonden',
      searchField: renderSearchField
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

          <TableHeaderColumn dataField="chauffeur" dataSort={true}>
            Chauffeur &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="overmaken_naar" dataSort={true}>
            Overmaken naar &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="bedrag" dataSort={true}>
            Bedrag &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="betalingsKenmerk" dataSort={true}>
            Betalingskenmerk &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="periode_betaling" dataSort={true}>
            Periode betaling &#x2195;
          </TableHeaderColumn>
        </BootstrapTable>

        <CSVLink data={this.state.data} filename={"betalingen_overview"} className="btn btn-primary crud-btn" target="">
          Export als CSV
        </CSVLink>
      </div>
    );
  };
}
