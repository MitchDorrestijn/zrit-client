import React, { Component } from 'react';

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

import '../css/table.css';

export default class CRUDTable extends Component {
  constructor(props){
    super(props);
    this.data= [
      {id: 1, datum: '22-02-2017', ophaal_locatie: '2e Hogeweg 46, 3709 AZ, Zeist', bestemming: 'Herenlaan 23, 3701 AR, Zeist', 'chauffeur_toegewezen': 'Nee', 'naam_chauffeur': '-', naam_client: 'Gerda Willems'},
      {id: 2, datum: '21-02-2017', ophaal_locatie: 'Wegedoorn 23, 3984 AZ, Odijk', bestemming: 'Singelpark 7, 3984 NC, Odijk', 'chauffeur_toegewezen': 'Nee', 'naam_chauffeur': '-', naam_client: 'Hans de Wit'},
      {id: 3, datum: '20-02-2017', ophaal_locatie: '2e Hogeweg 46, 3709 AZ, Zeist', bestemming: 'Herenlaan 23, 3701 AR, Zeist', 'chauffeur_toegewezen': 'Ja', 'naam_chauffeur': 'Taxi bedrijf', naam_client: 'Gerda Willems'},
    ];
    this.columns = [
      {name: 'datum', display: 'Datum'},
      {name: 'ophaal_locatie', display: 'Ophaallocatie'},
      {name: 'bestemming', display: 'Bestemming'},
      {name: 'chauffeur_toegewezen', display: 'Chauffeur toegewezen'},
      {name: 'naam_chauffeur', display: 'Naam chauffeur'},
      {name: 'naam_client', display: 'Naam client'}
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
      this.setState({
        sortColumnName: sortColumnName,
        sortOrder: sortOrder
      });
    }

  render(){
    const tableOptions = {
      sortColumnName: this.state.sortName,
      sortOrder: this.state.sortOrder,
      renderSortedColumn: this.renderSortedColumn
    };

   return (
     <div>
       <button onClick={this.removeItem}>Verwijder</button>
       <button onClick={this.editItem}>Bewerken</button>
       <BootstrapTable data={this.data} options={tableOptions} selectRow={{mode: 'radio'}} ref='table'>
           <TableHeaderColumn hidden={true} dataField="id" isKey={true}>ID</TableHeaderColumn>
           <TableHeaderColumn dataField="datum" dataSort={true}>Datum</TableHeaderColumn>
           <TableHeaderColumn dataField="ophaal_locatie" dataSort={true}>Ophaallocatie</TableHeaderColumn>
           <TableHeaderColumn dataField="bestemming" dataSort={true}>Bestemming</TableHeaderColumn>
           <TableHeaderColumn dataField="chauffeur_toegewezen" dataSort={true}>Chauffeur toegewezen</TableHeaderColumn>
           <TableHeaderColumn dataField="naam_chauffeur" dataSort={true}>Naam chauffeur</TableHeaderColumn>
           <TableHeaderColumn dataField="naam_client" dataSort={true}>Naam client</TableHeaderColumn>
       </BootstrapTable>
     </div>
   );
 }
}
