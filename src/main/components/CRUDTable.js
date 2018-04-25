import React, {Component} from 'react';

import {BootstrapTable, TableHeaderColumn, SearchField} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import '../css/table.css';

export default class CRUDTable extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {
        id: 1,
        datum: '22-02-2017',
        ophaal_locatie: '2e Hogeweg 46, 3709 AZ, Zeist',
        bestemming: 'Herenlaan 23, 3701 AR, Zeist',
        'chauffeur_toegewezen': 'Nee',
        'naam_chauffeur': '-',
        naam_client: 'Gerda Willems'
      }, {
        id: 2,
        datum: '21-02-2017',
        ophaal_locatie: 'Wegedoorn 23, 3984 AZ, Odijk',
        bestemming: 'Singelpark 7, 3984 NC, Odijk',
        'chauffeur_toegewezen': 'Nee',
        'naam_chauffeur': '-',
        naam_client: 'Hans de Wit'
      }, {
        id: 3,
        datum: '20-02-2017',
        ophaal_locatie: '2e Hogeweg 46, 3709 AZ, Zeist',
        bestemming: 'Herenlaan 23, 3701 AR, Zeist',
        'chauffeur_toegewezen': 'Ja',
        'naam_chauffeur': 'Taxi bedrijf',
        naam_client: 'Gerda Willems'
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
      sortColumnName: undefined, //Name of the column that is going to be sorted
      sortOrder: undefined //desc or asc
    };
  }

  removeItem = () => {
    console.log("Verwijder het id " + this.refs.table.state.selectedRowKeys)
  }

  editItem = () => {
    console.log("Edit het id " + this.refs.table.state.selectedRowKeys)
  }

  renderSortedColumn = (sortColumnName, sortOrder) => {
    this.setState({sortColumnName: sortColumnName, sortOrder: sortOrder});
  }

  renderSearchField = (props) => {
    return (
      <SearchField className='searchfield' placeholder='Type om te zoeken'/>
    );
  }

  render() {
    const tableOptions = {
      sortColumnName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      renderSortedColumn: this.renderSortedColumn,
      noDataText: 'Geen resultaten gevonden',
      searchField: this.renderSearchField
    };
    return (<div>
      <button onClick={this.removeItem}>Verwijder</button>
      <button onClick={this.editItem}>Bewerken</button>
      <BootstrapTable search={true} data={this.data} options={tableOptions} selectRow={{
          mode: 'radio'
        }} ref='table'>
        <TableHeaderColumn hidden={true} dataField="id" isKey={true}>
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
          Chauffeur <br/> toegewezen &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width='140' dataField="naam_chauffeur" dataSort={true}>
          Naam <br /> chauffeur &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width='140' dataField="naam_client" dataSort={true}>
          Naam client &#x2195;
        </TableHeaderColumn>
      </BootstrapTable>
    </div>);
  }
}
