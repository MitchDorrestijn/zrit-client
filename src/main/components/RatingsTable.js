/**
 * React related imports
 */
import React from 'react';
import {CSVLink} from 'react-csv';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import {renderSearchField, renderSortedColumn} from '../global/Methods';

/**
 * Endpoints import
 */
import {
  getAllRatings
} from '../CRUD/Ratings';

/**
 * Style related imports
 */
import '../../../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/table.css';

/**
 * Other imports
 */
 import oneStar from '../assets/img/star-1.png';
 import twoStars from '../assets/img/star-2.png';
 import threeStars from '../assets/img/star-3.png';
 import fourStars from '../assets/img/star-4.png';
 import fiveStars from '../assets/img/star-5.png';

/**
 * This class takes care of rendering the ratings table, from here other actions can be taken
 */
export default class RatingsTable extends React.Component {

  /**
   * Makes a GET request to get all ratings when component is mounted
   */
  componentDidMount() {
    //getAllRatings(this.props).then((res) => {res !== undefined && this.setState({data: res.data})});
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
        name: 'name_driver',
        display: 'Naam chauffeur'
      }, {
        name: 'stars',
        display: 'Beoordeling'
      }, {
        name: 'rating',
        display: 'Opmerking'
      }, {
        name: 'name_client',
        display: 'Naam client'
      }
    ];
    this.state = {
      sortColumnName: undefined,
      sortOrder: undefined,
      disableButtons: true,
      data: [ //fake data for now
        {
          name_driver: 'Heerhugo',
          stars: 4,
          rating: 'Prima prma prima! Dit is een lange beoordeling om de regels te testen. Gaan de regels naar een nieuwe regel als het allemaal iets te lang is?',
          name_client: 'Jan-jans'
        }, {
          name_driver: 'Haagjan',
          stars: 5,
          rating: 'Goede chauffeur!',
          name_client: 'Hendrik'
        }
      ]
    };
  }

  /**
   * Renders the correct amount of stars based on the value of the cell
   */
  starFormatter = (cell) => {
    switch (cell) {
      case 1:
        return "<img class='starImg' alt='one-star' src='"+oneStar+"'/>" ;
      case 2:
        return "<img class='starImg' alt='two-stars' src='"+twoStars+"'/>" ;
      case 3:
        return "<img class='starImg' alt='three-stars' src='"+threeStars+"'/>" ;
      case 4:
        return "<img class='starImg' alt='four-stars' src='"+fourStars+"'/>" ;
      case 5:
        return "<img class='starImg' alt='five-stars' src='"+fiveStars+"'/>" ;
      default:
        return "-" ;
    }
  }

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
    };

    return (<div>
      <BootstrapTable search={true} data={this.state.data} options={tableOptions} ref='table'>
        <TableHeaderColumn width="120" dataField="name_driver" dataSort={true} isKey={true}>
          Naam <br /> chauffeur &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataFormat={this.starFormatter} dataField="stars" dataSort={true}>
          Beoordeling &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="500" dataField="rating" dataSort={true}>
          Opmerking &#x2195;
        </TableHeaderColumn>

        <TableHeaderColumn width="120" dataField="name_client" dataSort={true}>
          Naam <br /> cliënt &#x2195;
        </TableHeaderColumn>
      </BootstrapTable>

      <CSVLink data={this.state.data} filename={"beoordelingen_overview"} className="btn btn-primary crud-btn" target="">
        Export als CSV
      </CSVLink>
    </div>);
  };
}
