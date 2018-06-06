import axios from 'axios';
import config from '../config';
import {setAuthenticationHeader} from '../global/Methods';

export const createRide = (data) => {
  return axios.post(`${config.url}/rest/ride/create`, data, setAuthenticationHeader());
}
