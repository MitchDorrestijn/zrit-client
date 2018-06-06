import axios from 'axios';
import config from '../config';
import {redirectToErrorPage, setAuthenticationHeader, parseJwt, checkIfUserIsAdmin} from '../global/Methods';

/**
* Sends a GET request to the server to get the data of all clients
* @param {props} props - the history router so users can go back after receiving an error
*/
export const getAllClients = (props) => {
  if(checkIfUserIsAdmin()){
    return axios.get(`${config.url}/rest/client/clienten`, setAuthenticationHeader()).catch((err) => redirectToErrorPage(props));
  } else {
    let properties = {
      id: parseJwt(localStorage.getItem("Token")).careInstitutionId
    };
    return getClientsOfASpecificCareInstitution(properties);
  }
};

/**
* Sends a GET request to the server to get the data of all clients from a specific careInstitution
* @param {props} props - the id of the careInstitution that will return its clients
*/
export const getClientsOfASpecificCareInstitution = (props) => {
  return axios.get(`${config.url}/rest/client/clienten/zorginstelling/${props.id}`, setAuthenticationHeader());
}

/**
* Sends a GET request to the server to get the data of a specific client
* @param {props} props - the id of the client that will return its data
*/
export const getSpecificClient = (props) => {
  return axios.get(`${config.url}/rest/client/getClient/${props.id}`, setAuthenticationHeader());
}

/**
* Sends a DELETE request to the server to delete a specific client
* @param {props} props - the id of the client that will be removed
*/
export const deleteClient = (props) => {
  return axios.delete(`${config.url}/rest/client/deleteclient/${props.id}`, setAuthenticationHeader());
}

/**
* Sends a PUT request to the server to update a specific client
* @param {props} props - the id of the client that will be updated
* @param {data} data - the new data for the client
*/
export const updateClient = (props, data) => {
  return axios.put(`${config.url}/rest/client/update/client`, data, setAuthenticationHeader());
}

/**
* Sends a POST request to the server to add a new client
* @param {data} data - the object with all data for the new client
*/
export const createClient = (data) => {
  return axios.post(`${config.url}/rest/client/addClient`, data, setAuthenticationHeader());
}
