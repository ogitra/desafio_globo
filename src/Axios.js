import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://desafio-globo-50e2c-default-rtdb.firebaseio.com/',
});

export default instance;
