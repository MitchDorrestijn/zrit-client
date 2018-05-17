import {SearchField} from 'react-bootstrap-table';
import React from 'react';

/**
 * Renders the search field above the table
 */
export const renderSearchField = () => {
  return (<SearchField className='searchfield' placeholder='Type om te zoeken'/>);
};

/**
 * Renders the columns sorted.
 * @param {string} sortColumnName - Name of the column that is going to be sorted
 * @param {string} sortOrder - Can be either desc or asc
 */
export const renderSortedColumn = (sortColumnName, sortOrder) => {
  this.setState({sortColumnName: sortColumnName, sortOrder: sortOrder});
};
