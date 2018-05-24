import axios from 'axios';
import config from '../config';
import {redirectToErrorPage} from '../global/Methods';

/**
* Sends a GET request to the server to get the data of all clients
* @param {props} props - the history router so users can go back after receiving an error
*/
export const getAllClients = (props) => {
  return axios.get(`${config.url}/client/clienten`).catch((err) => redirectToErrorPage(props));
};

/**
* Sends a GET request to the server to get the data of a specific client
* @param {props} props - the id of the client that will return its data
*/
export const getSpecificClient = (props) => {
  return axios.get(`${config.url}/client/getClient/${props.id}`);
}

/**
* Sends a DELETE request to the server to delete a specific client
* @param {props} props - the id of the client that will be removed
*/
export const deleteClient = (props) => {
  return axios.delete(`${config.url}/client/deleteclient/${props.id}`);
}

/**
* Sends a PUT request to the server to update a specific client
* @param {props} props - the id of the client that will be updated
* @param {data} data - the new data for the client
*/
export const updateClient = (props, data) => {
  return axios.put(`${config.url}/client/update/client`, data);
}

/**
* Sends a POST request to the server to add a new client
* @param {data} data - the object with all data for the new client
*/
export const createClient = (data) => {
  return axios.post(`${config.url}/client/addClient`, data);
}
