import axios from 'axios';
const BASE_URL = 'http://35.187.149.47/api';

const drMap = axios.create({
  baseURL: BASE_URL
});

export const loginAccAxios = async (user) => {
  const response = await drMap.post('/Auth/login', user);
  return response;
};
export const registerAccAxios = async (user) => {
  const response = await drMap.post(`/User`, user);
  return response;
};
