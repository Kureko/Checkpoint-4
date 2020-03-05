import axios from 'axios';

const url = 'http://localhost:8080/api';

export const getDragons = () => {
    return axios.get(`${url}/dragons`, {headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}}).then(response => response.data);
  };

export const getCharacters = () => {
    return axios.get(`${url}/characters`, {headers: {'Access-Control-Allow-Origin': 'http://localhost:3000'}}).then(response => response.data);
};
