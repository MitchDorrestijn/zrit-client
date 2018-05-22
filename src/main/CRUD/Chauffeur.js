import axios from 'axios';
import config from '../config';
import {redirectToErrorPage} from '../global/Methods';

/**
* Sends a GET request to the server to get the data of all chauffeurs
* @param {props} props - the history router so users can go back after receiving an error
*/
export const getAllChauffeurs = (props) => {
  return axios.get(`${config.url}/chauffeur/chauffeurs`).catch((err) => redirectToErrorPage(props));
};

/**
* Sends a GET request to the server to get the data of a specific chauffeur
* @param {props} props - the id of the chauffeur that will return its data
*/
export const getSpecificChauffeur = (props) => {
  return axios.get(`${config.url}/chauffeur/${props.id}`);
}

/**
* Sends a DELETE request to the server to delete a specific chauffeur
* @param {props} props - the id of the chauffeur that will be removed
*/
export const deleteChauffeur = (props) => {
  return axios.delete(`${config.url}/chauffeur/${props.id}`);
}

/**
* Sends a PUT request to the server to update a specific chauffeur
* @param {props} props - the id of the chauffeur that will be updated
* @param {data} data - the new data of the chauffeur
*/
export const updateChauffeur = (props, data) => {
  return axios.put(`${config.url}/chauffeur/${props.id}/edit`, data);
}

/**
* Sends a POST request to the server to add a new chauffeur
* @param {data} data - the object with all data for the new chauffeur
*/
export const createChauffeur = (data) => {
  return axios.post(`${config.url}/chauffeur/addChauffeur`, data);
}
