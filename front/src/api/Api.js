import axios from 'axios';

const url = 'http://localhost:8080/api';

export const getDragons = () => {
    return axios.get(`${url}/dragons`).then(response => response.data);
  };

export const getCharacters = () => {
    return axios.get(`${url}/characters`).then(response => response.data);
};
