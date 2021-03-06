import axios from 'axios';
import config from '../config';
import {setAuthenticationHeader} from '../global/Methods';

/**
  * Sends a POST request to add a new ride
  * @param {data} data - the object that holds the data for the new ride
**/
export const createRide = (data) => {
  return axios.post(`${config.url}/rest/ride/create`, data, setAuthenticationHeader());
}

/**
  * Sends a GET to get all rides
  * @param {data} data - the data that gets used for the GET request
**/
export const getAllRides = (data) => {
  return axios.get(`${config.url}/ride/getAllRides`, setAuthenticationHeader());
}

/**
  * Sends a GET to get the rides from a specific driver
  * @param {data} data - the data that gets used for the GET request
**/
export const getDriverRides = (props) => {

  return axios.get(`${config.url}/ride/driver/${props.id}`);
}
