import axios from 'axios';
import config from '../config';
import {redirectToErrorPage, setAuthenticationHeader} from '../global/Methods';

export const createToken = (data) => {
  return axios.post(`${config.url}/login`, data);
}

export const tokenExists = (data) => {
  return axios.get(`${config.url}/tokenExists/?token=${data}`);
}

export const getAllAuthenticatedUsers = (props) => {
  return axios.get(`${config.url}/rest/authentication/getAllAuthenticatedUsers`, setAuthenticationHeader()).catch((err) => redirectToErrorPage(props));
};

export const removeAuthenticatedUser = (props) => {
  return axios.put(`${config.url}/rest/authentication/${props.name}/delete`, setAuthenticationHeader());
}

export const createAuthenticatedUser = (data) => {
  return axios.post(`${config.url}/rest/authentication/addAuthenticatedUser`, data, setAuthenticationHeader());
}
