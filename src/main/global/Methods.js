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

export const redirectToErrorPage = (props) => {
  return props.history.push(props.routes.error);
}

/**
* Converts a UNIX timestamp to a Date object
* @param {input} input - The given UNIX timestamp thats getting converted
**/
export const convertUNIXTimestampToTime = (input) => {
  let time = new Date(input);
  return time.getDate() + "/" + (time.getMonth() + 1) + "/" + time.getFullYear();
}
