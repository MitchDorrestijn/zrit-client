import React, { Component } from 'react';

//import ReactTable from "react-table";
//import 'react-table/react-table.css'
//import 'bootstrap/dist/css/bootstrap.css';
//import BootstrapTable from 'reactjs-bootstrap-table';

//import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table-next';
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

//   constructor(props){
//     super(props);
//     this.data= [
//       {id: 1, datum: '22-02-2017', ophaal_locatie: '2e Hogeweg 46, 3709 AZ, Zeist', bestemming: 'Herenlaan 23, 3701 AR, Zeist', 'chauffeur_toegewezen': 'Nee', 'naam_chauffeur': '-', naam_client: 'Gerda Willems'},
//       {id: 2, datum: '21-02-2017', ophaal_locatie: 'Wegedoorn 23, 3984 AZ, Odijk', bestemming: 'Singelpark 7, 3984 NC, Odijk', 'chauffeur_toegewezen': 'Nee', 'naam_chauffeur': '-', naam_client: 'Hans de Wit'},
//       {id: 3, datum: '20-02-2017', ophaal_locatie: '2e Hogeweg 46, 3709 AZ, Zeist', bestemming: 'Herenlaan 23, 3701 AR, Zeist', 'chauffeur_toegewezen': 'Ja', 'naam_chauffeur': 'Taxi bedrijf', naam_client: 'Gerda Willems'},
//     ];
//     this.columns = [
//       {
//   header: '',
//   id: 'click-me-button',
//   render: ({ row }) => (<button onClick={(e) => this.handleButtonClick(e, row)}>Click Me</button>)
// },
//       {Header: '#', accessor: 'id', Cell: () => <input onChange={(e) => {
//         //Here i want to get the ID of the selected item defined in this.data
//         this.setState({checkedItemID: e});
//       }} type="checkbox"></input>, minWidth: 25, maxWidth: 25},
//       {Header: 'Datum', accessor: 'datum', minWidth: 110, maxWidth: 110},
//       {Header: 'Ophaallocatie', accessor: 'ophaal_locatie', minWidth: 260, maxWidth: 260},
//       {Header: 'Bestemming', accessor: 'bestemming', minWidth: 260, maxWidth: 260},
//       {Header: 'Chauffeur toegewezen', accessor: 'chauffeur_toegewezen', minWidth: 180, maxWidth: 180},
//       {Header: 'Naam chauffeur', accessor: 'naam_chauffeur'},
//       {Header: 'Naam client', accessor: 'naam_client'}
//     ];
//     this.state = {
//       checkedItemID: null
//     }
//   }
//
// handleButtonClick = (e) => {
//   console.log(e)
// }
//
//   printState = (e) => {
//     console.log("checkedItemID: " + JSON.stringify(this.state.checkedItemID))
//   }
//
//   render() {
//     return(
//       <div>
//         <button onClick={this.printState}>Print checkedItemID</button>
//         <ReactTable showPaginationBottom={false} minRows={0} data={this.data} columns={this.columns} />
//       </div>
//     );
//   }


// constructor(props){
//   super(props);
//
//   this.data= [
//     {id: 1, datum: '22-02-2017', ophaal_locatie: '2e Hogeweg 46, 3709 AZ, Zeist', bestemming: 'Herenlaan 23, 3701 AR, Zeist', 'chauffeur_toegewezen': 'Nee', 'naam_chauffeur': '-', naam_client: 'Gerda Willems'},
//     {id: 2, datum: '21-02-2017', ophaal_locatie: 'Wegedoorn 23, 3984 AZ, Odijk', bestemming: 'Singelpark 7, 3984 NC, Odijk', 'chauffeur_toegewezen': 'Nee', 'naam_chauffeur': '-', naam_client: 'Hans de Wit'},
//     {id: 3, datum: '20-02-2017', ophaal_locatie: '2e Hogeweg 46, 3709 AZ, Zeist', bestemming: 'Herenlaan 23, 3701 AR, Zeist', 'chauffeur_toegewezen': 'Ja', 'naam_chauffeur': 'Taxi bedrijf', naam_client: 'Gerda Willems'},
//   ];
//
//   this.columns = [
//     {name: 'datum', display: 'Datum'},
//     {name: 'ophaal_locatie', display: 'Ophaallocatie'},
//     {name: 'bestemming', display: 'Bestemming'},
//     {name: 'chauffeur_toegewezen', display: 'Chauffeur toegewezen'},
//     {name: 'naam_chauffeur', display: 'Naam chauffeur'},
//     {name: 'naam_client', display: 'Naam client'}
//   ];
//
//   this.state = {
//     selectedRow: {}
//   }
// }
//
// onChange = (newSelection) => {
//   this.setState({selectedRow: newSelection})
// }
//
// render(){
//   return(
//     <div><BootstrapTable columns={this.columns} data={this.data} headers={true} select={'single'} /></div>
//   );
// }
//
