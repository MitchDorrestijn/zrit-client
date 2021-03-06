import axios from 'axios';
import config from '../config';
import {redirectToErrorPage} from '../global/Methods';
import {setAuthenticationHeader} from '../global/Methods';

/**
* Sends a GET request to the server to get the data of all utilities
* @param {props} props - the history router so users can go back after receiving an error
*/
export const getAllUtilities = (props) => {
  return axios.get(`${config.url}/rest/utility/all/utilities`, setAuthenticationHeader()).catch((err) => redirectToErrorPage(props));
};
