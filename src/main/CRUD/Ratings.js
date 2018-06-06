import axios from 'axios';
import config from '../config';
import {redirectToErrorPage, setAuthenticationHeader, parseJwt, checkIfUserIsAdmin} from '../global/Methods';

/**
* Sends a GET request to the server to get the ratings
* @param {props} props - the history router so users can go back after receiving an error
*/
export const getAllRatings = (props) => {
  if(checkIfUserIsAdmin()){
    return axios.get(`${config.url}/rest/rating/ratings`, setAuthenticationHeader()).catch((err) => redirectToErrorPage(props));
  } else {
    let properties = {
      id: parseJwt(localStorage.getItem("Token")).careInstitutionId
    };
    return getRatingsOfASpecificCareInstitution(properties);
  }
};

/**
* Sends a GET request to the server to get the data of all ratings from a specific careInstitution
* @param {props} props - the id of the careInstitution that will return its ratings
*/
export const getRatingsOfASpecificCareInstitution = (props) => {
  return axios.get(`${config.url}/rest/rating/ratings/careInstitution/${props.id}`, setAuthenticationHeader());
}
