import axios from 'axios';
import config from '../config';
import {redirectToErrorPage} from '../global/Methods';

/**
* Sends a GET request to the server to get the data of all betalingen
* @param {props} props - the history router so users can go back after receiving an error
*/
export const getAllBetalingen = (props) => {
  return axios.get(`${config.url}/ride/rides/overview`).catch((err) => redirectToErrorPage(props));
};
