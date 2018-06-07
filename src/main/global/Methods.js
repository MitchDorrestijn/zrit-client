import {SearchField} from 'react-bootstrap-table';
import React from 'react';
import config from '../config';
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

export const parseJwt = (token) => {
  if(token !== undefined){
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(base64));
  } else {
    return "Token niet gevonden";
  }
};

export const getUserRole = () => {
  return parseJwt(getJwtToken()).role;
}

export const getJwtToken = () => {
  return localStorage.getItem("Token");
}

export const checkIfUserIsAdmin = () => {
  if(parseJwt(getJwtToken()).role === config.roles[0]){
    return true; //User is allowed here
  } else {
    return false; //User is not allowed here
  }
}

export const redirectIfUserIsNotAdmin = (props) => {
  if(parseJwt(getJwtToken()).role !== config.roles[0]){
    localStorage.removeItem("Token");
    return props.history.push(props.routes.login);
  }
}

export const setAuthenticationHeader = () => {
  return {headers: {"Authorization" : `Token: ${getJwtToken()}`}};
}
