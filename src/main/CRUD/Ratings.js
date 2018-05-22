import axios from 'axios';
import config from '../config';
import {redirectToErrorPage} from '../global/Methods';

/**
* Sends a GET request to the server to get the ratings
* @param {props} props - the history router so users can go back after receiving an error
*/
export const getAllRatings = (props) => {
  return axios.get(`${config.url}/rating/ratings`).catch((err) => redirectToErrorPage(props));
};
