import React, { Component } from 'react';
import ReactTable from "react-table";

import 'react-table/react-table.css'
import '../css/table.css';

export default class CRUDTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {datum: '22-02-2017', ophaal_locatie: '2e Hogeweg 46, 3709 AZ, Zeist', bestemming: 'Herenlaan 23, 3701 AR, Zeist', 'chauffeur_toegewezen': 'Nee', 'naam_chauffeur': '-', naam_client: 'Gerda Willems'},
        {datum: '21-02-2017', ophaal_locatie: 'Wegedoorn 23, 3984 AZ, Odijk', bestemming: 'Singelpark 7, 3984 NC, Odijk', 'chauffeur_toegewezen': 'Nee', 'naam_chauffeur': '-', naam_client: 'Hans de Wit'},
        {datum: '20-02-2017', ophaal_locatie: '2e Hogeweg 46, 3709 AZ, Zeist', bestemming: 'Herenlaan 23, 3701 AR, Zeist', 'chauffeur_toegewezen': 'Ja', 'naam_chauffeur': 'Taxi bedrijf', naam_client: 'Gerda Willems'},
      ],
      columns: [
        {Header: 'Datum', accessor: 'datum', minWidth: 110, maxWidth: 110},
        {Header: 'Ophaallocatie', accessor: 'ophaal_locatie', minWidth: 260, maxWidth: 260},
        {Header: 'Bestemming', accessor: 'bestemming', minWidth: 260, maxWidth: 260},
        {Header: 'Chauffeur toegewezen', accessor: 'chauffeur_toegewezen', minWidth: 180, maxWidth: 180},
        {Header: 'Naam chauffeur', accessor: 'naam_chauffeur'},
        {Header: 'Naam client', accessor: 'naam_client'}
      ]
    }
  }

  render() {
    return(
      <div>
        <ReactTable showPaginationBottom={false} minRows={0} data={this.state.data} columns={this.state.columns} />
      </div>
    );
  }
}
