import axios from 'axios';
import config from '../config';

export const createRide = (data) => {
  return axios.post(`${config.url}/ride/create`, data);
}

export const getAllRides = (data) => {
  return axios.get(`${config.url}/ride/getAllRides`);
}
