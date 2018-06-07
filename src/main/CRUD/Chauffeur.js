import axios from 'axios';
import config from '../config';
import {redirectToErrorPage, setAuthenticationHeader, parseJwt, checkIfUserIsAdmin, getJwtToken} from '../global/Methods';

/**
* Sends a GET request to the server to get the data of all chauffeurs
* @param {props} props - the history router so users can go back after receiving an error
*/
export const getAllChauffeurs = (props) => {
  if(checkIfUserIsAdmin()){
    return axios.get(`${config.url}/rest/chauffeur/chauffeurs`, setAuthenticationHeader()).catch((err) => redirectToErrorPage(props));
  } else {
    let properties = {
      id: parseJwt(getJwtToken()).careInstitutionId
    };
    return getChauffeursOfASpecificCareInstitution(properties);
  }
};

/**
* Sends a GET request to the server to get the data of all chauffeurs from a specific careInstitution
* @param {props} props - the id of the careInstitution that will return its chauffeurs
*/
export const getChauffeursOfASpecificCareInstitution = (props) => {
  return axios.get(`${config.url}/rest/chauffeur/chauffeurs/zorginstelling/${props.id}`, setAuthenticationHeader());
}

/**
* Sends a GET request to the server to get the data of a specific chauffeur
* @param {props} props - the id of the chauffeur that will return its data
*/
export const getSpecificChauffeur = (props) => {
  return axios.get(`${config.url}/rest/chauffeur/getChauffeur/${props.id}`, setAuthenticationHeader());
}

/**
* Sends a DELETE request to the server to delete a specific chauffeur
* @param {props} props - the id of the chauffeur that will be removed
*/
export const deleteChauffeur = (props) => {
  return axios.put(`${config.url}/rest/chauffeur/delete/${props.id}`, setAuthenticationHeader());
}

/**
* Sends a PUT request to the server to update a specific chauffeur
* @param {props} props - the id of the chauffeur that will be updated
* @param {data} data - the new data of the chauffeur
*/
export const updateChauffeur = (props, data) => {
  return axios.put(`${config.url}/rest/chauffeur/update/chauffeur`, data, setAuthenticationHeader());
}

/**
* Sends a POST request to the server to add a new chauffeur
* @param {data} data - the object with all data for the new chauffeur
*/
export const createChauffeur = (data) => {
  return axios.post(`${config.url}/rest/chauffeur/create/chauffeur`, data, setAuthenticationHeader());
}
