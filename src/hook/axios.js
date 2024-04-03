import axios from 'axios';
const BASE_URL = 'http://35.229.195.34/api';

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
export const loginGGAxios = async (user) => {
  const response = await drMap.post('/Auth/login/google', user);
  return response;
};

export const getUserCode = async (token) => {
  const response = await drMap.post('/User/code', undefined, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return response;
};

export const getQrImg = async () => {
  const response = await drMap.get('/Qr/QrCodeImg');
  return response;
};

export const getQrLink = async () => {
  const response = await drMap.get('/Qr/QrLink');
  return response;
};
