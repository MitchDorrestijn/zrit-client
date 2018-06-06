import axios from 'axios';
import config from '../config';
import {redirectToErrorPage, setAuthenticationHeader} from '../global/Methods';

/**
* Sends a GET request to the server to get all the limitations from the database
* @param {props} props - the history router so users can go back after receiving an error
*/
export const getAllLimitations = (props) => {
  return axios.get(`${config.url}/rest/limitation/getAllLimitations`, setAuthenticationHeader()).catch((err) => redirectToErrorPage(props));
};
