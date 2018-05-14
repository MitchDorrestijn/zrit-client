import React from 'react';
import {Button} from 'reactstrap'
import {CSVLink} from 'react-csv';
import {
  BootstrapTable,
  TableHeaderColumn,
  SearchField
} from 'react-bootstrap-table';

import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/table.css';

export default class ChauffeurTable extends React.Component {

  constructor(props){
    super(props);
    this.columns = [
      {
        name: 'naam_chauffeur',
        display: 'Naam chauffeur'
      }, {
        name: 'aantal_ritten',
        display: 'Aantal ritten'
      },
      {
        name: 'soort_vergoeding',
        display: 'Soort vergoeding'
      },
      {
        name: 'totaal_verdiend',
        display: 'Totaal verdiend'
      },
      {
        name: 'kenteken_auto',
        display: 'Kenteken auto'
      },
      {
        name: 'aantal_personen_auto',
        display: 'Aantal personen auto'
      },
      {
        name: 'segment_auto',
        display: 'Segment auto'
      },
      {
        name: 'beoordeling',
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

  renderSortedColumn = (sortColumnName, sortOrder) => {
    this.setState({sortColumnName: sortColumnName, sortOrder: sortOrder});
  };

  renderSearchField = () => {
    return (<SearchField className='searchfield' placeholder='Type om te zoeken'/>);
  };

  renderButtons = () => {
    return (<div>
      <Button onClick={this.createItem} color="primary" className='crud-btn'>Toevoegen</Button>
      <Button disabled={this.state.disableButtons}
        onClick={this.updateItem} color="primary" className='crud-btn'>Bewerken</Button>
    </div>);
  };

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

          <TableHeaderColumn dataField="naam_chauffeur" dataSort={true}>
            Naam <br /> chauffeur &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="aantal_ritten" dataSort={true}>
            Aantal <br /> ritten &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="soort_vergoeding" dataSort={true}>
            Soort <br /> vergoeding &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="totaal_verdiend" dataSort={true}>
            Totaal <br /> verdiend &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="kenteken_auto" dataSort={true}>
            Kenteken &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="aantal_personen_auto" dataSort={true}>
            Aantal <br /> personen &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="segment_auto" dataSort={true}>
            Segment <br /> auto &#x2195;
          </TableHeaderColumn>

          <TableHeaderColumn dataField="beoordeling" dataSort={true}>
            Beoordeling &#x2195;
          </TableHeaderColumn>

        </BootstrapTable>

        <CSVLink data={this.state.data} filename={"chauffeurs_overview"} className="btn btn-primary crud-btn" target="">
          Export als CSV
        </CSVLink>
      </div>
    );
  };
}
