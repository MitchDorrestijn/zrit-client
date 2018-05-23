import axios from 'axios';
import config from '../config';
import {redirectToErrorPage} from '../global/Methods';

/**
* Sends a GET request to the server to get all the limitations from the database
* @param {props} props - the history router so users can go back after receiving an error
*/
export const getAllLimitations = (props) => {
  return axios.get(`${config.url}/limitation/limitations`).catch((err) => redirectToErrorPage(props));
};
