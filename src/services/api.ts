import axios from 'axios';

export const restaurantApi = axios.create({
  baseURL: 'https://json-server-kappa-flame.vercel.app/venue',
});

export const menuApi = axios.create({
  baseURL: 'https://json-server-kappa-flame.vercel.app/menu',
});
