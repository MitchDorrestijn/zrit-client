import axios from 'axios';
import config from '../config';

export const createToken = (data) => {
  return axios.post(`${config.url}/login`, data);
}

export const tokenExists = (data) => {
  return axios.get(`${config.url}/tokenExists/?token=${data}`);
}
