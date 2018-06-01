import axios from 'axios';
import config from '../config';

export const createRide = (data) => {
  return axios.post(`${config.url}/ride/addRide`, data);
}
