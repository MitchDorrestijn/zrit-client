import axios from 'axios';
import config from '../config';
import {redirectToErrorPage, setAuthenticationHeader, parseJwt, checkIfUserIsAdmin} from '../global/Methods';

/**
* Sends a GET request to the server to get the data of all zorginstellingen
* @param {props} props - the history router so users can go back after receiving an error
*/
export const getAllZorginstellingen = (props) => {
  if(checkIfUserIsAdmin()){
    return axios.get(`${config.url}/rest/zorginstelling/zorginstellingen`, setAuthenticationHeader()).catch((err) => redirectToErrorPage(props));
  } else {
    let properties = {
      id: parseJwt(localStorage.getItem("Token")).careInstitutionId
    };
    return getSpecificZorginstelling(properties);
  }
};

/**
* Sends a GET request to the server to get the data of a specific zorginstelling
* @param {props} props - the id of the zorginstelling that will return its data
*/
export const getSpecificZorginstelling = (props) => {
  return axios.get(`${config.url}/rest/zorginstelling/${props.id}`, setAuthenticationHeader());
}

/**
* Sends a DELETE request to the server to delete a specific zorginstelling
* @param {props} props - the id of the zorginstelling that will be removed
*/
export const deleteZorginstelling = (props) => {
  return axios.delete(`${config.url}/rest/zorginstelling/${props.id}`, setAuthenticationHeader());
}

/**
* Sends a PUT request to the server to update a specific zorginstelling
* @param {props} props - the id of the zorginstelling that will be updated
* @param {data} data - the new name of the zorginstelling
*/
export const updateZorginstelling = (props, data) => {
  return axios.put(`${config.url}/rest/zorginstelling/${props.id}/edit`, data, setAuthenticationHeader());
}

/**
* Sends a POST request to the server to add a new zorginstelling
* @param {data} data - the object with all data for the new zorginstelling
*/
export const createZorginstelling = (data) => {
  return axios.post(`${config.url}/rest/zorginstelling/addZorginstelling`, data, setAuthenticationHeader());
}
